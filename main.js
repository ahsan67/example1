function loadfun() {
    var person = prompt("Please enter your name 👇👇👇", "");
    if (person != null) {
      document.getElementById("name1").innerHTML =
       person ;
    }
};
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

