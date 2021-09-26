$("a.nav-link").click(function(){
    console.log("456");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});

$("#homePage").click(function(){
    let rightContent = $("#rightContent");
    rightContent.html("<img src='./img/home.png' class='home rounded float-left img-fluid'>");
});

$("#workPage").click(function(){
    let rightContent = $("#rightContent");

    let contentStr = "";
    contentStr = contentStr.concat("<a href='./img/work/01.jpg' data-fancybox='gallery' data-caption='Optional caption'>");
    contentStr = contentStr.concat("<img class='img-fluid' style='max-width: 200px;' src='./img/work/01.jpg' alt=''>");
    contentStr = contentStr.concat("</a>");
    contentStr = contentStr.concat("<a href='./img/work/02.jpg' data-fancybox='gallery' data-caption='Optional caption'>");
    contentStr = contentStr.concat("<img class='img-fluid' style='max-width: 200px;' src='./img/work/02.jpg' alt=''>");
    contentStr = contentStr.concat("</a>");
    contentStr = contentStr.concat("<a href='./img/work/03.jpg' data-fancybox='gallery' data-caption='Optional caption'>");
    contentStr = contentStr.concat("<img class='img-fluid' style='max-width: 200px;' src='./img/work/03.jpg' alt=''>");
    contentStr = contentStr.concat("</a>");
    console.log(contentStr);
    rightContent.html(contentStr);

});

// if(jQuery().fancybox) {
//     $(document).ready(function() {
//         $(".fancybox-pic").fancybox();
//     });
// } 
// $(document).ready(function() {
//     $(".fancybox-pic").fancybox();
// });

