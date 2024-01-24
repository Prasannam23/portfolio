

    const firebaseConfig = {
        apiKey: "AIzaSyB6fUGKHrC9-bClSoKOOKWsCBTKiBMs_wA",
        authDomain: "real-time-database-95003.firebaseapp.com",
        databaseURL: "https://real-time-database-95003-default-rtdb.firebaseio.com",
        projectId: "real-time-database-95003",
        storageBucket: "real-time-database-95003.appspot.com",
        messagingSenderId: "837479151179",
        appId: "1:837479151179:web:a7e76ba7ad00f4017c7fce"
    };
    firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
