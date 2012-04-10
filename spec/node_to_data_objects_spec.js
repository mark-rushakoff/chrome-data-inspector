describe("nodeToDataObjects", function() {
    it("returns an empty array when called without an argument", function() {
        expect(nodeToDataObjects()).toEqual([]);
    });

    it("returns an empty array when given a node that has no data attributes", function() {
        var el = $("<div></div>").get(0);
        expect(nodeToDataObjects(el)).toEqual([]);
    });

    it("returns an array of the single data element when given a node with one data attribute", function() {
        var el = $('<div data-foo="bar"></div>').get(0);
        expect(nodeToDataObjects(el)).toEqual([{
            distance: 0,
            data: "foo",
            value: "bar"
        }]);
    });

    it("does not overwrite collected attributes as it walks up the DOM", function() {
        var $el = $('<div id="outer" data-dog="woof" data-foo="quux"><div id="inner" data-foo="bar"></div></div>');
        var dataObjects = nodeToDataObjects($el.find("#inner").get(0));
        expect(dataObjects.length).toBe(3);
        expect(dataObjects).toContain({
            distance: 0,
            data: "foo",
            value: "bar"
        });
        expect(dataObjects).toContain({
            distance: 1,
            data: "dog",
            value: "woof"
        });
        expect(dataObjects).toContain({
            distance: 1,
            data: "foo",
            value: "quux"
        });
    });

    it("doesn't blow up when a node has no data attributes", function() {
        var $el = $('<div id="d2" data-dog="woof"><div><div id="d0" data-foo="bar"></div></div></div>');
        var el = $el.find("#d0").get(0);
        expect(nodeToDataObjects(el)).toEqual([{
            distance: 0,
            data: "foo",
            value: "bar"
        }, {
            distance: 2,
            data: "dog",
            value: "woof"
        }]);
    });
});
