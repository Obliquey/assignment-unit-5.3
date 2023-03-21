console.log('***** Music Collection *****')

// initialize working array for our record store's collection
let collection = [];

// create function to add albums to our collection array. have function create object that includes album name, artist's name, and year published properties.
function addToCollection (title, artist, yearPublished) {
    // does the variable name here actually matter? When calling from the array later on, it only shows up as array[0], not as record. 
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(record);
    return record;
}

// add some albums bruh! Some good tunes!
addToCollection('Transit Blues', 'The Devil Wears Prada', '2016');
addToCollection('Mood Valiant', 'Hiatus Kaiyote', '2021');
addToCollection('Children Of Fire', 'Oh, Sleeper', '2011');
addToCollection('As Blue as Indigo', 'Tigercub', '2021');
addToCollection('ZII', 'The Devil Wears Prada', '2021');
addToCollection('Vessel', 'Twenty One Pilots', '2013');
console.log(collection[0], collection[1], collection[2], collection[3], collection[4], collection[5])


console.log(collection);

function showCollection (array) {
    console.log(array.length);

    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}.`);
    }
}

showCollection(collection);

