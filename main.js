function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle('active');
  var popup = document.getElementById("popup");
  popup.classList.toggle('active');

}
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Text Copied: " + copyText.value);
}
  var jqs = function(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split("=");
        if (sParameterName[0] === sParam) {
          return sParameterName[1];
        }
      }
  };
window.jqs = jqs;
var name = decodeURI(jqs("bl"));
if (typeof jqs("bl") === "undefined") {
  name = "";
}
var checkName = function() {
  if (name.length !== 0) {
    name = name.replace(/-/g, " ");
    console.log("name is there", name);
    document.querySelector("#TECHNOVEDANT-show-name").innerHTML = name;
    document.querySelector("#TECHNOVEDANT-fromMessage").innerHTML= "Wishing You"

  } else {

  }
};

checkName();

var createGreeting=function(){

  // ga('send', {
  //   hitType: 'event',
  //   eventCategory: 'interaction',
  //   eventAction: 'click',
  //   eventLabel: 'goButtonClicked'
  // });

  gtag('event', 'click', {
        'event_category': 'interaction',
        'event_label': 'goButtonClicked',
  });

  sname=document.querySelector("#nameTextBox").value;
  sname=sname.replace(/@/g,"-")
  sname=sname.replace(/%40/g,"-")
  sname=sname.replace(/\./g,"-")
  if(sname.trim()!=""){
    document.querySelector("#formBox").style.display = "none";
    document.querySelector(".footerbtn").style.display = "block";
    document.querySelector("#TECHNOVEDANT-show-name").innerHTML = sname;
    document.querySelector("#TECHNOVEDANT-fromMessage").innerHTML= "Click on the WhatsApp button to share with your friends";
    window.scrollTo(0,0);
  }else {
    alert ("Please Type Your Name First");
    document.getElementById("nameTextBox").focus();
  }
}

var shareActionWA = function() {
  gtag('event', 'click', {
        'event_category': 'interaction',
        'event_label': 'shareOnWhatsAppClicked',
  });

  var shareString = "";
  var whatsappHref;
  shareString += "*"+sname+"*";

  
  shareString +="  *Ne aapko kuchh bheja hai ?? *Blue Line ko Touch Krke Dekho* ????"
  shareString +=(window.location.href.split("?")[0] + "?bl=" + sname).replace("#", "").replace(/ /g, "-");
 

  whatsappHref = "whatsapp://send?text=" + shareString;
  window.location.href = whatsappHref;

};
var countDownDate = new Date("may 25, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demoo").innerHTML = days + "days " + hours + "hr "+ minutes + "min " + seconds + "sec ";

    // If the count down is over, write some text
    if (distance < 0)
     {
        clearInterval(x);
        document.getElementById("demoo").innerHTML = "";
        document.getElementById("inAdvance").innerHTML = "";

    }
}, 1000);





// Set the date we're counting down to
var countDownDate = new Date("may 25, 2020 00:00:00").getTime();

// Update the count down every 01 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now an the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="TECHNOVEDANT"
document.getElementById("TECHNOVEDANT").innerHTML = days + "<i> Days,</i> " + hours + " <i>Hrs,</i> "
+ minutes + "<i> Min,</i> " + seconds + "<i> Sec</i> ";

// If the count down is finished, write some text 
if (distance < 0) {
clearInterval(x);
document.getElementById("TECHNOVEDANT").innerHTML = ".";
}
}, 1000);