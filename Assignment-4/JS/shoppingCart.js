$(document).ready(function(){

    let cart = [];
    let cartItem = $('.cartItem');

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
            
            let btnMinus = $('<button class="btn-minus" type="button">-</button>');
            let productCount = $('<div class="productCount">1</div>');
            let btnPlus = $('<button class="btn-plus" type="button">+</button>');
            quantityControl.append(btnMinus);
            quantityControl.append(productCount);
            quantityControl.append(btnPlus);
            let count = 1;

            btnMinus.on('click', function(){
                $(this).next().text(--count);
                if(count < 1){
                    $(this).parent().parent().remove();
                }
            })
            
            btnPlus.on('click', function(){
                $(this).prev().text(++count);
            })
        }
        addCart();
    })

    $('.search').on('input', function () {
        let searchValue = $('.search').val()
        searchValue.toLowerCase();
        $('.root').find('.card').each(function () {
            let cardTitle = $(this).find('h1').text();
            cardTitle = cardTitle.toLowerCase();
            if (cardTitle.includes(searchValue)) {
                $(this).show();
            } else {
                $(this).hide();
                if(!$('.root .card:visible')){
                    alert('no result');
                }
            }
            
        });
    });
    
});