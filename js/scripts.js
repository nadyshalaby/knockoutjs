let viewModel = {
    people: [
        {
            name: "Nady Shalaby",
            age: "21",
            email: "nady.shslaby@gmail.com",
            phone: "+972523456789",
            address: "Rishon Lezion",
        },
        {
            name: "Nadav Shalaby",
            age: "21",
            email: "nadav.shalaby@gmail.com",
            phone: "+972521136789",
            address: "WA, USA",
        },
        {
            name: "Agreev Rangif",
            age: "21",
            email: "agreev.rangif@example.com",
            phone: "+972523876789",
            address: "Tel Aviv",
        },
    ],
};

ko.applyBindings(viewModel);
