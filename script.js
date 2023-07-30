// Add font awesome library (FontAwesome CDN link) in the head section of the HTML

// Handle form submission and show confirmation/thank you message
function submitForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const registrationForm = document.getElementById('registrationForm');
    const confirmationSection = document.getElementById('confirmation');
    const thankyouSection = document.getElementById('thankyou');
  
    // Validate form inputs (you can add more validation if needed)
  
    // Simulate form submission (replace with your own logic to send data to server)
    // Here, we're just logging the data in the console
    console.log(`Name: ${nameInput.value}`);
    console.log(`Email: ${emailInput.value}`);
  
    // Hide registration form
    registrationForm.classList.add('hidden');
  
    // Show confirmation message
    confirmationSection.classList.remove('hidden');
  
    // Simulate redirect to thank you page after 3 seconds
    // setTimeout(() => {
    //   confirmationSection.classList.add('hidden');
    //   thankyouSection.classList.remove('hidden');
    // }, 3000);
  }
  // JavaScript to handle button clicks and referral counting (you may need to use a framework like jQuery)
document.addEventListener("DOMContentLoaded", function() {
  // Handle Facebook Share Button Click
  document.getElementById("facebook-share-btn").addEventListener("click", function() {
    // Implement the Facebook sharing functionality here
    // Replace the window.open() with the actual Facebook sharing API
    window.open("https://www.facebook.com/sharer.php?u=https://www.example.com/webinar");
  });

  // Handle Twitter Share Button Click
  document.getElementById("twitter-share-btn").addEventListener("click", function() {
    // Implement the Twitter sharing functionality here
    // Replace the window.open() with the actual Twitter sharing API
    window.open("https://twitter.com/intent/tweet?url=https://www.example.com/webinar&text=Join%20this%20awesome%20webinar!");
  });

  // Handle LinkedIn Share Button Click
  document.getElementById("linkedin-share-btn").addEventListener("click", function() {
    // Implement the LinkedIn sharing functionality here
    // Replace the window.open() with the actual LinkedIn sharing API
    window.open("https://www.linkedin.com/shareArticle?url=https://www.example.com/webinar&title=Webinar%20Invitation");
  });

  // Handle WhatsApp Share Button Click
  document.getElementById("whatsapp-share-btn").addEventListener("click", function() {
    // Implement the WhatsApp sharing functionality here
    // Replace the window.open() with the actual WhatsApp sharing API
    window.open("whatsapp://send?text=Join this awesome webinar! https://www.example.com/webinar");
  });

  // Handle Send Email Button Click
  document.getElementById("send-email-btn").addEventListener("click", function() {
    const friendEmail = document.getElementById("friend-email").value;
    // Implement the email sending functionality here
    // You can use 'mailto:' with a pre-composed email or use a server-side script to send the invitation.
    // Example using 'mailto:':
    window.open(`mailto:${friendEmail}?subject=Webinar Invitation&body=Hey! I thought you might be interested in this webinar: https://www.example.com/webinar`);
  });

  // Handle Copy Link Button Click
  document.getElementById("copy-link-btn").addEventListener("click", function() {
    const referralLink = document.getElementById("referral-link");
    // Copy the referral link to the clipboard
    referralLink.select();
    document.execCommand("copy");
    alert("Referral link copied to clipboard!");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  // Handle Register Button Click
  document.getElementById("register-btn").addEventListener("click", function() {
    // Assuming the registration process is successful, scroll to the confirmation section
    const confirmationSection = document.getElementById("confirmation");
    const yOffset = -50; // Adjust this value as needed to position the section correctly
    const y = confirmationSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  });

  // Add event listeners for social media sharing and other functionality if needed
});
