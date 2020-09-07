var count = 0;
var correcta = 'acero';
var pista1 = "<div class='alert alert-info' role='alert'>Tiene Realacion a sus extremediades Automail</div>";
var pista2 = "<div class='alert alert-info' role='alert'>Es un Tipo de Aleacion de Hierro</div>";

function trivia() {
    if (count < 4) {
        count++;
        var respuesta = document.getElementById("respuestaDada").value;
        $("#intentos").html("Cantidad de intentos: " + count);
        $("#intentos").show();
        if (respuesta === correcta) {
            count = 10;
            var success = "<div class='alert alert-success' role='alert'>Respuesta Correcta</div>";
            document.getElementById("alert").innerHTML = success;
        } else {
            var error = "<div class='alert alert-danger' role='alert'>Respuesta incorrecta</div>";
            document.getElementById("alert").innerHTML = error;
            if (count == 2) {
                document.getElementById("alert").innerHTML = error + pista1;
            }
            if (count == 3) {
                document.getElementById("alert").innerHTML = error + pista1 + pista2;
            }
        }
    } else {
        if (count != 10) {
            var error = "<div class='alert alert-danger' role='alert'>Se le acabaron los intentos</div>";
            document.getElementById("alert").innerHTML = error;
        }
    }
    event.preventDefault();
}


function reset() {
    location.reload();
}