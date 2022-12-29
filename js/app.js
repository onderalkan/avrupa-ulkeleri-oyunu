document.addEventListener('click', (e) => {
    console.log(e.target.id)
})

const countryIDs = ['gl', 'pt', 'es', 'fr', 'ch', 'it', 'no', 'se', 'fi', 'dk', 'ru-main',
    'kz', 'ua', 'ge', 'az', 'am', 'ir', 'tr', 'iq', 'sy', 'cy', 'lb', 'il', 'jo', 'ps',
    'sa', 'gr', 'is', 'mk', 'al', 'bg', 'rs', 'me', 'ba', 'hr', 'hu', 'ro', 'sk', 'by',
    'lt', 'lv', 'ee', 'pl', 'cz', 'at', 'si', 'sm', 'va', 'mc', 'mt', 'li', 'ad',
    'be', 'gb', 'ie', 'ma', 'dz', 'tn', 'GE-AB', 'south_ossetia', 'xk',
    'crimea_disputed', 'im', 'gg', 'je', 'nagorno-karabakh_claimed',
    'golan_heights', 'path5816', 'path3950', 'path3849', 'path3087', 'path3090', 'path3859',
    'path3899', 'path3897', 'path5848'
];

const infoEl = document.querySelector('.info');
const controlEl = document.querySelector('.control');

const countryObjects = [
    {
        id: 'xk',
        name: 'Kosova'
    },
    {
        id: 'hr',
        name: 'Hırvatistan'
    },
    {
        id: 'gl',
        name: 'Grönland'
    },
    {
        id: 'be',
        name: 'Belçika'
    },
    {
        id: 'ru-main',
        name: 'Rusya'
    },
    {
        id: 'gl',
        name: 'Grönland'
    },
    {
        id: 'pt',
        name: 'Portekiz'
    },
    {
        id: 'es',
        name: 'İspanya'
    },
    {
        id: 'fr',
        name: 'Fransa'
    },
    {
        id: 'ch',
        name: 'İsviçre'
    },
    {
        id: 'it',
        name: 'İtalya'
    },
    {
        id: 'no',
        name: 'Norveç'
    },
    {
        id: 'se',
        name: 'İsveç'
    },
    {
        id: 'fi',
        name: 'Finlandiya'
    },
    {
        id: 'dk',
        name: 'Danimarka'
    },
    {
        id: 'kz',
        name: 'Kazakistan'
    },
    {
        id: 'ge',
        name: 'Gürcistan'
    },
    {
        id: 'path3899',
        name: 'Azerbaycan'
    },
    {
        id: 'tr',
        name: 'Türkiye'
    },
    {
        id: 'path3859',
        name: 'KKTC'
    },
    {
        id: 'gr',
        name: 'Yunanistan'
    },
    {
        id: 'is',
        name: 'İzlanda'
    },
    {
        id: 'mk',
        name: 'Makedonya'
    },
    {
        id: 'al',
        name: 'Arnavutluk'
    },
    {
        id: 'bg',
        name: 'Bulgaristan'
    },
    {
        id: 'rs',
        name: 'Sırbistan'
    },
    {
        id: 'me',
        name: 'Karadağ'
    },
    {
        id: 'ba',
        name: 'Bosna Hersek'
    },
    {
        id: 'hu',
        name: 'Macaristan'
    },
    {
        id: 'ro',
        name: 'Romanya'
    },
    {
        id: 'sk',
        name: 'Slovakya'
    },
    {
        id: 'by',
        name: 'Beyaz Rusya'
    },
    {
        id: 'lt',
        name: 'Litvanya'
    },
    {
        id: 'lv',
        name: 'Letonya'
    },
    {
        id: 'ee',
        name: 'Estonya'
    },
    {
        id: 'pl',
        name: 'Polonya'
    },
    {
        id: 'cz',
        name: 'Çekya'
    },
    {
        id: 'at',
        name: 'Avusturya'
    },
    {
        id: 'si',
        name: 'Slovenya'
    },
    {
        id: 'mt',
        name: 'Malta'
    },
    {
        id: 'gb-gbn',
        name: 'İngiltere'
    },
    {
        id: 'ie',
        name: 'İrlanda'
    },
    {
        id: 'path5816',
        name: 'Almanya'
    },
    {
        id: 'path3950',
        name: 'Moldova'
    },
    {
        id: 'path3849',
        name: 'Ukrayna'
    },
    {
        id: 'path3897',
        name: 'Ermenistan'
    },
    {
        id: 'path5848',
        name: 'Hollanda'
    }
];

