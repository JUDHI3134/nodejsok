const obje = {
    name:"judhistir",
    age:20,
    city:"bls"
}

// console.log(obje.age);

const jsondata = JSON.stringify(obje);
console.log(jsondata);

const objedata = JSON.parse(jsondata);
console.log(objedata);