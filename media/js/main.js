$(document).ready(function() {
  $("#tog").click(function(e) {
    e.preventDefault();
    $("fieldset#signin_menu").toggle();
  });
  
  $("form#login_form").submit(function() {
    $("#login_ai").show();
    $.post('/login', $("form#login_form").serialize(), function(data){
      $("#login_ai").hide();
      if (data.result == 'ok') {
        location.href = 'user_area.php';
      } else if ( (data.result == 'errors') && (data.content.length > 0) ) {
        $.each(data.content, function (key, error) {
          $.jGrowl(error, {life: 10000});
        });
      }
    }, 'json');
    return false;
  });
  
  $("a").tipsy();
  
  $("div.box li > a").fancybox({
    'modal':true,
    'enableEscapeButton':true,
  });
  
  $("div.box li a.close").live("click", function(evt){
    $.fancybox.close();
    return false;
  });
});
