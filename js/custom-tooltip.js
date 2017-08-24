/**(function ($){

$.fn.customTooltip = function(){

    this.hover(function(){
        $(this).append('<span>marked up content</span> seems to work just fine')
    });
    return this;


}( jQuery ));)
**/

jQuery(".pop").on('hover', function () {
    jQuery(this).append('<span>marked up content</span> seems to work just fine')
});

//jQuery("[name=btnSaved]").on('click', function () {

(function ( $ ) {
    $.fn.customTooltip = function(){
		this.hover(function(){
			$(this).append('<span>marked up content</span> seems to work just fine');
		});
		return this;
	};


})( jQuery );
jQuery('.pop').customTooltip();

