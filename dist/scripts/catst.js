$(document).ready(function(){
	$('#catst').on('change', function(){
				switch($(this).val()){
					case 'line': 
						$('.content-products').removeClass('grid')   
					break;
					case 'grid': 
						$('.content-products').addClass('grid')      
					break;
				};
			});
});