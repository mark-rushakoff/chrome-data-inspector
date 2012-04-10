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
});
