$(document).ready(function () {
	
$('.header__account-box-massege-logo').hover(function () {
		$(this).attr('src','./images/header/massege-hover.svg');
	}, function () {
		$(this).attr('src','./images/header/massege-passive.svg');
	}
);


$('#pop-up-account').hide();
$('#account-box').click(function (e) {
	$('#pop-up-account').slideToggle(300);
})

$(document).click(function(e){
	if(!$('#pop-up-account').is(e.target) && $('#pop-up-account').has(e.target).length === 0 && !$('#account-box').is(e.target) && $('#account-box').has(e.target).length === 0){
		$('#pop-up-account').slideUp(300);
	}
})





});