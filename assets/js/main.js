function hashFnv32a(str, asString, seed) {
  var i,
    l,
    hval = seed === undefined ? 0x811c9dc5 : seed;

  for (i = 0, l = str.length; i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval +=
      (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  if (asString) {
    return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
  }
  return hval >>> 0;
}

const btn = document.getElementById("check_btn");
if (btn !== null) {
  btn.onclick = function () {
    const hsh = "cc6a4b37";
    const beta_text = document.getElementById("beta_text");
    const beta_text_value = beta_text.value;
    const beta_text_value_hash = hashFnv32a(beta_text_value, true);

    if (beta_text_value_hash === hsh) {
      alert("You're a genius!!");
      window.location.href = "/ring/smaug/planet1.html";
    } else {
      alert("Errrrrrrrr........ Wrong Code!!!");
    }
  };
}

const beta_btn = document.getElementById("beta_btn");
if (beta_btn !== null) {
  beta_btn.onclick = function () {
    const orig = "1f85c89e";
    const coord =
      document.getElementById("longi").value +
      document.getElementById("lati").value;
    const hash = hashFnv32a(coord, true);

    if (hash === orig) {
      window.location.href = "/ring/saruman/beta.html";
    } else {
      alert("Wrong Coordinates!!!");
    }
  };
}

const locker_btn = document.getElementById("pl99_btn");
if (locker_btn !== null) {
  locker_btn.onclick = function () {
    const hsh = "dfbc26cb";
    const locker_text = document.getElementById("pl99");
    const locker_text_value = locker_text.value;
    const locker_text_value_hash = hashFnv32a(locker_text_value, true);

    if (locker_text_value_hash === hsh) {
      alert("Walter White's Locker 🔒\nYou may find me at planet062 🪐");
    } else {
      alert("Wrong Code!!!");
    }
  };
}

const inspect_btn = document.getElementById("inspect_btn");
if (inspect_btn !== null) {
  inspect_btn.onclick = function () {
    const txt = document.getElementById("inspect_text");
    txt.style.display = "block";  
  };
}