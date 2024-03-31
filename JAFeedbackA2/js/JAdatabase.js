/**
 * File Name: JAdatabase.js
 *
 * Revision History:
 *       Johnstanley Ajagu, 2024-02-17 : Created
 */

var database;

const reviewData= [
    {
        businessName: "M-Web technologies",
        reviewerEmail: "johnstanley.ajagu@gmail.com",
        reviewerComments: "Great Course",
        reviewerDate: "2022-12-25",
        hasRating: false,
        rating1: 0,
        rating2: 0,
        rating3: 0,
        typeId: 2,
    },
    {
        businessName: "Game programming",
        reviewerEmail: "John.stanley@gmail.com",
        reviewerComments: "Great skills to learn",
        reviewerDate: "2022-12-25",
        hasRating: true,
        rating1: 5,
        rating2: 5,
        rating3: 5,
        typeId: 4,
    }
]

const typesData=[
    {
        id: 1,
        name: "Others"
    },
    {
        id: 2,
        name: "Canadian"
    },
    {
        id: 3,
        name: "Asian"
    },
    {
        id: 4,
        name: "European"
    },
    {
        id: 5,
        name: "Australian"
    }
]

function createDatabase(){
    return new Promise((resolve, reject)=>{
        const request = indexedDB.open("ReviewersDB", 1)

        request.onerror =  (event) =>{
            database = event.target.result
            console.log("Error: error creating database")
            reject(database)
        }

        request.onsuccess = (event) =>{
            database = event.target.result
            console.log("onsuccess() called: database created successfully")
            resolve(database)
        }

        request.onupgradeneeded = (event) =>{
            database = event.target.result

            const typesStore = database.createObjectStore("types", {
                keyPath: "id",
                autoIncrement: true

            })
            const reviewsStore = database.createObjectStore("reviews", {
                keyPath: "id",
                autoIncrement: true
            })

            reviewData.forEach((item)=>{
                reviewsStore.add(item)
            })

            typesData.forEach((item)=>{
                typesStore.add(item)
            })
        }
    })
}