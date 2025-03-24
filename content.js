const button = document.createElement('button');
button.innerText = 'Talk to Sheet AI';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.zIndex = '1000';
document.body.appendChild(button);

button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "openPopup" });
});
