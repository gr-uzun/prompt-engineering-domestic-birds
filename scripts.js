$(document).ready(function() {
  // Önceden kaydedilmiş tema tercihini kontrol et
  var currentTheme = localStorage.getItem('theme');

  // Kaydedilmiş tema yoksa veya light ise light tema kullan
  if (!currentTheme || currentTheme === 'light') {
    $('body').removeClass('dark-theme');
    $('#theme-toggle').text('Dark Tema');
  } else {
    $('body').addClass('dark-theme');
    $('#theme-toggle').text('Light Tema');
  }

  // Tema değiştirme işlevi
  $('#theme-toggle').click(function() {
    if ($('body').hasClass('dark-theme')) {
      $('body').removeClass('dark-theme');
      $('#theme-toggle').text('Dark Tema');
      localStorage.setItem('theme', 'light'); // Tema tercihini kaydet
    } else {
      $('body').addClass('dark-theme');
      $('#theme-toggle').text('Light Tema');
      localStorage.setItem('theme', 'dark'); // Tema tercihini kaydet
    }
  });
});

