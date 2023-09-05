chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.tag) {
        const headings = document.querySelectorAll(message.tag);
        
        headings.forEach((heading) => {
            heading.style.border = "4px solid red";
        });
    }
});