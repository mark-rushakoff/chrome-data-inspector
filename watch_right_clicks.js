if (chrome && chrome.extension) {
    var i = 0;
    window.addEventListener('mousedown', function(e) {
        var isRightClick = (e.which === 3);
        if (isRightClick) {
            chrome.extension.sendRequest({value: ++i});
        }
    });
}

function nodeToDataObjects(el) {
    if (!el) {
        return [];
    }

    var dataObjects = [],
        distance = 0,
        attr, attrName, i;

    for (i = 0; i < el.attributes.length; i++) {
        attr = el.attributes[i];
        attrName = attr.nodeName;
        if (attrName.indexOf("data-") === 0) {
            dataObjects.push({
                data: attrName.substring(5),
                value: attr.nodeValue,
                distance: distance,
            });
        }
    }

    return dataObjects;
}
