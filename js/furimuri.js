// Get images
let workImgs = new Array();
let postcardImgs = new Array();

$.getJSON( "./json/images.json", function(data) {
    for(let i=0;i<data.myWork.length;i++) {
        workImgs.push(data.myWork[i].name + ".png")
    }
    for(let i=0;i<data.myPostcards.length;i++) {
        postcardImgs.push(data.myPostcards[i].name + ".jpg")
    }
    console.log(workImgs);
    console.log(postcardImgs);
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
    }, 1600);

    // rightContent 的淡入時間
    setTimeout(function () {
        $("#rightContent").fadeTo(1000,1);
    }, 2000);
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
        contentStr = contentStr.concat("<img src='./img/home.png' class='home rounded float-left img-fluid'>");
        contentStr = contentStr.concat("</a>");
    contentStr = contentStr.concat("</div>");

    rightContent.html(contentStr);
    rightTitle.html("");
});

$("#postcardPage").click(function(){
    let rightContent = $("#rightContent");
    let contentStr = "";
    rightContent.css("opacity", "0.01");
    rightContentLoader();
    for(let i=0;i<postcardImgs.length;i++) {
        if(i%2==0) {
            contentStr = contentStr.concat("<div class='row'>");
        }
        contentStr = contentStr.concat("<div class='col-md-6 col-sm-12'>");
        contentStr = contentStr.concat("<a href='./img/postcard/" + postcardImgs[i]+ "' data-fancybox='gallery' data-caption='Optional caption'>");
        contentStr = contentStr.concat("<img class='work img-fluid' style='max-width: 300px;' src='./img/postcard/" + postcardImgs[i]+ "' alt=''>");
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

