$(document).ready(function() {
	$('#addItem').on('click', '#submit', function() {
		event.preventDefault();
		var item = $('#add').val();
		if (item == "" || item.trim().length == 0) {
			alert("Enter an item");
		} else {
			$('ul').append('<li>' + item + '<div class="remove"></div></li>');
			$('#add').val('');
		}
	})
	});
	
$(document).keypress(function(e) {
	if(e.keycode == 13) {
		e.preventDefault();
		enter.click();
	}
	});

$(document).on('click', 'li', function() {
	$(this).toggleClass('checked');
	})
	.on('click', '.remove', function() {
		$(this).closest('li').remove();
		//$(this).prev('li').remove();
		//$(this).closest('.remove').remove();
	});

