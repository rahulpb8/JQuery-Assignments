$(document).ready(function(){
    let btn = $('<button id="button1">').html('Click here');
    let title = $('<h1>ASSIGNMENT-3</h1>');
    let clickCounter = 0;
    let imageDiv = $('<div class="imageDiv"></div>')
    let image1 = $('<img src="https://cdn.pixabay.com/photo/2015/09/08/21/02/superbike-930715_1280.jpg" class="image active-image" alt="Superbike-1">');
    let image2 = $('<img src="https://cdn.pixabay.com/photo/2020/05/20/12/26/race-5196272_1280.jpg" class="image next-image" alt="Superbike-2">');
    let image3 = $('<img src="https://cdn.pixabay.com/photo/2023/07/05/10/24/racing-8107972_1280.jpg" class="image" alt="Superbike-3">');
    let image4 = $('<img src="https://cdn.pixabay.com/photo/2020/05/20/12/23/handoff-5196262_1280.jpg" class="image" alt="Superbike-4">');
    let btn2 = $('<button>').html('Next')
    $('body').append(btn);
    btn.on('click', function(){
        $('body').append(title);
        clickCounter++;
        if(clickCounter === 2){
            $('body').append(imageDiv);
            $('.imageDiv').append(image1);
            $('body').append(btn2);
        }
    })
    btn2.on('click', function(){
        $('.imageDiv').append(image2);
        $('.imageDiv').append(image3);
        $('.imageDiv').append(image4);
        let current = $('.active-image');
        let next = current.next();
        if(next.length){
            next.addClass('active-image')
            current.removeClass('active-image'); 
        }
        else{
            $('.image:first-child').addClass('active-image')
            current.removeClass('active-image');
        }
    })
});