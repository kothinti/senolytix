$(document).ready(function() {
    
    $(".form-button").click(function(e) {
      e.preventDefault();

      let websitex = $(".website_x2").val();
      let email = $(".email-address").val();
      let fname = $(".first-name").val();
      let phone = $(".phone-number").val();

      $(".email-address,.first-name,.last-name,.phone-number").keypress(function() {
         $('.custom-error').hide();
      });

      $(".email-address,.first-name,.last-name,.phone-number").focus(function() {
        $('.custom-error').hide();
      });

      if (!fname.match(/^[a-zA-Z]+$/)) {
        $('.custom-error').text('Please enter valid name!');
        $('.custom-error').show();
        return;
      }else if (!phone.match(/^\d{10}$/)) {
    	$('.custom-error').text('Please enter valid phone number!');
    	$('.custom-error').show();
    	return;
      }else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        $('.custom-error').text('Please enter valid email!');
        $('.custom-error').show();
        return;
      }else if (websitex != "") {
          return;
      }else{
          $('.contact-form').submit();
      }
  });
    
    //Newsletter Subscription 
    $(".btn-subscribe").click(function(e) {
      e.preventDefault();

      let websitex = $(".website_x").val();
      let email = $(".email-newsletter-field").val();

      $(".email-newsletter-field").keypress(function() {
         $('.newsletter-error').hide();
      });

      $(".email-newsletter-field").focus(function() {
        $('.newsletter-error').hide();
      });

      if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        $('.newsletter-error').show();
        return;
      }else if (websitex != "") {
        return;
      }else{
        $('.longevity-newsletter').submit();
      }
    });
  });
