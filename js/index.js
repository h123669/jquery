/// <reference types="../@types/jquery" />

$('.div').on('click', function () {
    $('.paragraph').slideToggle(1000)
})
$('.div1').on('click', function () {
    $('.paragraph1').slideToggle(1000)
})
$('.div2').on('click', function () {
    $('.paragraph2').slideToggle(1000)
})
$('.div3').on('click', function () {
    $('.paragraph3').slideToggle(1000)
})

$('.test i').on('click', function () {
    $('.icons span').hide(1000)
    $(".icons-i").animate({ left: '0' },1000)
})
$('.icons-i').on('click', function () {
    $('.icons span').show(1000)
    $(this).animate({ left: '200' },1000)
    
    
})




var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
$('#countdown').css({
    color: 'white',
    fontSize: '40px',
})

var x= setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);
}, 1000);


var maxlength = 100;
$('#message').on('input',function () {
    var messageLength = $(this).val().length;
    var currentLength = maxlength - messageLength;
    $('#count').text(currentLength + " Characyer Reamining");
    $('#count').css({color:"red"})
})