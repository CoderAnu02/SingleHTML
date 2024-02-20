$(document).ready(function(){
    $('.fa-solid.fa-heart').click(function($this)    {
        console.log('aa gya', $this);
        console.log($(this).parent().parent().children('.card-img-top').find('img'));
    });
});