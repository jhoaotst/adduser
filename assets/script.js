function agregarUsuario() {
    var waId = document.getElementById('waId').value;

    var requestBody = {
        "wa_id": waId
    };

    // Realiza la llamada a tu endpoint utilizando fetch.
    fetch('https://bi-chatbot.whiz.pe/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => {
        // Maneja la respuesta de la solicitud según tus necesidades.
        console.log(data);
        alert('Usuario agregado exitosamente');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al agregar el usuario');
    });
}
