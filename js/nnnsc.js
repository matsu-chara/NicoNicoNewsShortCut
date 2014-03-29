var textMarquee = "textMarquee";
var prevButton = "prevButton";
var nextButton = "nextButton";
var item = "item";

document.onkeydown = function (e) {
  switch (e.keyCode) {
  // Key: p
  case 80:
    document.getElementById(textMarquee).getElementsByClassName(prevButton)[0].click();
    break;
  // Key: @
  case 192:
    document.getElementById(textMarquee).getElementsByClassName(prevButton)[0].click();
    break;

  // Key: ;
  case 187:
    document.getElementById(textMarquee).getElementsByClassName(nextButton)[0].click();
    break;
  // Key: :
  case 186:
    document.getElementById(textMarquee).getElementsByClassName(nextButton)[0].click();
    break;

  // Key:[
  case 219:
    document.getElementById(textMarquee).getElementsByClassName(item)[0].getElementsByTagName('a')[0].click();
    break;
  // Key:]
  case 221:
    // send message for background open
    chrome.extension.sendMessage({url: document.getElementById(textMarquee).getElementsByClassName(item)[0].getElementsByTagName('a')[0].getAttribute('href')});
    break;
  }
};