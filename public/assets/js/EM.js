
$(document).ready(function () {

    $("#loginbtn").on('click', function (e) {
        e.preventDefault();
        console.log("clicked! ", validateMail($("#input-mail").val()));
    })

});


function validateMail(value) {
        return (/[a-z]+@[a-z]+\.[a-z]+/.test(value));
}

