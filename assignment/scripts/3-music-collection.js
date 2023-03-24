console.log('***** Music Collection *****')

// initialize working array for our record store's collection
let collection = [];

// initializing tracklists for albums
const transitBlues = [
    track1 = {
        name: 'Praise Poison',
        duration: '2:34'
    },
    track2 = {
        name: 'Daughter',
        duration: '2:28',
    },
    track3 = {
        name: 'Worldwide',
        duration: '3:28'
    },
    track4 = {
        name: 'Lock & Load',
        duration: '3:19',
    },
    track5 = {
        name: 'Flyover States',
        duration: '3:24',
    },
    track6 = {
        name: 'Detroit Tapes',
        duration: '2:12',
    },
    track7 = {
        name: 'The Condition',
        duration: '4:00',
    },
    track8 = {
        name: 'To The Key Of Evergreen',
        duration: '5:07',
    },
    track9 = {
        name: 'Submersion',
        duration: '4:13',
    },
    track10 = {
        name: 'Home For Grave Pt. II',
        duration: '4:03',
    },
    track11 = {
        name: 'Transit Blues',
        duration: '3:24',
    }

]

const moodValiant = [
    track1 = {
        name: 'Flight Of The Tiger Lily',
        duration: '0:35',
    },
    track2 = {
        name: 'Sip Into Something Soft',
        duration: '1:42',
    },
    track3 = {
        name: 'Chivalry Is Not Dead',
        duration: '3:26',
    },
    track4 = {
        name: 'And We Go Gentle',
        duration: '3:23',
    },
    track5 = {
        name: 'Get Sun',
        duration: '5:37',
    },
    track6 = {
        name: "All The Words We Don't Say",
        duration: '5:06',
    },
    track7 = {
        name: 'Hush Rattle',
        duration: '0:41',
    },
    track8 = {
        name: 'Rose Water',
        duration: '3:59',
    },
    track9 = {
        name: 'Red Room',
        duration: '3:52',
    },
    track10 = {
        name: 'Sparkle Tape Break Up',
        duration: '5:15',
    },
    track11 = {
        name: 'Stone Or Lavender',
        duration: '5:29',
    },
    track12 = {
        name: 'Blood And Marrow',
        duration: '3:29',
    }
]


// create function to add albums to our collection array. have function create object that includes album name, artist's name, and year published properties.
function addToCollection (title, artist, yearPublished, trackList) {
    // does the variable name here actually matter? When calling from the array later on, it only shows up as array[0], not as record. 
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        trackList: trackList,
    }

    collection.push(record);
    return record;
}


// add some albums bruh! Some good tunes!
addToCollection('Transit Blues', 'The Devil Wears Prada', '2016',transitBlues);
addToCollection('Mood Valiant', 'Hiatus Kaiyote', '2021', moodValiant);
addToCollection('Children Of Fire', 'Oh, Sleeper', '2011');
addToCollection('As Blue as Indigo', 'Tigercub', '2021');
addToCollection('ZII', 'The Devil Wears Prada', '2021');
addToCollection('Vessel', 'Twenty One Pilots', '2013');
console.log(collection[0], collection[1], collection[2], collection[3], collection[4], collection[5])


console.log(collection);

function showCollection (collection) {
    console.log('Total in collection:', collection.length);

    for (let i = 0; i < collection.length; i++) {
        console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}.`);
        
        // now console.log the trackArr of each record
        if (collection[i].trackList) {
            const tracks = collection[i].trackList;

            for (let j = 0; j < tracks.length; j++) {
                console.log('Name:', tracks[j].name)
                console.log('Duration:', tracks[j].duration)
            }
        }
    }
}

showCollection(collection);


function findByArtist (artist) {
    let foundArtists = [];

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            foundArtists.push(collection[i].artist);
        }
    }

    if (foundArtists.length > 0) {
        return console.log('Testing findByArtist function. Results:', foundArtists);
    }
    else if (foundArtists.length <= 0) {
        return console.log('No Results', foundArtists);
    }
}

findByArtist('Twenty One Pilots');


// build search function to take parameters artist, year, and trackName as a single object
function search({artist = null, year = null, trackName = null}) {
    // init array that will be compiled 
    let results = [];

        // check that input was actually given to the function, if not return complete collection
    if (artist == null && year == null && trackName == null) {
        return collection;
    }

    // IF a trackname was input in the function, ONLY return the result of the search.
    // check for trackName parameter input

    else if (trackName !== null) {

        // loop through the collection

        for (let i = 0; i < collection.length; i++) {
            
            const trackList = collection[i].trackList;
            
            if (trackList) {

                // loop through record properties
                for (let j = 0; j < trackList.length; j++) {
                    if(trackName == trackList[j].name) {
                        results.push(collection[i].trackList)
                    }
                }
            }
        }
        // return results

        return results;
    }


    else {

            // if no trackName was given BUT an artist or year was given, loop through collection
        
            for (let i = 0; i < collection.length; i++) {
            
                // check whether the year or artist was actually given OR if the it matches the [i].artist/yearPublished in the collection
            
                const checkYear = (!year || year == collection[i].yearPublished)
            const checkArtist = (!artist || artist == collection[i].artist)

            // if it does, push to results
            
            if (checkYear && checkArtist) {
                    results.push(collection[i]);
                }

        }
        // return results
        return results;
    }
}
console.log(search({trackName: 'Red Room'}));