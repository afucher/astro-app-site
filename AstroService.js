var AstroService = {};

AstroService.ObterAstros = function(date, local) {
    const [lat, long] = ObterLatitudeLongitude(local);
    return fetch(`https://astroz.herokuapp.com/Astros?data=${date}&lat=${lat}&long=${long}`)
    .then((response) => response.json())
};

function ObterLatitudeLongitude(local) {
    switch(local) {
        case 'rj':
            return [-22.9035, -43.2096]
        case 'cuiaba':
            return [-15.5989, -56.0949]
        case 'sp':
        default: 
            return [-23.533773, -46.625290]
    }
}