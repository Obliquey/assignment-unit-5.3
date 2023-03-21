console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPublished) {
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(record);
    return record;
}
addToCollection('The Physics of Fire', 'Becoming The Archetype', '2007');
addToCollection('Mood Valiant', 'Hiatus Kaiyote', '2021');
addToCollection('Children Of Fire', 'Oh, Sleeper', '2011');
addToCollection('As Blue as Indigo', 'Tigercub', '2021');
addToCollection('ZII', 'The Devil Wears Prada', '2021');
addToCollection('Vessel', 'Twenty One Pilots', '2013');

console.log(collection);

function showCollection ([]) {
    
}