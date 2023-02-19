const login = document.getElementById("tab-login");
const register = document.getElementById("tab-register");
const pill_login = document.getElementById("pills-login");
const pill_register = document.getElementById("pills-register");

// Add a click event listener to the button
login.addEventListener("click", function() {

    pill_login.classList.add("active","show")
    pill_register.classList.remove("active","show")
  // Toggle the 'active' class on the div element
  if (!login.classList.contains("active")) {
    // If it's not, add the 'active' class
    login.classList.add("active");


}
if (register.classList.contains("active")) {
    // If it's not, add the 'active' class
    register.classList.remove("active");
}
});
register.addEventListener("click", function() {
    pill_login.classList.remove("active","show")
    pill_register.classList.add("active","show")
    // Toggle the 'active' class on the div element
    if (!register.classList.contains("active")) {
      // If it's not, add the 'active' class
      register.classList.add("active");
  }
  if (login.classList.contains("active")) {
    // If it's not, add the 'active' class
    login.classList.remove("active");
}
  });

