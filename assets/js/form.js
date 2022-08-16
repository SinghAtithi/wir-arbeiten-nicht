const submit_btn = document.querySelector(".submit");

submit_btn.onclick = async () => {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  const loader = document.querySelector(".loader");

  console.log("print");
  console.log(email);

  if (
    firstName &&
    lastName &&
    email &&
    firstName != "" &&
    lastName != "" &&
    email != ""
  ) {
    var firebaseConfig = {
      apiKey: "AIzaSyBlwNTjC9aJrNHMmUdATJHD38NT8YZKUSQ",
      authDomain: "dsc-challenge-2021.firebaseapp.com",
      projectId: "dsc-challenge-2021",
      storageBucket: "dsc-challenge-2021.appspot.com",
      messagingSenderId: "1089358080579",
      appId: "1:1089358080579:web:45544cf2ad5ac8ca6c82f6",
      measurementId: "G-YTHWPHFEN0",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized");

    loader.style.display = "block";
    var db = firebase.firestore();
    await db
      .collection("users")
      .doc(email)
      .set(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
        },
        { merge: true }
      )
      .then((docRef) => {
        console.log("Document written");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    loader.style.display = "none";
    window.location.href = "saruman/alpha.html";
  } else {
    alert("Hey! dont't be afraid. I need to know your name.");
    return;
  }
};
