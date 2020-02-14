

function changeGreeting() {
 var text1 = document.getElementById("greetings"); 
 text1.innerHTML = "quien soy?";
 text1.style.fontSize = '30pt'
 text1.style.paddingLeft = '315px';
 text1.style.paddingTop = '175px';
 text1.style.color = 'white';
}

function changeGreeting2() {
 var text2 = document.getElementById("greetings");
 text2.innerHTML = "que hago?";
 text2.style.fontSize = '30pt';
 text2.style.paddingLeft = '152px';
 text2.style.paddingTop = '385px';
 text2.style.color = 'white';
}

function changeGreeting3() {
 var text3 = document.getElementById("greetings");
 text3.innerHTML = "contacto";
 text3.style.fontSize = '30pt';
 text3.style.paddingTop = '175px';
 text3.style.paddingLeft = '10px';
 text3.style.color = 'white';
 
}

function changeGreeting4() {
 var text4 = document.getElementById("greetings");
 text4.innerHTML = "referencias";
 text4.style.fontSize = '30pt';
 text4.style.paddingTop = '0px';
 text4.style.paddingLeft = '150px';
 text4.style.color = 'white';
}

function defaultGreeting() {
  var text5 = document.getElementById("greetings");
  text5.innerHTML = "que tal?"
  text5.style.paddingLeft = '250px';
  text5.style.paddingTop = '75px';
  text5.style.fontSize = '50pt';
  text5.style.color = 'rgb(175, 42, 175)';
}

function arrowClicked() {
  var body = document.body;
  body.classList.add('animated', 'slideOutDown');
  var homepage = document.getElementById("homepage");
  homepage.classList.add('animated', 'slideOutDown');
  homepage.addEventListener('animationend', function remove() {
  homepage.parentNode.removeChild(homepage);
})
}
function arrowClicked2() {
  var body = document.body;
  body.id = "bodyUp";
  var homepage = document.getElementById("homepage");
  homepage.classList.add('animated', 'slideOutUp');
  var portfolioSection = document.getElementById("portfolioSection");
  var portfolio = document.createElement("div");
  portfolio.id = "portfolio";
  homepage.addEventListener('animationend', function remove() {
  homepage.parentNode.removeChild(homepage);
  portfolioSection.appendChild(portfolio);
  })

  }


function arrowClicked3() {
  var body = document.body;
  body.classList.add('animated', 'slideOutLeft');
  var homepage = document.getElementById("homepage");
  homepage.classList.add('animated', 'slideOutLeft');
  homepage.addEventListener('animationend', function remove() {
  homepage.parentNode.removeChild(homepage);
  })
}

function arrowClicked4() {
  var body = document.body;
  body.classList.add('animated', 'slideOutRight');
  var homepage = document.getElementById("homepage");
  homepage.classList.add('animated', 'slideOutRight');
  homepage.addEventListener('animationend', function remove() {
  homepage.parentNode.removeChild(homepage);
  })
}