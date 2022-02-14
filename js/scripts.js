let viewModel = function () {
    let self = this;

    self.firstname = ko.observable("");
    self.lastname = ko.observable("");

    // ------( The following is a computed observable readable only. )------
    //     return self.firstname() + " " + self.lastname();
    // }),

    // ------( The following is a computed observable readable and writable. )------
    self.fullname = ko.computed({
        read: function () {
            return self.firstname() + " " + self.lastname();
        },
        write: function (value) {
            let names = value.split(" ");
            self.firstname(names[0]);
            self.lastname(names[1]);
        },
    });

    self.age = ko.observable(0);
    self.ageInDogYears = ko.computed(function () {
        return self.age() * 7;
    });
    self.isAdult = ko.computed(function () {
        return self.age() >= 18;
    });
    self.isSenior = ko.computed(function () {
        return self.age() >= 65;
    });
    self.isChild = ko.computed(function () {
        return self.age() < 18;
    });
    self.isBaby = ko.computed(function () {
        return self.age() < 1;
    });
};

ko.applyBindings(viewModel);
