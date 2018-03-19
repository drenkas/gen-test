$(document).ready(function(){
	$('.search__select-style').on('click', function(){
		$(this).children('.select-style__icon').toggleClass('rotate-180');
	});
	
	
});
(function ($) {
	var input_class = 'input-clearable',
		input_class_x = input_class + '__x',
		input_class_x_over = input_class + '__x-over',
		input_selector = '.' + input_class,
		input_selector_x = '.' + input_class_x,
		input_selector_x_over = '.' + input_class_x_over,
		event_main = input_class + '-init',
		event_names = [event_main, 'focus drop paste keydown keypress input change'].join(' '),
		btn_width = 13,
		btn_height = 13,
		btn_margin = 7;

	function tog(v) {
		return v ? 'addClass' : 'removeClass';
	}

	$(document).on(event_names, input_selector, function () {
		$(this)[tog(this.value)](input_class_x);
	});

	$(document).on('mousemove', input_selector_x, function (e) {
		var input = $(this),
			input_width = this.offsetWidth,
			input_height = this.offsetHeight,
			input_border_bottom = parseFloat(input.css('borderBottomWidth')),
			input_border_right = parseFloat(input.css('borderRightWidth')),
			input_border_left = parseFloat(input.css('borderLeftWidth')),
			input_border_top = parseFloat(input.css('borderTopWidth')),
			input_border_hr = input_border_left + input_border_right,
			input_border_vr = input_border_top + input_border_bottom,
			client_rect = this.getBoundingClientRect(),
			input_cursor_pos_x = e.clientX - client_rect.left,
			input_cursor_pos_y = e.clientY - client_rect.top,
			is_over_cross = true;

		is_over_cross = is_over_cross && (input_cursor_pos_x >= input_width - input_border_hr - btn_margin - btn_width);
		is_over_cross = is_over_cross && (input_cursor_pos_x <= input_width - input_border_hr - btn_margin);
		is_over_cross = is_over_cross && (input_cursor_pos_y >= (input_height - input_border_vr - btn_height) / 2);
		is_over_cross = is_over_cross && (input_cursor_pos_y <= (input_height - input_border_vr - btn_height) / 2 + btn_height);

		$(this)[tog(is_over_cross)](input_class_x_over);
	});

	$(document).on('click', input_selector_x_over, function () {
		$(this).removeClass([input_class_x, input_class_x_over].join(' ')).val('').trigger('input');
	});

	$(function () {
		$(input_selector).trigger(event_main);
	});

})(jQuery);

var Slider = document.getElementById('search__age-range');

noUiSlider.create(Slider, {
	start: [ 18, 80 ],
	step: 1,
	margin: 3,
	tooltips: true,
	format: wNumb({
		decimals: 0
	}),
	connect: true,
	range: {
		'min': 18,
		'max': 90
	}
});

//top girls

var topGirl = $(".profile[data-popular='false']");

topGirl.children('.profile__top').children('.profile__top-popular').addClass('ds-none');

//online girls

var onlineGirl = $(".profile[data-online='false']");

onlineGirl.children('.profile__info').children('.profile__info-title').children('.profile__info-online').addClass('ds-none');

//sort by category

$('.result__category').click(function() {
	$('.result__category').removeClass('selected');
	$(this).addClass('selected');
	thisItem 	= $(this).attr('data-category');
	$('.profile').removeClass('ds-block');
	$('.profile').removeClass('ds-none');
	$('.profile[data-'+thisItem+'="true"]').addClass('ds-block');
	$('.profile[data-'+thisItem+'="false"]').addClass('ds-none');
} 
);

//to top

$(function() {
 
	$(window).scroll(function() {
	 
	if($(this).scrollTop() != 0) {
	 
	$('#toTop').fadeIn();
	 
	} else {
	 
	$('#toTop').fadeOut();
	 
	}
	 
	});
	 
	$('#toTop').click(function() {
	 
	$('body,html').animate({scrollTop:0},800);
	 
	});
	 
});

//favorite
var favoriteGirl = $(".profile[data-favorite='true']");

favoriteGirl.children('.profile__top').children('.profile__top-contacts').children('.profile__top-contacts__favorite').children('.favorite-img').addClass('favorite-img-active');

$('.profile__top-contacts__favorite').click(function() {

	$(this).children('.favorite-img').toggleClass('favorite-img-active');
})