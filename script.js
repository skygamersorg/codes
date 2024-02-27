// First Button 
  var counter1 = 10; // Add time here in seconds 
  var id1, firstbutton = document.getElementById("first-timer show"), element1 = document.createElement("p");

  function starttimer1() {
    this.style.display = "none";
    id1 = setInterval(function() {
      counter1--;
      if (counter1 < 0) {
        element1.parentNode.replaceChild(firstbutton, element1);
        clearInterval(id1);
      } else {
        element1.innerHTML = "<center><strong>Please wait <span>" + counter1.toString() + "</span> seconds</strong><p/><Cnt-Timer><svg viewBox='0 0 40 50' x='0px' y='0px'><path d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'><animateTransform attributeName='transform' attributeType='xml' dur='0.6s' from='0 25 25' repeatCount='indefinite' to='360 25 25' type='rotate'></animateTransform></path></svg> Generating... Please Wait!</Cnt-Timer></center>";
      }
    }, 1000);
  }
  element1.innerHTML = "<span></span>";
  firstbutton.parentNode.replaceChild(element1, firstbutton);
  var clickbtn1 = document.getElementById("first-timer");
  clickbtn1.onclick = starttimer1;





  // Second Button
var counter2 = 10; // Add time here in seconds 
  var id2, secondbutton = document.getElementById("second-timer show"), element2 = document.createElement("p");

  function starttimer2() {
    this.style.display = "none";
    id2 = setInterval(function() {
      counter2--;
      if (counter2 < 0) {
        element2.parentNode.replaceChild(secondbutton, element2);
        clearInterval(id2);
      } else {
        element2.innerHTML = "<center><strong>Please wait <span>" + counter2.toString() + "</span> seconds</strong><p/><Cnt-Timer><svg viewBox='0 0 40 50' x='0px' y='0px'><path d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'><animateTransform attributeName='transform' attributeType='xml' dur='0.6s' from='0 25 25' repeatCount='indefinite' to='360 25 25' type='rotate'></animateTransform></path></svg> Generating... Please Wait!</Cnt-Timer></center>";
      }
    }, 1000);
  }
  element2.innerHTML = "<span></span>";
  secondbutton.parentNode.replaceChild(element2, secondbutton);
  var clickbtn2 = document.getElementById("second-timer");
  clickbtn2.onclick = starttimer2;



  // Third Button
  var Counter3 = 10; // Add time here in seconds 
  var id3, thirdbutton = document.getElementById("third-timer show"), element3 = document.createElement("p");

  function starttimer3() {
    this.style.display = "none";
    id3 = setInterval(function() {
      Counter3--;
      if (Counter3 < 0) {
        element3.parentNode.replaceChild(thirdbutton, element3);
        clearInterval(id3);
      } else {
        element3.innerHTML = "<center><strong>Please wait <span>" + Counter3.toString() + "</span> seconds</strong><p/><Cnt-Timer><svg viewBox='0 0 40 50' x='0px' y='0px'><path d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'><animateTransform attributeName='transform' attributeType='xml' dur='0.6s' from='0 25 25' repeatCount='indefinite' to='360 25 25' type='rotate'></animateTransform></path></svg> Generating... Please Wait!</Cnt-Timer></center>";
      }
    }, 1000);
  }
  element3.innerHTML = "<span></span>";
  thirdbutton.parentNode.replaceChild(element3, thirdbutton);
  var clickbtn3 = document.getElementById("third-timer");
  clickbtn3.onclick = starttimer3;

 // Fourth Button
 var counter4 = 10; // Add time here in seconds 
  var id4, fourthbutton = document.getElementById("fourth-timer show"), element4 = document.createElement("p");

  function starttimer4() {
    this.style.display = "none";
    id4 = setInterval(function() {
      counter4--;
      if (counter4 < 0) {
        element4.parentNode.replaceChild(fourthbutton, element4);
        clearInterval(id4);
      } else {
        element4.innerHTML = "<center><strong>Please wait <span>" + counter4.toString() + "</span> seconds</strong><p/><Cnt-Timer><svg viewBox='0 0 40 50' x='0px' y='0px'><path d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'><animateTransform attributeName='transform' attributeType='xml' dur='0.6s' from='0 25 25' repeatCount='indefinite' to='360 25 25' type='rotate'></animateTransform></path></svg> Generating... Please Wait!</Cnt-Timer></center>";
      }
    }, 1000);
  }
  element4.innerHTML = "<span></span>";
  fourthbutton.parentNode.replaceChild(element4, fourthbutton);
  var clickbtn4 = document.getElementById("fourth-timer");
  clickbtn4.onclick = starttimer4;

 // Fifth Button
 var counter5 = 10; // Add time here in seconds 
  var id5, fifthbutton = document.getElementById("fifth-timer show"), element5 = document.createElement("p");

  function starttimer5() {
    this.style.display = "none";
    id5 = setInterval(function() {
      counter5--;
      if (counter5 < 0) {
        element5.parentNode.replaceChild(fifthbutton, element5);
        clearInterval(id5);
      } else {
        element5.innerHTML = "<center><strong>Please wait <span>" + counter5.toString() + "</span> seconds</strong><p/><Cnt-Timer><svg viewBox='0 0 40 50' x='0px' y='0px'><path d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'><animateTransform attributeName='transform' attributeType='xml' dur='0.6s' from='0 25 25' repeatCount='indefinite' to='360 25 25' type='rotate'></animateTransform></path></svg> Generating... Please Wait!</Cnt-Timer></center>";
      }
    }, 1000);
  }
  element5.innerHTML = "<span></span>";
  fifthbutton.parentNode.replaceChild(element5, fifthbutton);
  var clickbtn5 = document.getElementById("fifth-timer");
  clickbtn5.onclick = starttimer5;
