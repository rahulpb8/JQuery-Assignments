$(document).ready(function(){


    $('.right').on('click',function(event){
        event.preventDefault();
        let current = $('.active');
        let next = current.next();
        let currentBullet = $('.active-bullet');
        let nextBullet = currentBullet.next()
        if(next.length){
            current.removeClass('active');
            next.addClass('active');
            currentBullet.removeClass('active-bullet');
            nextBullet.addClass('active-bullet');
        }
        else{
            current.removeClass('active');
            $('.image:first-child').addClass('active');
            currentBullet.removeClass('active-bullet');
            $('.slider-indicator:first-child').addClass('active-bullet');
        }
    })
    $('.left').on('click',function(event){
        event.preventDefault();
        let current = $('.active');
        let prev = current.prev();
        let currentBullet = $('.active-bullet');
        let prevBullet = currentBullet.prev()
        if(prev.length){
            current.removeClass('active');
            prev.addClass('active');
            currentBullet.removeClass('active-bullet');
            prevBullet.addClass('active-bullet');
        }
        else{
            current.removeClass('active');
            $('.image:last-child').addClass('active');
            currentBullet.removeClass('active-bullet');
            $('.slider-indicator:last-child').addClass('active-bullet');
        } 
    })
        setInterval(function(){
            let current = $('.active');
            let next = current.next();
            let currentBullet = $('.active-bullet');
            let nextBullet = currentBullet.next()
            if(next.length){
                current.removeClass('active');
                next.addClass('active');
                currentBullet.removeClass('active-bullet');
                nextBullet.addClass('active-bullet');
            }
            else{
                current.removeClass('active');
                $('.image:first-child').addClass('active');
                currentBullet.removeClass('active-bullet');
                $('.slider-indicator:first-child').addClass('active-bullet');
            }
        },4000);
    
})