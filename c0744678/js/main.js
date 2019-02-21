// Your code here!
var bird = {
    genus: "corvas",
    species: "corvax",
    commonName: "raven",
    caLLtype: "squawky",
    quote: "nevermore",
    maxoffspring: 5,
    noisy: true,
    daedly: false
};
var bear= {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    caLLtype: "roar",
    quote: " ",
    maxoffspring: 3,
    noisy: true,
    daedly: false

};
bear = JSON.parse(JSON.stringify(bird));
bear.genus = 'ursus';
bear;
bird;

//console
bird.color = "black"
bird.genus
delete bird.color     

var cities = [
    'belknap',
    'satnfford',
    'brampton',
    'mississauga',
    'toronto'


];

//console
cities.length
cities[2]
cities[cities.length] = "toronto";
cities[2] = "data"
cities.push("cop")
cities.pop();

delete cities[2]

cities.splice(2, 3)
