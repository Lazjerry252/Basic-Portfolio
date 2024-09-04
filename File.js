const Name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

//const submit = document.querySelector('.submit')

document.getElementById('contact-form').addEventListener('submit', () => {

  if (Name && email && message) {
    alert("Successfully Sent!!!.  Thank you for your message!");
  } else {
    alert("Please fill out all fields.");
  }

})
