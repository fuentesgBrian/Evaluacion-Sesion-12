

$(document).ready(function () {

    $("#formReserva").submit(function () { 
        nombre = $("#nombreForm2").val();
        correo = $("#correoForm2").val();
        cantAsistentes = $("#cantAsistentes").val();
        if (nombre != "" && correo != "" && cantAsistentes > 1 && cantAsistentes < 10 && cantAsistentes != "") {
            alert("Estimado: " + nombre + " agradecemos por reservar con nosotros. Hemos registrado " + cantAsistentes + " asistentes. Se ha enviado el código de confirmación al correo " + correo + "\nGracias por preferirnos")
            if (window.matchMedia("(min-width: 800px)")){
                $("#reserva").css("display", "none");
            }else{
                $("#reserva").css("display", "block");
            } 
            
        }
    });

    var titulo, descripcion, imagen;

    $("#tarjetaGaseosas").click(function () { 
        titulo = $("#tituloGaseosas").html();
        descripcion = $("#descripcionGaseosas").html();
        imagen = $("#imagenGaseosas").attr("src");
        $("#titulo").text(titulo);
        $("#descripcion").text(descripcion);
        $("#imagen").attr("src", imagen);
        
        $("#destacadoSeleccionado").show();
    });

    $("#tarjetaTablas").click(function () { 
        titulo = $("#tituloTablas").html();
        descripcion = $("#descripcionTablas").html();
        imagen = $("#imagenTablas").attr("src");
        $("#titulo").text(titulo);
        $("#descripcion").text(descripcion);
        $("#imagen").attr("src", imagen);
        
        $("#destacadoSeleccionado").show();
    });

    $("#tarjetaShop").click(function () { 
        titulo = $("#tituloShop").html();
        descripcion = $("#descripcionShop").html();
        imagen = $("#imagenShop").attr("src");
        $("#titulo").text(titulo);
        $("#descripcion").text(descripcion);
        $("#imagen").attr("src", imagen);
        
        $("#destacadoSeleccionado").show();
    });

    $("#botonCerrar").click(function () {
        $("#destacadoSeleccionado").hide();
    });

});