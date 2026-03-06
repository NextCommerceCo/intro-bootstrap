(function ($) {
    $(document).on('click.cart.modal.data-api', '[data-toggle="side-cart"]', function (e) {
        var $this = $(this);
        var href = $this.attr('href');
        $target = $(href);
        e.preventDefault();
        show( $target );
    });
    // add public plugin, to show hide cart
    $.fn.cart = function(method){
        if (method === 'show'){
            show( this );
        }else if (method === 'hide'){
            hide( this );
        }
    };
    show = function( $target ){
        $target.addClass('show');
        $('body').addClass('sidecart-open');
        $target.on("click.dismiss.cart", '[data-dismiss="side-cart"]', function(){
            hide( $target );
        });
        $(document).on('click', function(event){
            if (!$target.is(event.target) && !event.target.closest('[data-toggle="side-cart"]')) {
                hide( $target );
            }
        });
        // Make sure dont close the modal, when click inside target modal
        $target.click(function(event) {
            event.stopPropagation();
        });
        // trigger event for showing cart
        var e = $.Event('show.cart', { relatedTarget: $target });
        $target.trigger(e);
    };
    hide = function($target){
        $target.removeClass('show');
        $('body').removeClass('sidecart-open');
        // trigger event for hiding cart
        var e = $.Event('hide.cart', { relatedTarget: $target });
        $target.trigger(e);
    };
})(jQuery);