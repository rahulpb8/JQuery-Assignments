$(document).ready(function(){

    $('.right').on('click',function(event){
        event.preventDefault();
        let current = $('.active-image');
        let next = current.next();
        let currentBullet = $('.active-bullet');
        let nextBullet = currentBullet.next()
        if(next.length){
            current.removeClass('active-image');
            next.addClass('active-image');
            currentBullet.removeClass('active-bullet');
            nextBullet.addClass('active-bullet');
        }
        else{
            current.removeClass('active-image');
            $('.image:first-child').addClass('active-image');
            currentBullet.removeClass('active-bullet');
            $('.slider-indicator:first-child').addClass('active-bullet');
        }
    })
    $('.left').on('click',function(event){
        event.preventDefault();
        let current = $('.active-image');
        let prev = current.prev();
        let currentBullet = $('.active-bullet');
        let prevBullet = currentBullet.prev()
        if(prev.length){
            current.removeClass('active-image');
            prev.addClass('active-image');
            currentBullet.removeClass('active-bullet');
            prevBullet.addClass('active-bullet');
        }
        else{
            current.removeClass('active-image');
            $('.image:last-child').addClass('active-image');
            currentBullet.removeClass('active-bullet');
            $('.slider-indicator:last-child').addClass('active-bullet');
        } 
    })
    $('.slider-indicator').on('click', function(event){
        event.preventDefault();
        let index = $(this).index();
        let n = index+1;
        let current = $('.active-image');
        let currentBullet = $('.active-bullet');
        current.removeClass('active-image');
        $('.image:nth-child('+n+')').addClass('active-image');
        currentBullet.removeClass('active-bullet');
        $('.slider-indicator:nth-child('+n+')').addClass('active-bullet');
    })
        setInterval(function(){
            let current = $('.active-image');
            let next = current.next();
            let currentBullet = $('.active-bullet');
            let nextBullet = currentBullet.next()
            if(next.length){
                current.removeClass('active-image');
                next.addClass('active-image');
                currentBullet.removeClass('active-bullet');
                nextBullet.addClass('active-bullet');
            }
            else{
                current.removeClass('active-image');
                $('.image:first-child').addClass('active-image');
                currentBullet.removeClass('active-bullet');
                $('.slider-indicator:first-child').addClass('active-bullet');
            }
        },4000);
    
})