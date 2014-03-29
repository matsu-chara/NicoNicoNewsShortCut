chrome.extension.onMessage.addListener(
  function (messageObject) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      chrome.tabs.create({
        url: messageObject.url,
        index: tabs[0].index + 1,
        active: false
      });
    });
  }
);