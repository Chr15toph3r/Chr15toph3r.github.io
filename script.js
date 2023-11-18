document.getElementById('inputLine').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        var command = event.target.innerText;
        var responseElement = document.getElementById('response');
            if (command.trim().toLowerCase() === 'help') {
                responseElement.innerHTML = "<br>Pagina bajo construccion :)";
            } else {
                responseElement.innerHTML = "<br>";
            }
         event.target.innerText = '';
    }
});