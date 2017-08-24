jQuery(document).ready(function() {
    jQuery('[data-toggle="tooltip"]').tooltip();
});

jQuery(function() {
    jQuery('[data-toggle="popover"]').popover()

});

jQuery('.pop').each(function() {
    var elem = jQuery(this);
    elem.popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        container: elem
    });



});

jQuery(window).on( "load", function() {
    $("#menu_user_id").html("");
    var UserId = jQuery('#user_id').val();
    var TaxRefNo = jQuery('#user_taxref').val();
    jQuery("#menu_user_id").append(UserId+"<br>Tax Ref No. "+TaxRefNo);
    });
