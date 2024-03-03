/**
 * File Name: JAfacade.js
 *
 * Revision History:
 *      Johnstanley Ajagu, 2024-02-17 : Created
 */

function addReviews(){
    if (doValidate_frmAdd()){
        console.log("Add form is valid")
    }else{
        console.log("Add form is invalid")
    }
}

function modifyReview(){
    if (doValidate_frmModify()){
        console.log("Modify form is valid")
    }else{
        console.log("Modify form is invalid")
    }
}

function initStorage(){
    const value = $("#DefaultEmail").val()
    localStorage.setItem("DefaultEmail", value)
    alert("Default reviewer email saved.")
}