function offeredComment() {
    let name = document.forms["RegForm"]["Name"];
    let email = document.forms["RegForm"]["EMail"];
    let phoneNumber = document.forms["RegForm"]["PhoneNumber"];
    let serviceRequest = document.forms["RegForm"]["ServiceRequest"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phoneNumber.value == "") {
        window.alert(
          "Please enter a valid phone number.");
        phoneNumber.focus();
        return false;
    }

    if (serviceRequest.value == "") {
        window.alert(
          "Please fill out a service request for your project.");
        serviceRequest.focus();
        return false;
    }

    return true;
}