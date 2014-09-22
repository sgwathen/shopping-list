$(document).ready(function() {
	$('#addItem').on('click', '#submit', function() {
		var addItem = $('#add').val();
		if (addItem == "" || addItem.trim().length == 0) {
			alert("Enter an item");
		} else {
			$('#items ul').append('<li>' + addItem + '</li><div class="remove"></div>');
			$('#add').val('');
		}
	});
	
	//Enter to trigger click
	$(document).keypress(function(e) {
		if(e.keycode == 13) {
			e.preventDefault();
			enter.click();
		}
	});
	
	$(document).on('click', '.remove', function() {
		$(this).closest('li').remove();
	});
	
});// JavaScript Document