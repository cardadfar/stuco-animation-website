
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
    window.open('syllabus.pdf', '_blank');
});


/*-------------------ASSIGNMENTS------------------*/

$("#google-drive").click(function() {
    window.open('www.google.com', '_blank');
});


$("#youtube").click(function() {
    window.open('www.youtube.com', '_blank');
});


$("#tumblr").click(function() {
    window.open('www.tumblr.com', '_blank');
});


$("#vimeo").click(function() {
    window.open('www.vimeo.com', '_blank');
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
