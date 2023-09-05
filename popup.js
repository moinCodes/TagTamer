document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", function () {
            const selectedTag = this.value;
            
            chrome.runtime.sendMessage({ tag: selectedTag });
        });
    });
});