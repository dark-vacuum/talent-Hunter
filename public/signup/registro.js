function cazadorInfo() {
    $("#costo").prev().remove()
    $("#costo").next().remove()
    $("#costo").next().remove()
    $("#costo").next().remove()
    $("#costo").remove()
    $("#edad").next().after('<label for="giro">Giro:</label><input type="text" name="business" id="giro" /></br>')
    $("#giro").after('<label for="lugar">Lugar:</label><input type="text" name="place" id="lugar" />')
    $("#lugar").next().after('<label>Costo por proponer proyectos $200</label></br>')
}

function talentoInfo() {
    $("#giro").prev().remove()
    $("#giro").remove()
    $("#lugar").prev().remove()
    $("#lugar").next().remove()
    $("#lugar").next().remove()
    $("#lugar").next().remove()
    $("#lugar").remove()
    $("#edad").next().after('<label for="costo">Costo: $</label><input type="text" name="cost" id="costo" /></br>')
    $("#costo").after('<label for="actividad">Actividad:</label><input type="text" name="activity" id="actividad" />')

}

function registerEvents() {
    $("#registrar").attr("disabled", true);
    $("#email").keyup(function () {
        if ($(this).val() != '' && $("#password").val() != '') {
            $('#registrar').attr("disabled", false);
        }
    });
    $("#password").keyup(function () {
        if ($(this).val() != '' && $("#email").val() != '') {
            $('#registrar').attr("disabled", false);
        }
    });
    $(':radio').on('change', function () {
        if ($('input[name=eres]:checked', '#data').val() == "cazador") {
            cazadorInfo()
        } else {
            talentoInfo()
        }
    });


}