
function validateAndGetFormData() {
    var empIdVar = $("#empId").val();
    if (empIdVar === "") {
        alert("Employee ID Required Value");
        $("#empId").focus();
        return "";
    }
    var empNameVar = $("#empName").val();
    if (empNameVar === "") {
        alert("Employee Name is Required Value");
        $("#empName").focus();
        return "";
    }
    var empEmailVar = $("#empEmail").val();
    if (empEmailVar === "") {
        alert("Employee Email is Required Value");
        $("#empEmail").focus();
        return "";
    }
    var empAgeVar = $("#empAge").val();
    if (empAgeVar === "") {
        alert("Employee Age is Required Value");
        $("#empAge").focus();
        return "";
    }
    var jsonStrObj = {
        empId: empIdVar,
        empName: empNameVar,
        empEmail: empEmailVar,
        empAge: empAgeVar
    };
    return JSON.stringify(jsonStrObj);
}

function saveEmployee()
{
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90936125|-31948821635901029|90944141", jsonStr, "TEST", "EMP-REL");
    alert("Verify Data : \n" + putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({async: true});
    alert("Data Saved");

    resetForm();
}

function resetForm() {
    $("#empId").val("");
    $("#empName").val("");
    $("#empEmail").val("");
    $("#empAge").val("");
    $("#empId").focus();
}

function showEmployee() {
    
    var reqId = $("#empRecord").val();
    if (reqId === "") {
        alert("Employee Record is Required Value");
        $("#empRecord").focus();
        return "";
    }
    
    var getReqStr = createGET_BY_RECORDRequest("90936125|-31948821635901029|90944141", "TEST", "EMP-REL", reqId, "true", "true");
    alert("Verify Data : \n" + getReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(getReqStr, "http://api.login2explore.com:5577", "/api/irl");
    var obj = JSON.stringify(resultObj);
    jQuery.ajaxSetup({async: true});
    
    alert("Record Result : " + obj);
    document.getElementById(empForm).reset();
}