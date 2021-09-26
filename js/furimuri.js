console.log("123");
$("a.nav-link").click(function(){
    console.log("456");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});