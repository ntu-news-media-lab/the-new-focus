console.log("background.js");
chrome.storage.local.set({ 'read': false }, function() {
  console.log('Value is set to ' + false);
  
  chrome.storage.local.get(['read'], function(result) {
    console.log('Value currently is ' + result.read);
  });

});

chrome.browserAction.setBadgeText({text: " "});
