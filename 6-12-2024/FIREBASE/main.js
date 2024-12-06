var firebaseConfig = {
    apiKey: "AIzaSyAI8ALji8dFAkR30Eb4j54hrZqIHlNWPio",
    authDomain: "sample-project-3b1f4.firebaseapp.com",
    databaseURL: "https://sample-project-3b1f4-default-rtdb.firebaseio.com",
    projectId: "sample-project-3b1f4",
    storageBucket: "sample-project-3b1f4.firebasestorage.app",
    messagingSenderId: "230207057427",
    appId: "1:230207057427:web:b3cdc89cf65ffe9ed6d9e6"
  };
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
