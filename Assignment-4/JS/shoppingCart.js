$(document).ready(function(){

    let cart = [];
    let cartItem = $('.cartItem');
    let totalprice=0;
    let price = 0;

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
    $('.addToCart').on('click', function() {
        let card = $(this).closest('.card');
        let itemName = card.find('h1').text();
        if(!cart.includes(itemName)){
            cart.push(itemName);
            let cartCard = $('<div class="itemCartDiv">'+ itemName +'</div>');
            $('.cartItem').append(cartCard);
            let quantityControl = $('<div class="quantityControlDiv"></div>');
            cartCard.append(quantityControl);

            let price = card.find('.value').text();
            // price = $(this).prev().children().eq(1).text();
            
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
                    cart.pop(itemName);
                }
                addPrice(-price)
            })

            btnPlus.on('click', function(){
                let count = $(this).prev().text();
                $(this).prev().text(++count);
                addPrice(price);
            })
            addPrice(price);   
        }
        else{
            let price = card.find('.value').text();
            let cartCard = $('.itemCartDiv:contains("'+itemName+'")');
            let quantityControl = cartCard.find('.productCount');
            let count = parseInt(quantityControl.text()) + 1;
            quantityControl.text(count);
            addPrice(price)
        }
        function addPrice(itemPrice) {
            totalprice += parseInt(itemPrice);
            $('#total').text(totalprice);
        }
        addCart();
        
    })

    $('.search').on('input', function () {
        let searchValue = $('.search').val().toLowerCase()
        $('.root').find('.card').each(function () {
            let cardTitle = $(this).find('h1').text();
            cardTitle = cardTitle.toLowerCase();
            if (cardTitle.includes(searchValue)) {
                $(this).show();
            } else {
                $(this).hide();
                if(!$('.root .card:visible')){
                    let noItem = $('<div class="noItem">No Result Found</div>');
                    $('.root').append(noItem);
                    noItem.show()
                }
            }
            
        });
    });
    
});