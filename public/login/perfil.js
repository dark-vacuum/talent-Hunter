function registerEvents() {
    $.ajax({type: 'GET', url: '/profile'}).done(function(user) {
        console.log(user)
        //$("#foto").attr("src", user.imgName);
        $("#nombre").text(user.name);
        $("#actividad").text(user.activity);
        $("#correo").text(user.email);
        $("#reputacion").text(user.standing)
        $("#costo").text(user.cost)
    });
}