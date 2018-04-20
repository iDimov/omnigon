'use strict';

jQuery(function ($) {
  $('.burger-menu').on('click', function () {
    $(this).toggleClass('open');
  });
});