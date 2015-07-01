$(document).ready(function(){
	$('.catalog-nav__link').on('click',function(e){
		e.preventDefault();

		var $this = $(this),
			list = $this.closest('.catalog-nav'),
			item = $this.closest('.catalog-nav__item'),
			items = list.find('.catalog-nav__item'),
			content = item.find('.catalog-nav__subnav'),
			otherContent = list.find('.catalog-nav__subnav'),
			itemLink = $this.closest('.catalog-nav__link'),
			itemLinks = list.find('.catalog-nav__link'),
			duration = 300;

			if (!itemLink.hasClass('sidebar__trigger_active')) {
				itemLinks.removeClass('sidebar__trigger_active');
				itemLink.addClass('sidebar__trigger_active');
			
			otherContent.stop(true,true).slideUp(duration);
			content.stop(true,true).slideDown(duration);
			} else {
				content.stop(true,true).slideUp(duration);
				itemLink.stop(true,true).removeClass('sidebar__trigger_active');

			}

			

	});

});