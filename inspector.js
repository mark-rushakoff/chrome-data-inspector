var parentId = chrome.contextMenus.create({
    title: "Data Inspector",
    contexts: ["all"]
});

chrome.extension.onRequest.addListener(function(request) {
    console.log(request);
});
