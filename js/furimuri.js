$("a.nav-link").click(function(){
    console.log("456");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});

$("#homePage").click(function(){
    let rightContent = $("#rightContent");
    rightContent.html("<img src='./img/home.png' class='home rounded float-left img-fluid'>");
});
