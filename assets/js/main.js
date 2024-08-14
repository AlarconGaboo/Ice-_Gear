$(document).ready(function() {
    // Función para manejar la búsqueda
    function handleSearch(searchBar, color) {
        if (searchBar.find('input').val() !== "") {
            searchBar.css('background-color', color);

            // Usamos setTimeout para que el cambio de color sea visible antes de mostrar el alert
            setTimeout(function() {
                alert("Buscando producto");
                location.reload(); // Recargar la página después de cerrar el alert
            }, 500); // Un pequeño retraso para que el color cambie antes del alert
        }
    }

    // Manejador de evento para la primera barra de búsqueda
    $('.search-bar:eq(0) button').click(function() {
        handleSearch($('.search-bar:eq(0)'), 'lightgreen');
    });

    // Manejador de evento para la segunda barra de búsqueda
    $('.search-bar:eq(1) button').click(function() {
        handleSearch($('.search-bar:eq(1)'), 'yellow');
    });

    // Manejador de evento para la tercera barra de búsqueda
    $('.search-bar:eq(2) button').click(function() {
        handleSearch($('.search-bar:eq(2)'), 'lightblue');
    });
});
