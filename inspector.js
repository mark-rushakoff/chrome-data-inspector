chrome.extension.onRequest.addListener(function(request) {
    //console.log("request is ", request);

    if (request.length === 0) {
        //console.log("setting menu to no-data");
        chrome.contextMenus.removeAll(menuNoData);
    } else {
        //console.log("setting menu to request-data");
        chrome.contextMenus.removeAll(menuData(request));
    }
}, checkFailure);

function menuNoData() {
    var parentId = menuMainItem(0);
};

function menuData(request) {
    return function() {
        var data, i;

        var parentId = menuMainItem(request.length);

        for (i = 0; i < request.length; i++) {
            data = request[i];
            chrome.contextMenus.create({
                title: "" + data.distance + " - " + data.data + ": " + data.value,
                parentId: parentId
            }, checkFailure);
        }
    }
};

function menuMainItem(num) {
    return chrome.contextMenus.create({
        title: "Data Inspector - " + num,
        contexts: ["all"]
    }, checkFailure);
}

function checkFailure() {
    if (chrome.extension.lastError) {
        console.warn(chrome.extension.lastError);
    }
}
