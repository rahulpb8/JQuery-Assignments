$(document).ready(function(){
    let data;
    let product;
    $.getJSON('https://dummyjson.com/products', function(fetchedData){
        data = fetchedData
        product = data.products;
        // let output = ""
        console.log(data.products) 
        for(let item of product){
            let productDiv = $('<div class="product"></div>');
            $('.products').append(productDiv);
            let productImage = $('<img class="thumbnail" src="'+item.thumbnail+'">');
            productDiv.append(productImage);
            let details = $('<div class="details"></div>');
            productDiv.append(details);
            let title = $('<h1 class="title">'+item.title+'</h1>');
            details.append(title);
            let ratingDiv = $('<div class="ratingDiv"></div>');
            details.append(ratingDiv);
            ratingDiv.append($('<span class="rating">'+item.rating+'</span><span>★</span><br>'));
            let discount = item.price*(item.discountPercentage/100);
            let actualPrice = item.price-discount;
            details.append('<div class="actualPriceDiv"><span>$</span><span class="actualPrice">'+actualPrice.toFixed(2)+'</span></div>');
            details.append($('<div class="priceDiv"><span style="text-decoration:line-through;">$</span><span class="price">'+item.price+'</span><span class="discount">'+item.discountPercentage+'</span><span class="perc">% off<span></div>'));
            details.append('<div class="stockDiv"><span class="stock">'+item.stock +'</span><span> items left in stock</span></div>');
            details.append($('<p class="delivery">Free delivery</p>'));
            details.append($('<div class="forAddCart"><p class="description">'+item.description+'</p></div>'));
            details.append($('<p class="category">'+item.category+'</p>'));
            productDiv.append('<div class="addCartDiv"><button class="addToCart" title="Add this product to your cart">Add To Cart</button></div>');
        }
    })

    let cart = []
    let cartItem = $('.cartItem');
    let totalPrice = 0;

    function addCart() {
        if(cart.length === '0'){
            cartItem.text('Your cart is empty!')
        }
        else{
            cartItem.replaceWith(itemCartDiv);
            cartItem.removeClass('cartItem');
            $('.itemCartDiv').text(cartItem.text());
        }
    }

    function addPrice(itemPrice) {
        totalPrice += parseInt(itemPrice);
        $('#total').text(totalPrice);
    }

    function totalItem(){
        let totalQuantity = 0
        $('.itemCartDiv').each(function(){
            let itemCount = $(this).find('.productCount').text();
            itemCount = parseInt(itemCount);
            totalQuantity += itemCount;
        }) 
        $('#count').text(totalQuantity);
    }

    function sort(order){
        let products = $('.product').toArray();
        products.sort(function (a, b) {
            let priceA = parseFloat($(a).find('.actualPrice').text());
            let priceB = parseFloat($(b).find('.actualPrice').text());
            let ratingA = parseFloat($(a).find('.rating').text());
            let ratingB = parseFloat($(b).find('.rating').text());
            if (order === 'priceAscending') {
                return priceA - priceB;
            } else if(order === 'priceDescending') {
                return priceB - priceA;
            } else if(order === 'ratingAscending'){
                return ratingA - ratingB;
            }
            else {
                return ratingB - ratingA;
            }
        });
    
        $('.products').empty();
        products.forEach(function (product) {
            $('.products').append(product);
        });
    }

    $('#sort').on("change", function(){    
        let selected = $(this).val();
        if (selected === 'priceLowToHigh') {
            sort('priceAscending');
        } else if (selected === 'priceHighToLow') {
            sort('priceDescending');
        }
        else if(selected === 'ratingLowToHigh'){
            sort('ratingAscending')
        }
        else if(selected === 'ratingHighToLow'){
            sort('ratingDescending')
        }
    });

    $('#filter').on("change", function(){
        let sel = $(this).val().toLowerCase()
        $('.product').each(function(){
            let cat = $(this).find('.category').text();
            if(sel != cat){
                $(this).hide()
            }
            else if(sel === 'Category'){
                $('.product').show();
            }
            else{
                $(this).show()
            }
        })
        
        console.log()
        console.log(item.stock)
    })

    $('.products').on('click', '.addToCart', function (){
        let card = $(this).closest('.product');
        let productName = card.find('h1').text();
        $('.cartContainer').show()
        $('.products').addClass("toggle");
        $('.addToCart').addClass("addcartMargin")
        // console.log(productName);
        if(!cart.includes(productName)){
            cart.push(productName);
            let cartCard = $('<div class="itemCartDiv">'+ productName +'</div>');
            $('.cartItem').append(cartCard);
            let quantityControl = $('<div class="quantityControlDiv"></div>');
            cartCard.append(quantityControl);

            let price = card.find('.actualPrice').text();
            
            let btnMinus = $('<button class="btn-minus" type="button">-</button>');
            let productCount = $('<div class="productCount">1</div>');
            let btnPlus = $('<button class="btn-plus" type="button">+</button>');
            quantityControl.append(btnMinus);
            quantityControl.append(productCount);
            quantityControl.append(btnPlus);

            btnMinus.on('click', function(){
                let count = $(this).next().text();
                $(this).next().text(--count);
                if(count < 1){
                    $(this).parent().parent().remove();
                    cart.pop(productName);
                }
                addPrice(-price)
                totalItem();
            })

            btnPlus.on('click', function(){
                let count = $(this).prev().text();
                $(this).prev().text(++count);
                addPrice(price);
                totalItem();
            })
            addPrice(price);  
            totalItem(); 
        }    
        else{
            let price = card.find('.actualPrice').text();
            let cartCard = $('.itemCartDiv:contains("'+productName+'")');
            let quantityControl = cartCard.find('.productCount');
            let count = parseInt(quantityControl.text()) + 1;
            quantityControl.text(count);
            addPrice(price)
            totalItem();
        }

        addCart();

    })

    $('.cart').on('click', function(){
        $('.cartContainer').toggle();
        $('.products').toggleClass("toggle");
        $('.addToCart').toggleClass("addcartMargin")
    })

    $('.placeOrder').on('click', function(){
        location.reload()
    })

    let arr = [];

    $('.search').on('input', function () {
        let searchValue = $('.search').val().toLowerCase()
        $('.product').each(function () {
            let cardTitle = $(this).find('h1').text();
            cardTitle = cardTitle.toLowerCase();
            if (cardTitle.includes(searchValue)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }); 
})
