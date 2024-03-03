/**
 * File Name: JAutil.js
 *
 * Revision History:
 *       Johnstanley Ajagu, 2024-02-17 : Created
 */

function getCurrentRating(){
    const FoodQuality = parseInt($("#FoodQuality").val())
    const Service = parseInt($("#Service").val())
    const txtValue = parseInt($("#txtValue").val())
    const calRating = (FoodQuality + Service + txtValue) * 100/15

    if (calRating === 0){
        $("#OverallRatings").val(" ")
    }
    else{
        $("#OverallRatings").val(( calRating.toFixed(0) + "%"))

    }
}

function getModifiedRating(){
    const ModifyFoodQuality = parseInt($("#ModifyFoodQuality").val())
    const ModifyService = parseInt($("#ModifyService").val())
    const ModifyTxtValue = parseInt($("#ModifyTxtValue").val())
    const ModifyCalRating = (ModifyFoodQuality + ModifyService + ModifyTxtValue) * 100/15

    if (ModifyCalRating === 0){
        $("#ModifyOverallRatings").val(" ")
    }
    else{
        $("#ModifyOverallRatings").val(( ModifyCalRating.toFixed(0) + "%"))

    }
}

function doValidate_frmAdd(){
    const frmAdd = $("#frmAdd")
    frmAdd.validate({
        rules:{
            BusinessName:{
                required: true,
                rangelength:[2, 20]
            },
            ReviewerEmail:{
                required: true,
                emailCheck: true
            },
            ReviewerDate:{
                required: true,
            },
            FoodQuality:{
                required: true,
                rangeCheck: true
            },
            Service:{
                required: true,
                rangeCheck: true
            },
            txtValue:{
                required: true,
                rangeCheck: true
            }

        },
        messages:{
            BusinessName:{
                required: "Business name is required",
                rangelength: "The business name must be between 2 - 20 characters long"
            },
            ReviewerEmail:{
                required: "Reviewers email is required",
                emailCheck: "Email must be valid in the format abc@domain.xyz"
            },
            ReviewerDate:{
                required: "Reviewers date is required",
            },
            FoodQuality:{
                required: "Food quality rating is required",
                rangeCheck: "Value must be between 0 - 5"
            },
            Service:{
                required: "Service rating is required",
                rangeCheck: "Value must be between 0 - 5"
            },
            txtValue:{
                required: "Value rating is required",
                rangeCheck: "Value must be between 0 - 5"
            }
        }
    })
    return frmAdd.valid()
}

function doValidate_frmModify(){
    const frmModify = $("#frmModify")
    frmModify.validate({
        rules: {
            ModifyBusinessName:{
                required: true,
                rangelength:[2, 20]
            },
            ModifyReviewerEmail:{
                required: true,
                emailCheck: true
            },
            ModifyReviewerDate:{
                required: true,
            },
            ModifyFoodQuality:{
                required: true,
                rangeCheck: true
            },
            ModifyService:{
                required: true,
                rangeCheck: true
            },
            ModifyTxtValue:{
                required: true,
                rangeCheck: true
            }
        },
        messages: {
            ModifyBusinessName:{
                required: "Business name is required",
                rangelength: "The business name must be between 2 - 20 characters long"
            },
            ModifyReviewerEmail:{
                required: "Reviewers email is required",
                emailCheck: "Email must be valid in the format abc@domain.xyz"
            },
            ModifyReviewerDate:{
                required: "Reviewers date is required",
            },
            ModifyFoodQuality:{
                required: "Food quality rating is required",
                rangeCheck: "Value must be between 0 - 5"
            },
            ModifyService:{
                required: "Service rating is required",
                rangeCheck: "Value must be between 0 - 5"
            },
            ModifyTxtValue:{
                required: "Value rating is required",
                rangeCheck: "Value must be between 0 - 5"
            }
        }
    })
    return frmModify.valid()
}

jQuery.validator.addMethod(
    "emailCheck",
    function (value, element){
        const regexp =
            /^[\w-]+(\.[\w-]+)*@(gmail\.(?:com|org|net)|yahoo\.(?:com|org|net)|outlook\.(?:com|org|net)|hotmail\.(?:com|org|net)|aol\.(?:com|org|net)|conestogac\.on\.ca)$/
        return this.optional(element) || regexp.test(value)
    },
    "Email must be valid in the format abc@domain.com"
)

jQuery.validator.addMethod(
    "rangeCheck",
    function(value, element){
        const min = 0
        const max = 5
        return this.optional(element) || (value >= min && value <= max)
    },
    "Value must be between 0 - 5"
)