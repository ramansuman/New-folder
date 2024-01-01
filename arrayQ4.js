const heros = [{
        name: "Spider-Man"
    }, {
        name: 'Thor'
    }, {
        name: 'Black Panther'
    },
    {
        name: 'Captain Marvel'
    }, {
        name: 'Silver Surfer'
    }
];
//output:-[{id:0,hero:'Spider-Man'},{id:1,hero: Thor'},{id:2,hero:'Black Panther'},{id:3,hero:Captain Marvel'},
//{ id:4, hero: 'Silver Surfer' }]
let arr = [];
arr = heros.map((ele, index) => {
    return {
        "id ": index,
        "hero": ele.name
    }
});
console.log(arr);