// Get images
let workImgs = new Array();
let animalImgs = new Array();
let coffeeImgs = new Array();
let illusImgs = new Array();
let lineImgs = new Array();
let merryImgs = new Array();
let watercolorImgs = new Array();

$.getJSON( "./json/images.json", function(data) {
    for(let i=0;i<data.myWork.length;i++) {
        workImgs.push(data.myWork[i].name + ".png")
    }
    for(let i=0;i<data.animal.length;i++) {
        animalImgs.push(data.animal[i].name + ".jpg")
    }
    for(let i=0;i<data.coffee.length;i++) {
        coffeeImgs.push(data.coffee[i].name + ".jpg")
    }
    for(let i=0;i<data.illus.length;i++) {
        illusImgs.push(data.illus[i].name + ".jpg")
    }
    for(let i=0;i<data.line.length;i++) {
        lineImgs.push(data.line[i].name + ".jpg")
    }
    for(let i=0;i<data.merry.length;i++) {
        merryImgs.push(data.merry[i].name + ".jpg")
    }
    for(let i=0;i<data.watercolor.length;i++) {
        watercolorImgs.push(data.watercolor[i].name + ".jpg")
    }
});

// for(let i=0;i<20;i++) {
//     $.ajax({
//         url: "https://furimuri.github.io/img/postcard/0"+ i +".jpg",
//         success: function(data) {
//             postcardImgs.push("0"+i+".jpg");
//         },
//         error: function(data) {
//             console.log("error");
//         }
//     });
// }
// console.log(postcardImgs);



// $.ajax({
//     url: "https://furimuri.github.io/img/postcard",
//     success: function(data) {
//         var parser = new DOMParser(),
//             doc = parser.parseFromString(data, 'text/html');
//         var rows = doc.querySelector('ul').querySelectorAll('li');
//         for (var i=1;i<rows.length;i++) {
//             postcardImgs.push(rows[i].querySelector('a span.name').innerHTML);
//         }
//     }
// });
// $.ajax({
//     url: "./img/work",
//     success: function(data) {
//         var parser = new DOMParser(),
//             doc = parser.parseFromString(data, 'text/html');
//         var rows = doc.querySelector('ul').querySelectorAll('li');
//         for (var i=1;i<rows.length;i++) {
//             workImgs.push(rows[i].querySelector('a span.name').innerHTML);
//         }
//     }
// });

// functions
function rightContentLoader() {
    $(".loading").css("display", "");
    $(".loader-inner").loaders();
    setTimeout(function () {
        $(".loading").fadeOut(600);
    }, 2400);

    // rightContent 的淡入時間
    setTimeout(function () {
        $("#rightContent").fadeTo(1000,1);
    }, 2800);
}


// UI functions
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
        contentStr = contentStr.concat("<img src='./img/home.jpg' class='home rounded float-left img-fluid'>");
        contentStr = contentStr.concat("</a>");
    contentStr = contentStr.concat("</div>");

    rightContent.html(contentStr);
    rightTitle.html("");
});

$("#animalPage").click(function(){
    let rightContent = $("#rightContent");
    let contentStr = "";
    rightContent.css("opacity", "0.01");
    rightContentLoader();
    for(let i=0;i<animalImgs.length;i++) {
        if(i%2==0) {
            contentStr = contentStr.concat("<div class='row'>");
        }
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
        contentStr = contentStr.concat("<a href='./img/Animal Illustration/" + animalImgs[i]+ "' data-fancybox='gallery' data-caption='Optional caption'>");
        contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/Animal Illustration/" + animalImgs[i]+ "' alt=''>");
        contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
        if(i%2!=0) {
            contentStr = contentStr.concat("</div>");
        }
    }
    rightContent.html(contentStr);
});

$("#coffeePage").click(function(){
    let rightContent = $("#rightContent");
    let contentStr = "";
    rightContent.css("opacity", "0.01");
    rightContentLoader();
    for(let i=0;i<coffeeImgs.length;i++) {
        if(i%2==0) {
            contentStr = contentStr.concat("<div class='row'>");
        }
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
        contentStr = contentStr.concat("<a href='./img/Coffee Shop/" + coffeeImgs[i]+ "' data-fancybox='gallery' data-caption='Optional caption'>");
        contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/Coffee Shop/" + coffeeImgs[i]+ "' alt=''>");
        contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
        if(i%2!=0) {
            contentStr = contentStr.concat("</div>");
        }
    }
    rightContent.html(contentStr);
});

