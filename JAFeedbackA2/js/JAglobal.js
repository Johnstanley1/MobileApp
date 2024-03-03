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
        $("#OverallRatings").val()
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
    addReviews()
}

function btnUpdate_click()
{
    modifyReview()
}

function btnDefault_click()
{
    initStorage()
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

}

$(document).ready(function () {
    init()
})