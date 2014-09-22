$(document).ready(function() {
	$(document).keypress(function(e) {
		if(e.keycode == 13) {
			e.preventDefault();
			$('#add').click();
		}
	});
	
	$(document).on('click', '#addItem', function() {
		var item =$('#add').val('');
		var list = $('#list');
		$.each(item, function() {
			var div = $('<div/>')
				.addClass('unchecked')
				.appendTo(list);	
		});
	});
	
	$(document).on('click', '.unchecked', function () {
		$(this).closest('div').toggleClass('checked');
	});
	
	$(document).on('click', '.remove', function() {
		$(this).parent().closest('div').remove();	
	});
});// JavaScript Document