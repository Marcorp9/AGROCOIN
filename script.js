// Conectar a MetaMask
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Conectado:', accounts[0]);
            alert('Conectado a MetaMask: ' + accounts[0]);
        } catch (error) {
            console.error('Error al conectar con MetaMask', error);
            alert('Error al conectar con MetaMask');
        }
    } else {
        alert('Por favor, instala MetaMask!');
    }
}

document.getElementById('connectWallet').addEventListener('click', connectWallet);

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Validar campos
    if (name && surname && phone && email) {
        // Enviar datos (aquí puedes agregar la lógica para enviar a un servidor)
        document.getElementById('formMessage').innerText = 'Formulario enviado con éxito!';
        document.getElementById('formMessage').style.color = '#388e3c'; // Verde
    } else {
        document.getElementById('formMessage').innerText = 'Por favor, completa todos los campos.';
    }
});
