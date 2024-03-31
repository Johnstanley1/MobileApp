/**
 * File Name: JADAL.js
 *
 * Revision History:
 *       Johnstanley Ajagu, 2024-02-17 : Created
 */

const Reviews = {
    insert: function (reviewer){
        return new Promise ((resolve, reject)=>{
            const transaction = database.transaction(["reviews"], "readwrite")

            transaction.onerror = (event)=> console.log("Error: insert transaction of reviews store failed" + event)
            transaction.oncomplete = (event)=> console.log("Success: insert transaction of reviews store successful")

            const reviewsStore = transaction.objectStore("reviews")
            const req = reviewsStore.add(reviewer)

            req.onerror = (event)=>{
                console.log("Failed to add review")
                reject(event)
            }

            req.onsuccess = (event)=>{
                console.log("Review added successfully")
                resolve(event)
            }
        })
    },

    select: function (id) {
        return new Promise ((resolve, reject)=>{
            const transaction = database.transaction(["reviews"])

            transaction.onerror = (event)=> console.log("Error: select transaction of review store failed" + event)
            transaction.onsuccess = (event) => console.log("Success: select transaction of reviews store successful")

            const reviewsStore = transaction.objectStore("reviews")
            const req = reviewsStore.get(id)

            req.onerror = (event)=>{
                console.log("Error: review selection failed")
                reject(event)
            }

            req.onsuccess = (event)=>{
                console.log("Success: review selected successfully")
                event.target.result ? resolve(event.target.result) : resolve(null)
            }
        })
    },

    selectAll: function(){
        return new Promise((resolve, reject)=>{
            const transaction = database.transaction(["reviews"])

            transaction.onerror = (event)=> console.log("Error: select all transaction of review store failed" + event)
            transaction.onsuccess = (event) => console.log("Success: select all transaction of review store was successful")

            const reviewsStore = transaction.objectStore("reviews")
            const cursor = reviewsStore.openCursor()

            let reviews = []

            cursor.onsuccess = (event)=>{
                const pointer = event.target.result
                if (pointer){
                    reviews.push(pointer.value)
                    pointer.continue()
                }else{
                    resolve(reviews)
                }
                console.log("Success: all reviews selected successfully")
            }

            cursor.onerror = (event)=>{
                console.log("Error: all reviews selection failed")
                reject(event)
            }
        })
    },

    delete: function(id){
        return new Promise((resolve, reject)=>{
            const transaction = database.transaction(["reviews"], "readwrite")

            transaction.onerror= (event) => console.log("Error: delete transaction failed" + event)
            transaction.onsuccess = (event) => console.log("Success: Delete transaction of review store was successful")

            const reviewsStore = transaction.objectStore("reviews")
            const req = reviewsStore.delete(id)

            req.onerror = (event)=>{
                console.log("Error: review deletion failed")
                reject(event)
            }
            req.onsuccess = (event)=>{
                console.log("Success: review deleted successfully")
                resolve(event)
            }
        })
    },

    deleteAll: function(){
        return new Promise ((resolve, reject)=>{
            const transaction = database.transaction(["reviews"], "readwrite")

            transaction.onerror = (event) => console.log("Error: error in delete all transaction failed" + event)
            transaction.onsuccess = (event) => console.log("Success: delete all transaction of review store was successful")

            const reviewsStore = transaction.objectStore("reviews")
            const req = reviewsStore.clear()

            req.onerror = (event)=>{
                console.log("Error: all review deletion failed")
                reject(event)
            }
            req.onsuccess = (event)=>{
                console.log("Success: all review deleted successfully")
                resolve(event)
            }
        })
    },

    update: function(review){
        return new Promise((resolve, reject)=>{
            const transaction = database.transaction(["reviews"], "readwrite")

            transaction.onerror =(event) => console.log("Error: error in update transaction failed" + event)
            transaction.onsuccess =(event) => console.log("Success: update transaction of review store was successful")

            const reviewStore = transaction.objectStore("reviews")
            const req = reviewStore.put(review)

            req.onerror = (event)=>{
                console.log("Error: update review failed")
                reject(event)
            }
            req.onsuccess = (event)=>{
                console.log("Success: review updated successfully")
                resolve(event)
            }
        })
    }
}

const Types = {
    selectAll: function(){
        return new Promise((resolve, reject)=>{
            const transaction = database.transaction(["types"]);

            transaction.onerror = (event) => console.log("Error: error in select all transaction failed" + event)
            transaction.onsuccess = (event) => console.log("Success: select all transaction of types store was successful")

            const typesStore = transaction.objectStore("types")
            const cursor = typesStore.openCursor()

            let types = []

            cursor.onerror = (event)=>{
                console.log("Error: all types selection failed")
                reject(event)
            }

            cursor.onsuccess = (event)=>{
                const pointer = event.target.result
                if (pointer){
                    types.push(pointer.value)
                    pointer.continue()
                }else{
                    resolve(types)
                }

                console.log("Success: all types selected successfully")
            }
        })
    }
}