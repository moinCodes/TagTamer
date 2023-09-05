chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.tag) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { tag: message.tag });
        });
    }
});