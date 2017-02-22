$(document).foundation();


// Navegacion
$('[data-toggle-dia]').click(function(){
	const panel = $(this).data('toggleDia');
	console.log(panel);
	$('#lineup-tabs').foundation('selectTab', panel);
});

// Offcanavas

const canvas = $('#offCanvas');
const sticky = $('#stcky');
canvas.find('li').click(function(ev){
	canvas.foundation('close');
	setTimeout(function() {
		sticky.css('left', '0px');
	}, 0);
});

