(function ( $ ) {

	$.fn.adsStickyBar = function(){
		if(this.scrollTop()>0){
			$('[data-ads-top-bar]').hasClass('ads-sticky')? $('[data-ads-top-bar]').addClass('ads-stick-to-top'): void(0);
		}
		else{
			$('[data-ads-top-bar]').removeClass('ads-stick-to-top');
		}
	};


}( jQuery ));
