$('.wrapper-tabs .tab').on('click', function (event) {
  var id = $(this).attr('data-id');
  $('.wrapper-tabs').find('.tab-item').removeClass('active-tab').hide();
  $('.wrapper-tabs .tabs').find('.tab').removeClass('active');
  $(this).addClass('active');
  $('#' + id).addClass('active-tab').fadeIn();
  return false;
});

$('#to_top').on('click', () => {
  $('html, body').animate({
    scrollTop: $('.header__wrapper').height()
  }, 500);
});