// Put missed countries in an array of their own
const missedCountries = [];

const currentQuestion = {
    id: null,
    name: null
}

const createQuestion = _ => {
    if (countryObjects.length == 0) {
        missedString = '';
        missedCountries.forEach((country) => {
            missedString += country.name + ', ';
        });
        controlEl.classList.add('hidden');
        if (missedCountries.length == 0) {
            infoEl.innerHTML = `<h2>Yarışma Bitti!</h2>
                            <p>Tebrikler.Tüm ülkeleri buldunuz!</p>`;
        } else {
            infoEl.innerHTML = `<h2>Yarışma Bitti!</h2>
                            <p>Bulamadığınız Ülkeler:</p>
                            <p>${missedString.substring(0, missedString.length -2)}</p>`;
        }
        countryIDs.forEach((id) => {
            document.getElementById(id).removeEventListener('click', checkAnswer);
        });
    } else {
        let currentCountry = countryObjects[Math.floor(Math.random() * (countryObjects.length))];
        infoEl.innerHTML = `<p>Bulunacak Ülke: ${currentCountry.name}</p>`;
        currentQuestion.name = currentCountry.name;
        currentQuestion.id = currentCountry.id;
    }
}

createQuestion();


const checkAnswer = function (e) {
    if (currentQuestion.id === e.target.id) {
        e.target.classList.add('correct');
    } else {
        document.getElementById(currentQuestion.id).classList.add('incorrect');
        countryObjects.forEach((obj, i) => {
            if (obj.id === currentQuestion.id) {
                missedCountries.push(countryObjects[i]);
            }
        });
    };

    countryObjects.forEach((obj, i) => {
        if (obj.id === currentQuestion.id) {
            countryObjects.splice(i, 1);
        }
    })

    createQuestion();
}

countryIDs.forEach((id) => {
    document.getElementById(id).style = "fill:#c0c0c0;stroke:#ffffff;stroke-width:0.4;stroke-miterlimit:4;stroke-dasharray:none";
    document.getElementById(id).addEventListener('click', checkAnswer);
});

let transformMatrix = [1, 0, 0, 1, 0, 0];
let svg = document.getElementById('map-svg');
let viewbox = svg.getAttributeNS(null, "viewBox").split(" ");
let centerX = parseFloat(viewbox[2]) / 2;
let centerY = parseFloat(viewbox[3]) / 2;
let matrixGroup = svg.getElementById("matrix-group");

function pan(dx, dy) {
    transformMatrix[4] += dx;
    transformMatrix[5] += dy;
    let newMatrix = "matrix(" + transformMatrix.join(' ') + ")";
    matrixGroup.setAttributeNS(null, "transform", newMatrix);

    // console.log(matrixGroup.getAttributeNS(null, "transform").split(" "));
    // This data could probably be used to center on zoom
    // Maybe this SO can be helpful: https://stackoverflow.com/questions/10298658/mouse-position-inside-autoscaled-svg
}

function zoom(scale) {
    for (let i = 0; i < 4; i++) {
        transformMatrix[i] *= scale;
    }
    transformMatrix[4] += (1 - scale) * centerX;
    transformMatrix[5] += (1 - scale) * centerY;

    centerX *= scale;
    centerY *= scale;

    let newMatrix = "matrix(" + transformMatrix.join(' ') + ")";
    matrixGroup.setAttributeNS(null, "transform", newMatrix);

    // console.log(matrixGroup.getAttributeNS(null, "transform").split(" "));
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('plus') || e.target.classList.contains('fa-plus')) {
        zoom(1.5);
    }
    if (e.target.classList.contains('minus') || e.target.classList.contains('fa-minus')) {
        zoom(0.7);
    }
    if (e.target.classList.contains('up') || e.target.classList.contains('fa-chevron-up')) {
        pan(0, 100);
    }
    if (e.target.classList.contains('down') || e.target.classList.contains('fa-chevron-down')) {
        pan(0, -100);
    }
    if (e.target.classList.contains('right') || e.target.classList.contains('fa-chevron-right')) {
        pan(-100, 0);
    }
    if (e.target.classList.contains('left') || e.target.classList.contains('fa-chevron-left')) {
        pan(+100, 0);
    }
    if (e.target.classList.contains('home') || e.target.classList.contains('fa-home')) {
        transformMatrix = [1, 0, 0, 1, 0, 0];
        centerX = parseFloat(viewbox[2]) / 2;
        centerY = parseFloat(viewbox[3]) / 2;

        matrixGroup.setAttributeNS(null, "transform", "matrix(1 0 0 1 0 0)");
    }
});