
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
            var em = $("#inputmail").val();
            var ps = $("#inputpass").val();
            var input = {email:em, password:ps};

            const opzioni = {
                url: '/login',
                type: 'POST',
                data: input,
                cache: false,
                processData: false,
            };

            $(form).ajaxSubmit(opzioni);

            // $.ajax({
            //     url: "/login",
            //     type: "POST",
            //     data: input,
            //     cache: false,
            //     processData: false,
            // });
            // return false;
        }
    });

});

