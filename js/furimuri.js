$("a.nav-link").click(function(){
    let rightTitle = $("#rightTitle");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    rightTitle.html(this.name);
});

$("#homePage").click(function(){
    let rightTitle = $("#rightTitle");
    let rightContent = $("#rightContent");
    let contentStr = "";
    contentStr = contentStr.concat("<div class='row'>");
        contentStr = contentStr.concat("<div class='col-12'>");
        contentStr = contentStr.concat("<img src='./img/home.png' class='home rounded float-left img-fluid'>");
        contentStr = contentStr.concat("</a>");
    contentStr = contentStr.concat("</div>");

    rightContent.html(contentStr);
    rightTitle.html("");
});

$("#workPage").click(function(){
    let rightContent = $("#rightContent");

    let contentStr = "";
    contentStr = contentStr.concat("<div class='row'>");
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
            contentStr = contentStr.concat("<a href='./img/work/01.jpg' data-fancybox='gallery' data-caption='Optional caption'>");
            contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/work/01.jpg' alt=''>");
            contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
            contentStr = contentStr.concat("<a href='./img/work/02.jpg' data-fancybox='gallery' data-caption='Optional caption'>");
            contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/work/02.jpg' alt=''>");
            contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
    contentStr = contentStr.concat("</div>");
    contentStr = contentStr.concat("<div class='row'>");
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
            contentStr = contentStr.concat("<a href='./img/work/03.jpg' data-fancybox='gallery' data-caption='Optional caption'>");
            contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/work/03.jpg' alt=''>");
            contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
        contentStr = contentStr.concat("</div>");
    contentStr = contentStr.concat("</div>");

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

