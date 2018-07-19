

/*-------------------COLOR--------------------*/

var colorWell;
var defaultColor;


window.addEventListener("load", startup, false);
function startup() {
    colorWell = document.querySelector("#colorWell");
    $.getJSON( "assets/color.json", function( data ) {
        $.each( data, function( key, val ) {
            defaultColor = val;
        });
    });
    colorWell.value = defaultColor;
    $(':root').css("--purple", defaultColor);
    colorWell.addEventListener("change", updateAll, false);
}
function updateAll(event) {
    $(':root').css("--purple", event.target.value);
}

/*-------------------NAV BAR------------------*/


$("#overview").click(function() {
    window.location.href = 'index.html';
});

$("#calendar").click(function() {
    window.location.href = 'calendar.html';
});

$("#assignments").click(function() {
    window.location.href = 'assignments.html';
});

$("#files").click(function() {
    window.location.href = 'files.html';
});

$("#software").click(function() {
    window.location.href = 'software.html';
});

$("#resources").click(function() {
    window.location.href = 'resources.html';
});

$("#faq").click(function() {
    window.location.href = 'faq.html';
});

/*-------------------OVERVIEW------------------*/

$("#syllabus").click(function() {
    window.open('assets/files/syllabus.pdf', '_blank');
});


/*-------------------ASSIGNMENTS------------------*/

$("#google-drive").click(function() {
    window.open('https://www.google.com', '_blank');
});


$("#youtube").click(function() {
    window.open('https://www.youtube.com', '_blank');
});


$("#tumblr").click(function() {
    window.open('https://www.tumblr.com', '_blank');
});


$("#vimeo").click(function() {
    window.open('https://www.vimeo.com', '_blank');
});



/*-------------------FILES------------------*/

$("#syllabus").click(function() {
    window.open('assets/files/syllabus.pdf', '_blank');
});


$("#storyboard-template").click(function() {
    window.open('assets/files/storyboard template.ai', '_blank');
});


$("#smiley-demo").click(function() {
    window.open('assets/files/smiley demo.fla', '_blank');
});


$("#smiley-demo-completed").click(function() {
    window.open('assets/files/smiley demo (completed).fla', '_blank');
});


/*-------------------SOFTWARE------------------*/

$("#after-effects").click(function() {
    window.open('https://www.adobe.com/products/aftereffects.html', '_blank');
});

$("#animate").click(function() {
    window.open('https://www.adobe.com/products/animate.html', '_blank');
});

$("#illustrator").click(function() {
    window.open('https://www.adobe.com/products/illustrator.html', '_blank');
});

$("#photoshop").click(function() {
    window.open('https://www.adobe.com/products/photoshop.html', '_blank');
});




/*-------------------FAQ------------------*/

$(".qa").click(function() {
	if($(this).children(".answer").hasClass("answer-click")) {
    	$(this).children(".answer").removeClass("answer-click");
    	if($(".answer-click").length == 0) {
			$(".close-all").removeClass("close-all-visible");
    	}
    } else {
    	$(this).children(".answer").addClass("answer-click");
    	$(".close-all").addClass("close-all-visible");    	
    }
});

$(".close-all").click(function() {
	$(this).removeClass("close-all-visible");
    $(".qa").children(".answer").removeClass("answer-click");
})









/*---------------------- FUNCTIONS -----------------------*/

function DarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}