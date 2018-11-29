function hunterInfo() {
    $("#extra").after('<p class="desc-stat">Giro:</p><p class="number-stat" id="giro"></p></br>')
    $("#giro").next().after('<p class="desc-stat">Lugar:</p><p class="number-stat" id="lugar"></p></br>')
}

function talentInfo() {
    $("#extra").after('<p class="desc-stat">Costo:</p><p class="number-stat" id="costo"></p>')
}


function registerEvents() {
    $.ajax({type: 'GET', url: '/profile'}).done(function(user) {
        if (user.whichIs == 'talento'){
            talentInfo()
            $("#costo").text(user.cost)
        } else {
            hunterInfo()
            $("#giro").text(user.business)
            $("#lugar").text(user.coords)
        }
        console.log(user.imgName)
        $("#foto").attr("src", user.imgName);
        $("#nombre").text(user.name);
        $("#actividad").text(user.activity);
        $("#correo").text(user.email);
        $("#reputacion").text(user.standing)
        
    });
}