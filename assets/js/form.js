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
    const firebaseConfig = {
      apiKey: "AIzaSyBzxOml671Tfi8w5400mw8r9byvtgL3Iz8",
      authDomain: "dsc-nita-2k22.firebaseapp.com",
      projectId: "dsc-nita-2k22",
      storageBucket: "dsc-nita-2k22.appspot.com",
      messagingSenderId: "138506433405",
      appId: "1:138506433405:web:10c3f4aa592c00a9521214",
      measurementId: "G-PN39PGRHW4"
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
