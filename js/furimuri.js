var myFuriWorks;

$.getJSON( "./json/images.json", function(data) {
    myFuriWorks = data;
});

// Fade-in function
function rightContentLoader() {
    $(".loading").css("display", "");
    $(".loader-inner").loaders();
    setTimeout(function () {
        $(".loading").fadeOut(600);
    }, 2200);

    // rightContent 的淡入時間
    setTimeout(function () {
        $("#rightContent").fadeTo(1000,1);
    }, 2600);
}

// UI functions
$("a.nav-link").click(function(){
    let rightTitle = $("#rightTitle");
    rightTitle.css("opacity", "0.01");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    rightTitle.html("> " + this.text);
    setTimeout(function () {
        rightTitle.fadeTo(1000,1);
    }, 2600);
});

$("#homePage").click(function(){
    let rightTitle = $("#rightTitle");
    let rightContent = $("#rightContent");
    let contentStr = "";
    contentStr = contentStr.concat("<div class='row'>");
        contentStr = contentStr.concat("<div class='col-12'>");
        contentStr = contentStr.concat("<img src='./img/home.jpg' class='home rounded float-left img-fluid'>");
        contentStr = contentStr.concat("</a>");
    contentStr = contentStr.concat("</div>");
    // rightContent 的淡入時間
    
    rightContent.css("opacity", "0.01");
    rightContent.html(contentStr);
    rightTitle.html("");
    setTimeout(function () {
        rightContent.fadeTo(1000,1);
    }, 500);
});

$("a[name='classPage']").click(function($this){
    let rightContent = $("#rightContent");
    let contentStr = "";
    let thisID = $this.currentTarget.id;

    rightContent.css("opacity", "0.01");
    rightContentLoader();
    for(let i=0;i<myFuriWorks[thisID].images.length;i++) {
        let imgTitle = myFuriWorks[thisID].images[i].title;
        let imgContent = myFuriWorks[thisID].images[i].content;
        if(i%3==0) {
            contentStr = contentStr.concat("<div class='row align-items-center'>");
        }
        contentStr = contentStr.concat("<div class='col-lg-4 col-md-12 col-sm-12'>");
        contentStr = contentStr.concat("<a href='./img/"+ myFuriWorks[thisID].folder +"/" + myFuriWorks[thisID].images[i].name + ".jpg" + "' data-fancybox='gallery' data-caption='<h4>"+ imgTitle + "</h4><br><h5>" + imgContent +"</h5>'>");
        contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/"+myFuriWorks[thisID].folder+"/" + myFuriWorks[thisID].images[i].name + ".jpg" + "' alt=''>");
        contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
        if((i+1)%3==0 && i!=0) {
            contentStr = contentStr.concat("</div>");
        }
    }
    rightContent.html(contentStr);
});

function getObjectName(input){
    var rows = input.querySelector('img').name.split('.')[0];
    return rows;
}

// if(jQuery().fancybox) {
//     $(document).ready(function() {
//         $(".fancybox-pic").fancybox();
//     });
// } 
// $(document).ready(function() {
//     $(".fancybox-pic").fancybox();
// });