/**
 * File Name: JAmodels.js
 *
 * Revision History:
 *      Johnstanley Ajagu, 2024-02-17 : Created
 */

class Reviewer{
    constructor(businessName, reviewerEmail, reviewerComments,
                reviewDate, hasRating, rating1, rating2, rating3, typeId)
    {
        this.businessName = businessName
        this.reviewerEmail = reviewerEmail
        this.reviewerComments = reviewerComments
        this.reviewerDate = reviewDate
        this.hasRating = hasRating
        this.rating1 = rating1
        this.rating2 = rating2
        this.rating3 = rating3
        this.typeId = typeId
    }
}

class Type{
    constructor(name)
    {
        this.name = name
    }
}