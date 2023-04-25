

function formularioComuniquemonos(){
    document.getElementById("comuniquemonos").style.display = "block";
    document.getElementById("reserva").style.display = "none";
}

function formularioReserva(){
    document.getElementById("reserva").style.display = "block";
    document.getElementById("comuniquemonos").style.display = "none";
}

function respuestaComuniquemonos(){
    var nombre = document.getElementById('nombreForm1').value;
    var correo = document.getElementById('correoForm1').value;
    var telefono = document.getElementById('telefonoForm1').value;
    var motivo = document.getElementById('motivo').value;
    var txtMotivo = document.getElementById('txtMotivo').value;

    if (nombre === ""){
        alert("El campo 'Nombre' es obligatorio")
        return false;
    }
    if (correo === ""){
        alert("El campo 'Correo' es obligatorio")
        return false;
    }
    
    if (telefono === ""){
        alert("El campo 'Telefono' es obligatorio")
        return false;
    }
    
    if (motivo === ""){
        alert("El campo 'Motivo' es obligatorio")
        return false;
    }
    
    if (txtMotivo === ""){
        alert("La explicacion del motivo es obligatorio")
        return false;
    }
    
    if(nombre != "" && correo != "" && telefono != "" && motivo != "" && txtMotivo != ""){
        alert("Muchas gracias " + nombre + " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + correo)
        document.getElementById("comuniquemonos").style.display = "none";
        return true;
    }

    
}

function respuestaReserva(){
    nombre = document.getElementById('nombreForm2').value;
    correo = document.getElementById('correoForm2').value;
    telefono = document.getElementById('telefonoForm2').value;
    fecha = document.getElementById('fecha').value;
    hora = document.getElementById('hora').value;
    cantAsistentes = document.getElementById('cantAsistentes').value;

    if (nombre === ""){
        alert("El campo 'Nombre' es obligatorio")
        return false;
    }

    if (correo === ""){
        alert("El campo 'Correo' es obligatorio")
        return false;
    }

    if (telefono === ""){
        alert("El campo 'Telefono' es obligatorio")
        return false;
    }

    if (fecha === ""){
        alert("El campo 'Fecha' es obligatorio")
        return false;
    }

    if (hora === ""){
        alert("El campo 'Hora' es obligatorio")
        return false;
    }

    if (cantAsistentes < 1 || cantAsistentes > 10){
        alert("La cantidad ingresada está fuera de los rangos (máximos asistentes 10 personas)")
        return false;
    }
    if (cantAsistentes === ""){
        alert("El campo 'Cantidad de Asistentes' es obligatorio")
        return false;
    }
    
    if(nombre != "" && correo != "" && telefono != "" && fecha != "" && hora != "" && cantAsistentes != "" && cantAsistentes > 1 && cantAsistentes < 10){
        /* alert("Muchas gracias " + nombre + " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + correo)
        document.getElementById("reserva").style.display = "none"; */
        return true;
    }
    
}