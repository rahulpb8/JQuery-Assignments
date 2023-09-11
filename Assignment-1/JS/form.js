$(document).ready(function(){

    $('.error').hide();
    $('#personal-form').submit( function(event){
        event.preventDefault();
        let usernameInput = $('#name').val().trim();
        let addressInput = $('#address').val().trim();
        let dobInput = $('#dob').val();
        let ageInput = $('#age').val();
        let genderInput = $('input[name="gender"]:checked').val();
        let termsInput = $('#agree:checked').val();

        if(usernameInput === ''){
            $('#error-name').show();
        }
        else if(!isNaN(usernameInput)){
            $('#error-name').replaceWith("<small>Name should not contain integer</small>").show();
        }
        else{
            $('#error-name').hide();
        }
        if(addressInput === ''){
            $('#error-address').show();
        }
        else{
            $('#error-address').hide();
        }
        if(!dobInput){
            $('#error-dob').show();
        }
        else{
            $('#error-dob').hide();
        }
        if(!ageInput){
            $('#error-age').show();
        }
        else{
            $('#error-age').hide();
        }
        if(!genderInput){
            $('#error-gender').show();
        }
        else{
            $('#error-gender').hide();
        }
        if(!termsInput){
            $('#error-terms').show();
        }
        else{
            $('#error-terms').hide();
        }
    })
})