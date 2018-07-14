$("#syllabus").click(function() {
    window.open('syllabus.pdf', '_blank');
});

$("#google-drive").click(function() {
    window.open('www.google.com', '_blank');
});

$("#overview").click(function() {
    window.location.href = 'index.html';
});

$("#calendar").click(function() {
    window.location.href = 'calendar.html';
});

$("#assignments").click(function() {
    window.location.href = 'assignments.html';
});

$("#faq").click(function() {
    window.location.href = 'faq.html';
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
