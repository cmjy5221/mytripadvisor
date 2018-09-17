$(function () {
	$('form-register').submit(function (e) {
		e.preventDefault();
	    $(this).find('.txtwarning').empty().hide();
	});
});