document.getElementById('filtroInput').addEventListener('input', function () {
    var filtro = this.value.toLowerCase();

    var articulos = document.querySelectorAll('.section_3_apr .articulo_container');

    articulos.forEach(function (articulo) {
        var textoArticulo = articulo.querySelector('span').innerText.toLowerCase();
        if (textoArticulo.includes(filtro)) {
            articulo.style.display = 'block';
        } else {
            articulo.style.display = 'none';
        }
    });
});