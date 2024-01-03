let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA",
    },
};

let passportMarried2 = {
    ...passportMarried,
    married: true,
    address: { ...passportMarried.address },
};

passportMarried2.address.city = "Bobryisk";

console.log(passportMarried);
console.log(passportMarried2);