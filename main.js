//Welcome message command code.

window.onload = function welcome() {
  document.getElementById('welcomeMessage').classList.add('show');
}

const unDisplay = document.querySelector('.message');


window.addEventListener('click', welcome);

let box = document.getElementById('welcomeMessage');

function welcome() {
  if (event.target != box && event.target.parentNode != box) {
    unDisplay.style.display = 'none';
  }


}




const topPage = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    topPage.classList.add('active');
  } else {
    topPage.classList.remove('active');
  }
})


document.querySelector('#mobileNav').addEventListener('click', navClick);

const mobileBar = document.querySelector('.Navigation-background');
const navContent = document.querySelector('.Navigation');


//const bar = document.querySelector('#mobileNav');
function navClick() {
  mobileBar.style.display = 'flex';
  navContent.style.right = '0';

}



document.querySelector('.nav-exit').addEventListener('click', () => {
  mobileBar.style.display = 'none';
  navContent.style.right = '-80%';
})






let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let textArea = document.getElementById("textArea");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in all fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    //username.value = "";
    //password.value = "";
  }


  let body = 'name: ' + username.value + '<br/> email: ' + password.value + '<br/> message: ' + textArea.value;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "seun33154@gmail.com",
    Password: "37CD2A8F142F4D1A9E4BBA0A0962C2C72084",
    To: 'sholabusari66@gmail.com',
    From: "seun33154@gmail.com",
    Subject: "contact message",
    Body: body
  }).then(
    message => alert(message)
  );
});



/* ---Search Panel---*/


let searchArea = document.querySelector('.search-area');

let faArrow = document.querySelector('#fa-arrow');

let faGlass = document.querySelector('#fa-glass');

let fasGlass = document.querySelector('#fas-glass');

faArrow.addEventListener('click', function(){
  searchArea.style.right = '100%';
})

faGlass.addEventListener('click', function(){
  searchArea.style.right = '0';
})
