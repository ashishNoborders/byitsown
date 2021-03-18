$('#banner').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: true,
    autoplay:true,

    autoplayTimeout:5000,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
 
$("#book-appointment").on('submit',function(e){
    e.preventDefault();
    $('.book-button').val('Loading...'); 
    var form = $(this);
         $.ajax({
         url: "inc/custom-email.php",
         method: form.attr('method'),
         data: form.serialize(),
         success: function(result){
          $('.book-button').val('Book now');
         if (result == 'success'){
             $('.output_message').removeClass('error').addClass('success').text('Congratulations!! You have submitted your enquiry. Our team will connect you shortly to discuss your availability for your appointment.');  
             setTimeout(function(){ 
                form.trigger("reset");
                $('.output_message').text('');
              }, 3000);
         } else {
             $('.output_message').removeClass('').addClass('error').text('Error Sending email!');
         }
        
     } 
    });
    // Create appointment section 
});

   
$("#joyof-contact").on('submit',function(e){
    e.preventDefault();
    $('.contact-us').val('Loading...'); 
    var form = $(this);
         $.ajax({
         url: "inc/custom-email.php",
         method: form.attr('method'),
         data: form.serialize(),
         success: function(result){
          $('.contact-us').val('Send');
         if (result == 'success'){
             $('.output_message').removeClass('error').addClass('success').text('Thank you for showing your interest. Will connect you soon.');  
             setTimeout(function(){ 
                form.trigger("reset");
                $('.output_message').text('');
              }, 3000);
         } else {
             $('.output_message').removeClass('').addClass('error').text('Error Sending email!');
         }
         
     } 
    });
    // Create appointment section 
});
   
// careers form start 
jQuery('#careers').on('submit', function(e){
    e.preventDefault();
    $('.careers-bt').val('Loading...'); 
    var form = $(this);
    var formData = new FormData();
    var applicant_name = $('#applicant-name').val();
    formData.append('post_name', $('#position').val());
    formData.append('applicant_name', $('#applicant-name').val());
    formData.append('applicant_email', $('#applicant-email').val());
    formData.append('applicant_dob', $('#applicant-dob').val());
    formData.append('applicant_gender', $('#applicant-gender').val());
    formData.append('applicant_qualification', $('#applicant-qualification').val());
    formData.append('applicant_experience', $('#applicant-experience').val());
    formData.append('applicant_resume', $('#applicant-resume').val());
    $.ajax({
        url: "inc/custom-email.php",
        type : 'POST',
        data:  new FormData(this),
        contentType: false,
        cache: false,
        processData:false,
          success: function(result){
              $('.careers-bt').val('Apply Now');
                //console.log(result['type']);
                 if(result){
                     $('.output_message').removeClass('error').addClass('success').text("Dear"+applicant_name+",We appreciate your interest in working with Joy of Hearing Pvt. Ltd., you will be contacted by our HR soon for further updates."+applicant_name +"Thank you for your order, will get back to you shortly");  
                     setTimeout(function(){ 
                        form.trigger("reset");
                        $('.output_message').text('');
                      }, 3000);
                 } else {
                     $('.output_message').removeClass('success').addClass('error').text('Error Sending email!');
                 }
             
            
         } 

    });
});    

// careers form end 