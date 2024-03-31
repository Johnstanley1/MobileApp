/**
 * File Name: JAfacade.js
 *
 * Revision History:
 *      Johnstanley Ajagu, 2024-02-17 : Created
 */

function initStorage()
{
    const value = $("#DefaultEmail").val()
    localStorage.setItem("DefaultEmail", value)
    alert("Default reviewer email saved.")
}

function initDatabase()
{
    createDatabase().then((data) =>
    {
        console.log("Database created successfully")
    }).catch((e) =>
    {
        console.log("Error in database creation")
    })
}

function showAllTypes()
{
    Types.selectAll().then((data) =>
    {
        const ethnicityTypes = document.getElementById("ethnicity")
        const ModEthnicityTypes = document.getElementById("ModifyEthnicity")
        ethnicityTypes.innerHTML = ""
        ModEthnicityTypes.innerHTML = ""
        typesData.forEach((data) =>
        {
            const options = document.createElement("option")
            const ModOptions = document.createElement("option")
            options.value = data.id
            options.textContent = data.name
            ModOptions.value = data.id
            ModOptions.textContent = data.name
            ethnicityTypes.appendChild(options)
            ModEthnicityTypes.appendChild(ModOptions)

        })

        const defaultOption = document.createElement("option")
        defaultOption.value = "Others"

    }).catch((e) =>
    {
        console.log(e.message)
    })
}

function addFeedback()
{
    if (doValidate_frmAdd())
    {
        console.log("Add form is valid")

        const name = $("#BusinessName").val()
        const email = $("#ReviewerEmail").val()
        const comments = $("#ReviewerComments").val()
        const date = $("#ReviewerDate").val()
        const hasRating = $("#AddRatings").prop("checked")
        const fQuality = parseInt($("#FoodQuality").val()) || 0
        const service = parseInt($("#Service").val()) || 0
        const tValue = parseInt($("#txtValue").val()) || 0
        const typeId = parseInt($("#ethnicity").val())

        const reviews = new Reviewer(name, email, comments, date, hasRating, fQuality, service, tValue, typeId)

        Reviews.insert(reviews).then((data) =>
        {
            alert("Review added successfully")
        }).catch((e) =>
        {
            console.log(e.message)
        })
    } else
    {
        console.log("Add form is invalid")
    }
}

function getReviews()
{
    Reviews.selectAll().then((data) =>
    {
        let reviews = $("#listViewFeedback")
        let htmlCode = ""
        let calRating = 0

        if (data.length === 0){
            htmlCode += `<h1>No record found</h1>`
        }else{
            for (let i = 0; i < data.length; i++)
            {
                const row = data[i]
                calRating = ((row.rating1 + row.rating2 + row.rating3) * 100 / 15).toFixed(0)

                if (row.hasRating === true){
                    htmlCode += `<li>
                                 <a href="#" data-role="button" data-row-id="${row.id}">
                                     <h2>Business Name: ${row.businessName}</h2>
                                     <p>Reviewer email: ${row.reviewerEmail}</p>
                                     <p>Overall Rating: ${calRating + "%"}</p>
                                 </a>
                            </li>`
                }else{
                    htmlCode += `<li>
                                 <a href="#" data-role="button" data-row-id="${row.id}">
                                     <h2>Business Name: ${row.businessName}</h2>
                                     <p>Reviewer email: ${row.reviewerEmail}</p>
                                 </a>
                            </li>`
                }
            }
        }

        reviews = reviews.html(htmlCode)
        reviews.listview("refresh")
        $("#listViewFeedback a").on("click", function ()
        {
            localStorage.setItem("id", $(this).attr("data-row-id"))
            $.mobile.changePage("#JAModifyFeedbackPage", {transition: "none"})
        })
    }).catch((e) =>
    {
        console.log(e.message)
    })
}

function showCurrentReview(){
    const id = Number(localStorage.getItem("id"))
    let calRating = 0
    showAllTypes()

    Reviews.select(id).then((data)=>{
        $("#ModifyBusinessName").val(data.businessName)
        $("#ModifyReviewerEmail").val(data.reviewerEmail)
        $("#ModifyReviewerComments").val(data.reviewerComments)
        $("#ModifyReviewerDate").val(data.reviewerDate)
        $("#ModifyFoodQuality").val(data.rating1)
        $("#ModifyService").val(data.rating2)
        $("#ModifyTxtValue").val(data.rating3)

        calRating = ((data.rating1 + data.rating2 + data.rating3) * 100 / 15).toFixed(0)

        const type = typesData.find(type => type.id === data.typeId)
        if(type)
        {
            $("#ModifyEthnicity option").each(function (){
                if($(this).text() === type.name){
                    $(this).prop("selected", true)
                    $("#ModifyEthnicity").selectmenu("refresh")
                    return false
                }
            })
        }

        if (data.hasRating === true){
            $("#ModifyRating").show()
            $("#ModifyAddRatings").prop("checked", true)
            $("#ModifyOverallRatings").val(calRating)
        }else{
            $("#ModifyRating").hide()
            $("#ModifyAddRatings").prop("checked", false)
        }

        $("#frmModify :checkbox").checkboxradio("refresh")

    }).catch((e)=>{
        console.log(e.message)
    })
}

function updateFeedback()
{
    if (doValidate_frmModify())
    {
        console.log("Modify form is valid")

        const id = Number(localStorage.getItem("id"))

        const name = $("#ModifyBusinessName").val()
        const email = $("#ModifyReviewerEmail").val()
        const comments = $("#ModifyReviewerComments").val()
        const date = $("#ModifyReviewerDate").val()
        const hasRating = $("#ModifyAddRatings").prop("checked")
        const fQuality = parseInt($("#ModifyFoodQuality").val()) || 0
        const service = parseInt($("#ModifyService").val()) || 0
        const tValue = parseInt($("#ModifyTxtValue").val()) || 0
        const typeId = parseInt($("#ModifyEthnicity").val())

        const reviews = new Reviewer(name, email, comments, date, hasRating, fQuality, service, tValue, typeId)
        reviews.id = id

        Reviews.update(reviews).then((data) =>
        {
            alert("Review updated successfully")
        }).catch((e) =>
        {
            console.log(e.message)
        })
    } else
    {
        console.log("Modify form is invalid")
    }
}

function deleteFeedback(){
    const response = confirm("Are you sure you want to delete review?")
    if (response){
        const id = Number(localStorage.getItem("id"))

        Reviews.delete(id).then((data)=>{
            alert("Review deleted successfully")
            $.mobile.changePage("#JAViewFeedbackPage", {transition: "none"})
        }).catch((e)=>{
            console.log(e.message)
        })
    }else{
        $.mobile.changePage("#JAViewFeedbackPage", {transition: "none"})
    }
}

function cancel(){
    $.mobile.changePage("#JAHomePage", {transition: "none"})
}

function clearReviews(){
    const response = confirm("Really want to clear database?")
    if (response){
        Reviews.deleteAll().then((data)=>{
            alert("All reviews deleted")
            $.mobile.changePage("#JAViewFeedbackPage", {transition: "none"})
        }).catch((e)=>{
            console.log(e.message)
        })
    }else{
        $.mobile.changePage("#JAHomePage", {transition: "none"})
    }
}