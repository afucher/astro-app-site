var AstroService = {};

AstroService.ObterAstros = function() {
    const date = new Date().toISOString();
    return fetch(`http://astroz.herokuapp.com/Astros?data=${date}&lat=-23.533773&long=-46.625290`)
    .then((response) => response.json())
};