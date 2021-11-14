var myFuriWorks;

// fb://profile/805794976434515

// var isMobile = false; //initiate as false
// device detection
// if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
//     || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
//     isMobile = true;
//     console.log(isMobile);
// }

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}

if(getMobileOperatingSystem() == "iOS") {
    $("#linkFB").attr("href", "fb://profile/805794976434515");
}

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