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
        "titulo": "Guernica",
        "autor": "Pablo Picasso",
        "anio_creacion": 1937,
        "descripcion": "Pintura que muestra el bombardeo de la ciudad de Guernica durante la Guerra Civil Española.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pablo_Picasso%2C_1937%2C_Guernica_%28Museo_Reina_Sofia%2C_Madrid%29.jpg/800px-Pablo_Picasso%2C_1937%2C_Guernica_%28Museo_Reina_Sofia%2C_Madrid%29.jpg"
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
        "imagen": "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/The_Persistence_of_Memory.jpg/800px-The_Persistence_of_Memory.jpg"
    },
    {
        "titulo": "La última cena",
        "autor": "Leonardo da Vinci",
        "anio_creacion": 1498,
        "descripcion": "Representación del último momento de Jesús con sus apóstoles antes de su crucifixión.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Leonardo_da_Vinci_-_Last_Supper_high_res.jpg/800px-Leonardo_da_Vinci_-_Last_Supper_high_res.jpg"
    },
    {
        "titulo": "La joven de la perla",
        "autor": "Johannes Vermeer",
        "anio_creacion": 1665,
        "descripcion": "Pintura de una joven sosteniendo una perla, con una expresión enigmática.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg"
    },
    {
        "titulo": "No. 5, 1948",
        "autor": "Jackson Pollock",
        "anio_creacion": 1948,
        "descripcion": "Pintura abstracta, famosa por su técnica de goteo de pintura.",
        "imagen": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/No._5%2C_1948.jpg/800px-No._5%2C_1948.jpg"
    },
    {
        "titulo": "La creación de Adán",
        "autor": "Michelangelo",
        "anio_creacion": 1512,
        "descripcion": "Fresco que representa la creación de Adán en el techo de la Capilla Sixtina.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Michelangelo%27s_%22Creation_of_Adam%22.jpg/800px-Michelangelo%27s_%22Creation_of_Adam%22.jpg"
    },
    {
        "titulo": "Los jugadores de cartas",
        "autor": "Paul Cézanne",
        "anio_creacion": 1892,
        "descripcion": "Serie de pinturas que representan a hombres jugando cartas en una mesa.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Paul_C%C3%A9zanne_199.jpg/800px-Paul_C%C3%A9zanne_199.jpg"
    },
    {
        "titulo": "La persistencia de la memoria",
        "autor": "Salvador Dalí",
        "anio_creacion": 1931,
        "descripcion": "Cuadro surrealista con relojes blandos en un paisaje desértico.",
        "imagen": "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/The_Persistence_of_Memory.jpg/800px-The_Persistence_of_Memory.jpg"
    },
    {
        "titulo": "La noche estrellada sobre el Ródano",
        "autor": "Vincent van Gogh",
        "anio_creacion": 1888,
        "descripcion": "Otra versión de la pintura de Van Gogh, muestra el río Ródano en Arlés.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    },
    {
        "titulo": "El nacimiento de Venus",
        "autor": "Sandro Botticelli",
        "anio_creacion": 1486,
        "descripcion": "Pintura que representa el nacimiento de la diosa Venus en una concha marina.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Botticelli-primavera.jpg/800px-Botticelli-primavera.jpg"
    },
    {
        "titulo": "El pensador",
        "autor": "Auguste Rodin",
        "anio_creacion": 1902,
        "descripcion": "Escultura de un hombre pensativo en una pose meditativa.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/The_Thinker%2C_Rodin.jpg/800px-The_Thinker%2C_Rodin.jpg"
    },
    {
        "titulo": "El beso",
        "autor": "Gustav Klimt",
        "anio_creacion": 1907,
        "descripcion": "Pintura que muestra a una pareja abrazándose y fundiéndose en un beso apasionado.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gustav_Klimt_-_The_Kiss_%28Google_Art_Project%29.jpg/800px-Gustav_Klimt_-_The_Kiss_%28Google_Art_Project%29.jpg"
    },
    {
        "titulo": "Las Meninas",
        "autor": "Diego Velázquez",
        "anio_creacion": 1656,
        "descripcion": "Cuadro que muestra a la familia real de España y su séquito en el Alcázar de Madrid.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas_01.jpg/800px-Las_Meninas_01.jpg"
    },
    {
        "titulo": "El Gernika",
        "autor": "Pablo Picasso",
        "anio_creacion": 1937,
        "descripcion": "La obra, conocida mundialmente, fue realizada por Pablo Picasso y terminada el 4 de junio de 1937.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pablo_Picasso%2C_1937%2C_Guernica_%28Museo_Reina_Sofia%2C_Madrid%29.jpg/800px-Pablo_Picasso%2C_1937%2C_Guernica_%28Museo_Reina_Sofia%2C_Madrid%29.jpg"
    },
    {
        "titulo": "El beso",
        "autor": "Gustav Klimt",
        "anio_creacion": 1908,
        "descripcion": "Una de las obras maestras de Klimt, que representa el amor y la intimidad.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gustav_Klimt_-_The_Kiss_%28Google_Art_Project%29.jpg/800px-Gustav_Klimt_-_The_Kiss_%28Google_Art_Project%29.jpg"
    },
    {
        "titulo": "La creación de Adán",
        "autor": "Michelangelo",
        "anio_creacion": 1511,
        "descripcion": "Una de las obras más famosas de Miguel Ángel, representa la creación de Adán.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Michelangelo%27s_%22Creation_of_Adam%22.jpg/800px-Michelangelo%27s_%22Creation_of_Adam%22.jpg"
    },
    {
        "titulo": "La joven de la perla",
        "autor": "Johannes Vermeer",
        "anio_creacion": 1665,
        "descripcion": "Una de las obras más conocidas de Vermeer, muestra una joven con una perla en la oreja.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg"
    },
    {
        "titulo": "La noche estrellada",
        "autor": "Vincent van Gogh",
        "anio_creacion": 1889,
        "descripcion": "Una de las pinturas más famosas de Van Gogh, muestra un cielo nocturno turbulento.",
        "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    }
];

// Insertar documentos en la colección
db.pinturas.insertMany(pinturas);

print('Colección "pinturas" creada y documentos insertados exitosamente.');
