(function ($) {
  'use strict';
  $(function () {
    $(document).on('click', '[data-toggle="offcanvas"]', function () {
      //$('[data-toggle="offcanvas"]').on("click", function() {
      $('.sidebar-offcanvas').toggleClass('active')
    });
  });
})(jQuery);