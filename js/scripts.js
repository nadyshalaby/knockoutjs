let ViewModel = function (items) {
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItem = function () {
        this.items.push(this.itemToAdd());
        this.itemToAdd("");
    }.bind(this);
};

ko.applyBindings(
    new ViewModel([
        "Introduction to JavaScript",
        "Introduction to HTML and CSS",
        "Introduction to jQuery",
        "Introduction to Knockout.js",
        "Introduction to Angular.js",
        "Introduction to Node.js",
    ])
);
