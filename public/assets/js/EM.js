
$(document).ready(function () {
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });

    $("#loginform").validate({
        rules: {
            inputmail: {
                required: true,
                email: true,
                minlength: 6
            },
            inputpass: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            inputmail: {
                required: "Questo campo è obbligatorio!",
                email: "Inserisci un email valida!",
                minlength: "La lunghezza minima è 6 caratteri!"

            },
            inputpass: {
                required: "Questo campo è obbligatorio!",
                minlength: "La lunghezza minima è 3 caratteri!"
            }
        },
        submitHandler: function(form) {
            var dati = {
                email: $("#inputmail").val(),
                password: $("#inputpass").val()
            };
            $.ajax({
                url: "/login",
                type: "POST",
                data: JSON.stringify(dati),
                cache: false,
                processData: false,
            });
            return false;
        }
    });
    //
    // $("#loginbtn").on('click', function (e) {
    //     e.preventDefault();
    //     var user = {
    //         email: $("#inputmail").val(),
    //         password: $("#inputpass").val()
    //     };
    //     $.post('/login', user, function (res) {
    //         console.log("post done");
    //     });
    // })

});

