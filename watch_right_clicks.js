if (chrome && chrome.extension) {
    window.addEventListener("mousedown", function(e) {
        var isRightClick = (e.which === 3);
        if (isRightClick) {
            //console.log(nodeToDataObjects(e.target));
            chrome.extension.sendRequest(nodeToDataObjects(e.target));
        }
    });
}

function nodeToDataObjects(el) {
    var dataObjects = [],
        distance = 0,
        attr, attrName, i;

    while (el) {
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

        el = el.parentElement;
        distance++;
    }

    return dataObjects;
}
