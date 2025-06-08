document.addEventListener("DOMContentLoaded", () => {
  const screen1 = document.getElementById("screen1");
  const screen2 = document.getElementById("screen2");
  const screen3 = document.getElementById("screen3");
  const screen4 = document.getElementById("screen4");

  function hideAllScreens() {
    screen1.style.display = "none";
    screen2.style.display = "none";
    screen3.style.display = "none";
    screen4.style.display = "none";
  }

  function blurActiveElement() {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  }

  hideAllScreens();
  screen1.style.display = "block";

  const loginBtn = document.getElementById("loginBtn");
  const hospitalBtn = document.getElementById("hospitalBtn");
  const policeBtn = document.getElementById("policeBtn");

  loginBtn.addEventListener("click", () => {
    hideAllScreens();
    screen2.style.display = "block";
    blurActiveElement();
    window.scrollTo(0, 0);
  });

  hospitalBtn.addEventListener("click", () => {
    hideAllScreens();
    screen3.style.display = "flex";
    blurActiveElement();
    window.scrollTo(0, 0);
  });

  policeBtn.addEventListener("click", () => {
    hideAllScreens();
    screen4.style.display = "flex";
    blurActiveElement();
    window.scrollTo(0, 0);
  });

  // Hospital Login Form Submission
  const hospitalForm = screen3.querySelector("form");
  hospitalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (hospitalForm.checkValidity()) {
      window.location.href = "hospital.html";
    } else {
      hospitalForm.classList.add("was-validated");
    }
  });

  //  Police Login Form Submission
  const policeForm = screen4.querySelector("form");
  policeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (policeForm.checkValidity()) {
      window.location.href = "police.html";
    } else {
      policeForm.classList.add("was-validated");
    }
  });

  // ---------- Sign-Up Modal logic ----------
const signUpLink = document.getElementById("signUpLink");
const signUpForm = document.getElementById("signUpForm");

signUpLink.addEventListener("click", (e) => {
  e.preventDefault();                     // stop default link jump
  const signUpModal = new bootstrap.Modal(document.getElementById("signUpModal"));
  signUpModal.show();
});

// simple client-side validation
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (signUpForm.checkValidity()) {
    alert("Account created successfully!");  
    bootstrap.Modal.getInstance(document.getElementById("signUpModal")).hide();
  } else {
    signUpForm.classList.add("was-validated");
  }
});

});
