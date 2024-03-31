/**
 * File Name: JAglobal.js
 *
 * Revision History:
 *      Johnstanley Ajagu, 2024-01-29 : Created
 */

function AddRating_check()
{
    const checked = $("#AddRatings").prop("checked")
    if (checked)
    {
        $("#ratings").show()
        $("#FoodQuality").val(0)
        $("#Service").val(0)
        $("#txtValue").val(0)
    }
    else{
        $("#ratings").hide()
    }
    getCurrentRating()
}

function ModifyAddRatings_check()
{
    const ModifyChecked = $("#ModifyAddRatings").prop("checked")
    if (ModifyChecked){
        $("#ModifyRating").show()
        $("#ModifyFoodQuality").val(0)
        $("#ModifyService").val(0)
        $("#ModifyTxtValue").val(0)
    }
    else{
        $("#ModifyRating").hide()
    }
    getModifiedRating()
}

function btnSave_click()
{
    addFeedback()
}

function btnUpdate_click()
{
    updateFeedback()
}

function btnDefault_click()
{
    initStorage()
}

function JAAddFeedbackPage_Click()
{
    const defaultEmail = localStorage.getItem("DefaultEmail")
    $("#ReviewerEmail").val(defaultEmail)
    showAllTypes()
    $("#JAAddFeedbackPage").on("pageshow", function() {
        location.reload()
    })
}

function JAViewFeedbackPage_Click()
{
    getReviews()
}

function JAModifyFeedbackPage_Click()
{
    showCurrentReview()
}
function btnDelete_click()
{
    deleteFeedback()
}
function btnCancel_click()
{
    cancel()
}
function btnClearReviews_click()
{
    clearReviews()
}

function init()
{
    $("#AddRatings").on("change", AddRating_check)
    $("#ModifyAddRatings").on("change", ModifyAddRatings_check)
    $("#FoodQuality, #txtValue, #Service").on("input", getCurrentRating)
    $("#ModifyFoodQuality, #ModifyService, #ModifyTxtValue").on("input", getModifiedRating)
    $("#btnSave").on("click", btnSave_click)
    $("#btnUpdate").on("click", btnUpdate_click)
    $("#btnDefault").on("click", btnDefault_click)
    $("#btnDelete").on("click", btnDelete_click)
    $("#btnCancel").on("click", btnCancel_click)
    $("#btnClearReviews").on("click", btnClearReviews_click)

    $("#JAAddFeedbackPage").on("pageshow", JAAddFeedbackPage_Click)
    $("#JAViewFeedbackPage").on("pageshow", JAViewFeedbackPage_Click)
    $("#JAModifyFeedbackPage").on("pageshow", JAModifyFeedbackPage_Click)

}

function initDB(){
    initDatabase()
}

$(document).ready(function () {
    init()
    initDB()
})