var i = 0;
window.addEventListener('mousedown', function(e) {
    var isRightClick = (e.which === 3);
    if (isRightClick) {
        chrome.extension.sendRequest({value: ++i});
    }
});
