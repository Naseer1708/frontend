document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;
  const phone = document.getElementById("phone").value.trim();

  // Name
  if(name === "") { valid=false; document.getElementById("nameError").textContent="Name required"; }
  else document.getElementById("nameError").textContent="";

  // Email
  const emailRegex=/^[^@]+@[^@]+\.[^@]+$/;
  if(!emailRegex.test(email)) { valid=false; document.getElementById("emailError").textContent="Invalid email"; }
  else document.getElementById("emailError").textContent="";

  // Password
  if(pass.length<6 || !/[!@#$%^&*]/.test(pass)) { valid=false; document.getElementById("passError").textContent="Weak password"; }
  else document.getElementById("passError").textContent="";

  // Phone
  const phoneRegex=/^[0-9]{10}$/;
  if(!phoneRegex.test(phone)) { valid=false; document.getElementById("phoneError").textContent="Invalid phone"; }
  else document.getElementById("phoneError").textContent="";

  if(valid) document.getElementById("success").textContent="Registration Successful!";
});
