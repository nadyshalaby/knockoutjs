let ViewModel = function () {
    this.items = ko.observableArray([
        {
            name: "Item 1",
            description: "This is the first item",
            price: "$1.00",
            attributes: {
                color: "red",
                size: "small",
                materials: ["leather", "wood", "plastic"],
            },
        },
        {
            name: "Item 2",
            description: "This is the second item",
            price: "$2.00",
            attributes: {
                color: "blue",
                size: "medium",
                materials: ["cotton", "wood", "plastic"],
            },
        },
        {
            name: "Item 3",
            description: "This is the third item",
            price: "$3.00",
            attributes: {
                color: "green",
                size: "large",
                materials: ["cotton", "silk", "leather", "wood", "plastic"],
            },
        },
    ]);
};

ko.applyBindings(ViewModel);
