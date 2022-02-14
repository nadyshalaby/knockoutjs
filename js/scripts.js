let ViewModel = function () {
    this.styleToggle = ko.observable(false);
    this.toggleStyle = function () {
        this.styleToggle(!this.styleToggle());
    }.bind(this);

    this.cssToggle = ko.observable(false);
    this.toggleCss = function () {
        this.cssToggle(!this.cssToggle());
    }.bind(this);

    this.classToggle = ko.observable(false);
    this.toggleClass = function () {
        this.classToggle(!this.classToggle());
    }.bind(this);

    this.attrToggle = ko.observable(false);
    this.toggleAttr = function () {
        this.attrToggle(!this.attrToggle());
    }.bind(this);

    this.attrValue = ko.computed(function () {
        return this.attrToggle() ? "Attr toggle is on" : "Attr toggle is off";
    }, this);
};

ko.applyBindings(ViewModel);
