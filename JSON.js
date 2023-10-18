// JSON

const dog = [
    {
        name: "Chula",
        age: 10,
        breed: "American Staffordshire terrier",
        gender: "Female"
    },
    {
        name: "Nala",
        age: 5,
        breed: "Belgian Shepherd",
        gender: "Female"
    }
    
    
]


console.log(`Dog name's ${dog[0].name}`);


const dog2 = [
    {
        name: "Boomer",
        age: 1,
        breed: "Hot Dog",
        gender: "Male"
    },
    dog
]

console.log(`Dog name's ${dog2[0].name}`);
console.log(`Dog name's ${dog2[1][0].name}`);
console.log(`Dog name's ${dog2[1][1].name}`);
console.log(`Dog name's ${dog2[1][1].breed}`);

console.log("---------------------------------");

for (i in dog2) {
    console.log(dog2[i]);
}

