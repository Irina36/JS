var myImage = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('h1');
    if(mySrc === 'Mozilla is cool') {
      myImage.setAttribute ('src','images/surfing.jpg');
    } else {
      myImage.setAttribute ('h1','Mozilla is cool');
    }
}
