// Conexión a la base de datos
var conn = new Mongo();
var db = conn.getDB('practicaDB');

db.createUser(
    {
        user: "noah",
        pwd: "noah1234",
        roles: [
            {
                role: "readWrite",
                db: "practicaDB"
            }
        ]
    }
);

// Crear la colección
db.createCollection('pinturas');

// Documentos a insertar
var pinturas = [
    {
        "titulo": "La Gioconda",
        "autor": "Leonardo da Vinci",
        "anio_creacion": 1503,
        "descripcion": "La Mona Lisa es un retrato de Lisa Gherardini, esposa de Francesco del Giocondo.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/800px-Mona_Lisa.jpg"

    },
    {
        "titulo": "La noche estrellada",
        "autor": "Vincent van Gogh",
        "anio_creacion": 1889,
        "descripcion": "Pintura postimpresionista que muestra un cielo nocturno sobre un pueblo.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    },
    {
        "titulo": "El Gernika",
        "autor": "Pablo Picasso",
        "anio_creacion": 1937,
        "descripcion": "Pintura que muestra el bombardeo de la ciudad de Guernica durante la Guerra Civil Española.",
        "imagen": "https://www.muralesyvinilos.com/murales/96023_Guernica-_Picasso.jpg"
    },
    {
        "titulo": "El Grito",
        "autor": "Edvard Munch",
        "anio_creacion": 1893,
        "descripcion": "Expresionista, representa a un hombre angustiado con un fondo de cielo rojizo.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/800px-The_Scream.jpg"
    },
    {
        "titulo": "La persistencia de la memoria",
        "autor": "Salvador Dalí",
        "anio_creacion": 1931,
        "descripcion": "Cuadro surrealista con relojes blandos en un paisaje desértico.",
        "imagen": "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbnljLTItMjY4LmpwZyIsInJlc2l6ZSw4MDAiXX0.oHuiNXMeCqBT1fa5I9ddteiMiKkLQ_e1lyF6l8uUsWo.jpg"
    },
    {
        "titulo": "La última cena",
        "autor": "Leonardo da Vinci",
        "anio_creacion": 1498,
        "descripcion": "Representación del último momento de Jesús con sus apóstoles antes de su crucifixión.",
        "imagen": "https://www.disfrutamilan.com/f/italia/milan/guia/la-ultima-cena-leonardo-da-vinci.jpg"
    },
    {
        "titulo": "La joven de la perla",
        "autor": "Johannes Vermeer",
        "anio_creacion": 1665,
        "descripcion": "Pintura de una joven sosteniendo una perla, con una expresión enigmática.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/250px-Meisje_met_de_parel.jpg"
    },
    {
        "titulo": "No. 5, 1948",
        "autor": "Jackson Pollock",
        "anio_creacion": 1948,
        "descripcion": "Pintura abstracta, famosa por su técnica de goteo de pintura.",
        "imagen": "https://arthive.net/res/media/img/oy800/work/3b4/293780@2x.jpg"
    },
    {
        "titulo": "La creación de Adán",
        "autor": "Michelangelo",
        "anio_creacion": 1512,
        "descripcion": "Fresco que representa la creación de Adán en el techo de la Capilla Sixtina.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg"
    },
    {
        "titulo": "Los jugadores de cartas",
        "autor": "Paul Cézanne",
        "anio_creacion": 1892,
        "descripcion": "Serie de pinturas que representan a hombres jugando cartas en una mesa.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Paul_C%C3%A9zanne_-_Les_Joueurs_de_cartes.jpg"
    },
    {
        "titulo": "El nacimiento de Venus",
        "autor": "Sandro Botticelli",
        "anio_creacion": 1486,
        "descripcion": "Pintura que representa el nacimiento de la diosa Venus en una concha marina.",
        "imagen": "https://www.visituffizi.org/img/artworks/botticelli-birth-venus.jpg"
    },
    {
        "titulo": "El pensador",
        "autor": "Auguste Rodin",
        "anio_creacion": 1902,
        "descripcion": "Escultura de un hombre pensativo en una pose meditativa.",
        "imagen": "https://live.staticflickr.com/7014/6505840605_b181f7840b_b.jpg"
    },
    {
        "titulo": "El beso",
        "autor": "Gustav Klimt",
        "anio_creacion": 1907,
        "descripcion": "Pintura que muestra a una pareja abrazándose y fundiéndose en un beso apasionado.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/El_beso%28Gustav_Klimt%29.jpg/473px-El_beso%28Gustav_Klimt%29.jpg"
    },
    {
        "titulo": "Las Meninas",
        "autor": "Diego Velázquez",
        "anio_creacion": 1656,
        "descripcion": "Cuadro que muestra a la familia real de España y su séquito en el Alcázar de Madrid.",
        "imagen": "https://historia.nationalgeographic.com.es/medio/2020/05/26/escena-central_87210ef1_800x578.jpg"
    },
    {
        "titulo": "La habitación en Arlés",
        "año": "1888",
        "autor": "Vincent van Gogh",
        "descripcion": "Una serie de pinturas que representan la habitación de Van Gogh en la Casa Amarilla en Arlés, Francia.",
        "imagen": "https://museovangogh.org/wp-content/uploads/2021/11/pdvangogh-the-bedroomrob.jpg"
    },
    {
        "titulo": "La niña enferma",
        "año": "1885",
        "autor": "Edvard Munch",
        "descripcion": "Una obra que representa la enfermedad y la fragilidad de la infancia, temas recurrentes en la obra de Munch.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Munch_Det_Syke_Barn_1885-86.jpg"
    },
    {
        "titulo": "Paseo a orillas del mar",
        "año": "1909",
        "autor": "Joaquín Sorolla",
        "descripcion": "Una pintura que captura la belleza de la costa española con su luz brillante y sus colores vibrantes.",
        "imagen": "https://blocdejavier.files.wordpress.com/2012/05/sorolla-paseo-a-orillas-del-mar-1909.jpg"
    },
    {   
        "titulo": "Niña con globo",
        "año": "2002",
        "autor": "Banksy",
        "descripcion": "Una obra icónica de Banksy que muestra a una niña extendiendo la mano hacia un globo en forma de corazón.",
        "imagen": "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNWU5MzMxMzBlNTA2Zi5qcGciLCJyZXNpemUsNjAwLDYwMCJdfQ.W2IhbVcyTjoQ9v85AVLOTC2wVNwBfSkOyNKbCdLpGDM.jpg"
    }
];

// Insertar documentos en la colección
db.pinturas.insertMany(pinturas);

print('Colección "pinturas" creada y documentos insertados exitosamente.');
