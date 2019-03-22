// get titles of all anchors
var arrMainNav = document.getElementById('mainNav').getElementsByTagName('a');
for (var i = 0; i < arrMainNav.length; i++) {
    var theURL = arrMainNav[i].getAttribute('href');
    arrMainNav[i].setAttribute('title', theURL);
}

// open links in a new tab
var arrLinks = document.getElementsByTagName('a');
for(var i = 0; i < arrLinks.length; i++) {
    var theURL = arrLinks[i].getAttribute('href');
    var extLinks = theURL.startsWith('http');
    if(extLinks == true) {
        arrLinks[i].setAttribute('target', '_blank');
    }  
}