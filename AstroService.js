var AstroService = {};

AstroService.ObterAstros = function(date) {
    return fetch(`https://astroz.herokuapp.com/Astros?data=${date}&lat=-23.533773&long=-46.625290`)
    .then((response) => response.json())
};