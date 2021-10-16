const players = [
    { age: 5, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-01-20') },
    { age: 6, sport: "baseball", city: "Boulder", dateJoined: new Date('2019-12-30') },
    { age: 10, sport: "soccer", city: "Chicago", dateJoined: new Date('2020-11-12') },
    { age: 11, sport: "handball", city: "San Francisco", dateJoined: new Date('2020-08-21') },
    { age: 6, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-07-06') },
    { age: 8, sport: "softball", city: "Boulder", dateJoined: new Date('2019-02-27') },
    { age: 7, sport: "tennis", city: "San Francisco", dateJoined: new Date('2019-05-31') },
    { age: 4, sport: "handball", city: "San Francisco", dateJoined: new Date('2018-03-10') }
]

// First way to do it
const mySort = (object, sortKey) => {
    return object.sort((a, b) => {
        return b[sortKey] - a[sortKey]
    })
}

// Note: second way to do it using currying
const curriedSort = object => sortKey => {
    return object.sort((a, b) => {
        return b[sortKey] - a[sortKey];
    });
}

console.log(mySort(players, "age")); // Returns desired result
console.log(mySort(players)); // Returns the array unsorted. No error message
console.log(mySort(players, "agr")) // Returns the array unsorted. No error message

console.log(curriedSort(players)("age")); // Returns desired result
console.log(curriedSort(players)); // Returns undefined
console.log(curriedSort(players)("agr")); // Returns the array unsorted. No error message