$("#illusPage").click(function(){
    let rightContent = $("#rightContent");
    let contentStr = "";
    rightContent.css("opacity", "0.01");
    rightContentLoader();
    for(let i=0;i<illusImgs.length;i++) {
        if(i%2==0) {
            contentStr = contentStr.concat("<div class='row'>");
        }
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
        contentStr = contentStr.concat("<a href='./img/Illustration/" + illusImgs[i]+ "' data-fancybox='gallery' data-caption='Optional caption'>");
        contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/Illustration/" + illusImgs[i]+ "' alt=''>");
        contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
        if(i%2!=0) {
            contentStr = contentStr.concat("</div>");
        }
    }
    rightContent.html(contentStr);
});

$("#linePage").click(function(){
    let rightContent = $("#rightContent");
    let contentStr = "";
    rightContent.css("opacity", "0.01");
    rightContentLoader();
    for(let i=0;i<lineImgs.length;i++) {
        if(i%2==0) {
            contentStr = contentStr.concat("<div class='row'>");
        }
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
        contentStr = contentStr.concat("<a href='./img/Line Stickers/" + lineImgs[i]+ "' data-fancybox='gallery' data-caption='Optional caption'>");
        contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/Line Stickers/" + lineImgs[i]+ "' alt=''>");
        contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
        if(i%2!=0) {
            contentStr = contentStr.concat("</div>");
        }
    }
    rightContent.html(contentStr);
});

$("#merryPage").click(function(){
    let rightContent = $("#rightContent");
    let contentStr = "";
    rightContent.css("opacity", "0.01");
    rightContentLoader();
    for(let i=0;i<merryImgs.length;i++) {
        if(i%2==0) {
            contentStr = contentStr.concat("<div class='row'>");
        }
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
        contentStr = contentStr.concat("<a href='./img/Merry Christmas/" + merryImgs[i]+ "' data-fancybox='gallery' data-caption='Optional caption'>");
        contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/Merry Christmas/" + merryImgs[i]+ "' alt=''>");
        contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
        if(i%2!=0) {
            contentStr = contentStr.concat("</div>");
        }
    }
    rightContent.html(contentStr);
});

$("#watercolorPage").click(function(){
    let rightContent = $("#rightContent");
    let contentStr = "";
    rightContent.css("opacity", "0.01");
    rightContentLoader();
    for(let i=0;i<watercolorImgs.length;i++) {
        if(i%2==0) {
            contentStr = contentStr.concat("<div class='row'>");
        }
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
        contentStr = contentStr.concat("<a href='./img/Watercolor/" + watercolorImgs[i]+ "' data-fancybox='gallery' data-caption='Optional caption'>");
        contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/Watercolor/" + watercolorImgs[i]+ "' alt=''>");
        contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
        if(i%2!=0) {
            contentStr = contentStr.concat("</div>");
        }
    }
    rightContent.html(contentStr);
});


$("#workPage").click(function(){
    let rightContent = $("#rightContent");
    let contentStr = "";
    rightContent.css("opacity", "0.01");
    $(".loading").css("display", "");
    for(let i=0;i<workImgs.length;i++) {
        if(i%2==0) {
            contentStr = contentStr.concat("<div class='row'>");
        }
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
        contentStr = contentStr.concat("<div class='nsb'>");
        contentStr = contentStr.concat("<a href='#'>");
        contentStr = contentStr.concat("<img name='" + workImgs[i] + "' class='work img-fluid' style='max-width: 300px;' src='./img/work/" + workImgs[i]+ "' alt=''>");
        contentStr = contentStr.concat("</a>");
        contentStr = contentStr.concat("</div>");
        contentStr = contentStr.concat("</div>");
        if(i%2!=0) {
            contentStr = contentStr.concat("</div>");
        }
    }
    rightContent.html(contentStr);
    
    setTimeout(function(){
        $("div.nsb a").each(function(){
            $(this).nsHover({
                bgcolor: '#fff',
                bganim : 'fade',
                bgpic: '',
                content: '<div class="content" style="color: #222;">' +  getObjectName(this) + '</div>'
            });
        });
        rightContentLoader();
    }, 200);
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

