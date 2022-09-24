//Declaro un array de objetos donde van a ir las preguntas y respuestas
const baseDatosPreguntas= [
    {
        id:1,
        rubro: 'television',
        pregunta: 'Como se llama el padre de la familia Simpsons',
        imagen: './assets/img/television.jpg',
        respuesta: 'HOMERO',
        otrasOpciones: ['MOE','LENNY','BARNIE']
    },
    {
        id:2,
        rubro: 'television',
        pregunta: 'Como se llama el mejor amigo de Bart',
        imagen: './assets/img/television.jpg',
        respuesta: 'MILHOUSE',
        otrasOpciones: ['MARTY','NELSON','RAFA']
    },
    {
        id:3,
        rubro: 'television',
        pregunta: 'Cuando se estreno Volver al Futuro 2 ',
        imagen: './assets/img/television.jpg',
        respuesta: '1989',
        otrasOpciones: ['1987','1988','1990']
    },
    {
        id:4,
        rubro: 'television',
        pregunta: '¿Cuantas peliculas hay de Harry Potter?',
        imagen: './assets/img/television.jpg',
        respuesta: '8',
        otrasOpciones: ['7','10','4']
    },
    {
        id:5,
        rubro: 'television',
        pregunta: '¿Como se llama el personaje de la foto?',
        imagen: './assets/img/sebastian.jpg',
        respuesta: 'SEBASTIAN',
        otrasOpciones: ['ARIEL','FLANDER','CLOROMIRO']
    },
    {
        id:6,
        rubro: 'television',
        pregunta: '¿Con que instrumento los Addams llamaban a su mayordomo Largo?',
        imagen: './assets/img/television.jpg',
        respuesta: 'CON UN BONG',
        otrasOpciones: ['CON UNA CAMPANA','CON UN TIMBRE','CON UN TELEFONO']
    },
    {
        id:7,
        rubro: 'television',
        pregunta: '¿Quien era el tío de Hugo, Paco y Luis?',
        imagen: './assets/img/television.jpg',
        respuesta: 'PATO DONALD',
        otrasOpciones: ['PATO LUCAS','GOFFY','MICKEY']
    },
    {
        id:8,
        rubro: 'television',
        pregunta: '¿Cual era el arma del Cacique Patoruzú?',
        imagen: './assets/img/television.jpg',
        respuesta: 'BOLEADORAS',
        otrasOpciones: ['PISTOLA','GOMERA','CERBATANA']
    },
    {
        id:9,
        rubro: 'television',
        pregunta: '¿Con que extraño elemento se comunicaba telefonicamente el Super Agente 86?',
        imagen: './assets/img/television.jpg',
        respuesta: 'CON SU ZAPATO',
        otrasOpciones: ['CON SU PARAGUA','CON SU SOMBRERO','CON LOS LENTES']
    },
    {
        id:10,
        rubro: 'television',
        pregunta: '¿Que animal era el maestro de las Tortugas Ninja?',
        imagen: './assets/img/television.jpg',
        respuesta: 'RATA',
        otrasOpciones: ['PERRO','TORTUGA','LIEBRE']
    },
    {
        id:11,
        rubro: 'television',
        pregunta: '¿Como se llama el mayordomo de Batman?',
        imagen: './assets/img/television.jpg',
        respuesta: 'ALFRED',
        otrasOpciones: ['BERNARDO','GUTIERREZ','KATO']
    },
    {
        id:12,
        rubro: 'television',
        pregunta: '¿Como se llama el personaje de la foto?',
        imagen: './assets/img/skeletor.jpg',
        respuesta: 'SKELETOR',
        otrasOpciones: ['MUM-RA','DESTRUCTOR','GARGAMEL']
    },
    {
        id:13,
        rubro: 'television',
        pregunta: '¿Como se llamaba el caballo del Zorro?',
        imagen: './assets/img/television.jpg',
        respuesta: 'TORNADO',
        otrasOpciones: ['SILVER','PAMPERO','RIN TIN TIN']
    },
    {
        id:14,
        rubro: 'television',
        pregunta: '¿Que conductor famoso surgio del programa "Badia y Compañia"?',
        imagen: './assets/img/television.jpg',
        respuesta: 'MARCELO TINNELLI',
        otrasOpciones: ['ROBERTO PETTINATO','MARIO PERGOLINI','GUIDO KACZKA']
    },
    {
        id:15,
        rubro: 'television',
        pregunta: '¿De qué raza era el famoso perro RIN TIN TIN?',
        imagen: './assets/img/television.jpg',
        respuesta: 'PASTOR ALEMAN',
        otrasOpciones: ['DOWERMAN','LABRADOR','DALMATA']
    },
    {
        id:16,
        rubro: 'television',
        pregunta: '¿Cual era la unica forma de Matar al inmortal a Highlander?',
        imagen: './assets/img/television.jpg',
        respuesta: 'DECAPITADO',
        otrasOpciones: ['CON VENENO','BALA DE PLATA','ESTACA EN EL CORAZON']
    },
    {
        id:17,
        rubro: 'television',
        pregunta: '¿Que personaje de la serie "Brigada A" tenia miedo a volar?',
        imagen: './assets/img/television.jpg',
        respuesta: 'MARIO BARACUS',
        otrasOpciones: ['HANNIBAL','MURDOK','FENIX']
    },
    {
        id:18,
        rubro: 'television',
        pregunta: '¿Cual era la familia "ideal" en una serie de TV norteamericana?',
        imagen: './assets/img/television.jpg',
        respuesta: 'FAMILIA INGALLS',
        otrasOpciones: ['LOS SIMPSON','LOS LOCOS ADDAMS','LOS PICAPIEDRAS']
    },
    {
        id:19,
        rubro: 'television',
        pregunta: '¿Quien interpretaba "El Capitan Piluso"?',
        imagen: './assets/img/television.jpg',
        respuesta: 'ALBERTO OLMEDO',
        otrasOpciones: ['JORGE PORCEL','JAVIER PORTALES','JOSE MARRONE']
    },
    {
        id:20,
        rubro: 'television',
        pregunta: '"Los voy a hacer repimporotiar!"¿Que personaje de hijitus utilizaba esta frase?',
        imagen: './assets/img/television.jpg',
        respuesta: 'EL COMISARIO',
        otrasOpciones: ['OAKY','SUPER HIJITUS','NEURUS']
    },
    {
        id:21,
        rubro: 'television',
        pregunta: '¿Que pasaba con GIZMO si se mojaba o comia despues de media noche?',
        imagen: './assets/img/television.jpg',
        respuesta: 'SE REPRODUCIA',
        otrasOpciones: ['SE MORIA','SE ENOJABA','SE PONIA CONTENTO']
    },
    {
        id:22,
        rubro: 'television',
        pregunta: '¿Como se llamaba la serie donde una inteligente perra lograba salvar y ayudar a las personas?',
        imagen: './assets/img/television.jpg',
        respuesta: 'LASSIE',
        otrasOpciones: ['RIN TIN TIN','CHATRAN','BUDDY']
    },
    {
        id:23,
        rubro: 'television',
        pregunta: '¡Hasta la vista Baby!¿De que personaje es esta frase?',
        imagen: './assets/img/television.jpg',
        respuesta: 'TERMINATOR',
        otrasOpciones: ['ROBOCOP','OPTIMUS PRIME','MARTILLO HAMMER']
    },
    {
        id:24,
        rubro: 'television',
        pregunta: 'Segun una novela "El amor tiene cara..."¿De qué?',
        imagen: './assets/img/television.jpg',
        respuesta: 'DE MUJER',
        otrasOpciones: ['DE HOMBRE','DE BOBO','DE TI']
    },
    {
        id:25,
        rubro: 'television',
        pregunta: '¿Que altero el organismo del DR David Banner?',
        imagen: './assets/img/television.jpg',
        respuesta: 'RAYOS GAMA',
        otrasOpciones: ['LA ESPINACA','UNA PASTILLA','KRYPTONITA']
    },
    {
        id:26,
        rubro: 'television',
        pregunta: '¿Que palabra decia Carlitos Balá al poner la mano en tu cabeza?',
        imagen: './assets/img/television.jpg',
        respuesta: 'SUNGUTRULE',
        otrasOpciones: ['EA EA PE PE ','ANGUETO','ESTA CARGADO']
    },
    {
        id:27,
        rubro: 'television',
        pregunta: '¿Que podia hacer ET cuando se le iluiminaba el dedo?',
        imagen: './assets/img/television.jpg',
        respuesta: 'CURAR',
        otrasOpciones: ['LLAMAR A SU CASA','VER EN LA OSCURIDAD','COMINICARSE']
    },
    {
        id:28,
        rubro: 'television',
        pregunta: '¿Como se llamaba la mujer de Rocky Balboa?',
        imagen: './assets/img/television.jpg',
        respuesta: 'ADRIANA',
        otrasOpciones: ['SUSANA','JUANA','MARIANA']
    },
    {
        id:29,
        rubro: 'television',
        pregunta: '¿Quien se metia en los sueños para intentar asesinarte?',
        imagen: './assets/img/television.jpg',
        respuesta: 'FREDDY KRUEGER',
        otrasOpciones: ['JASON','RICK Y MORTY','SCREAM']
    },
    {
        id:30,
        rubro: 'television',
        pregunta: '¿Que reconocida mujer del espectaculo surgio a partir de una publicidad de jabon?',
        imagen: './assets/img/television.jpg',
        respuesta: 'SUSANA GIMENEZ',
        otrasOpciones: ['MORIA CASAN','NACHA GUEVARA','BEATRIZ SALOMON']
    },
    {
        id:31,
        rubro: 'television',
        pregunta: '¿Como se llamaba el tio peludo de los LOCOS ADDAMS?',
        imagen: './assets/img/television.jpg',
        respuesta: 'TIO COSA',
        otrasOpciones: ['TIO PELUDO','TIO LUCAS','TIO RICO']
    },
    {
        id:32,
        rubro: 'television',
        pregunta: '¿Como se llamaba el perro de Hijitus?',
        imagen: './assets/img/television.jpg',
        respuesta: 'PICHICHUS',
        otrasOpciones: ['FIRULAIS','MILU','PONGO']
    },
    {
        id:33,
        rubro: 'television',
        pregunta: '¿Como se llamaba el amigo fantasma de He-Man?',
        imagen: './assets/img/television.jpg',
        respuesta: 'ORKO',
        otrasOpciones: ['PEGAJOSO','CASPER','GHOST']
    },
    {
        id:34,
        rubro: 'television',
        pregunta: '¿Cual era la profesion de Indiana Jones?',
        imagen: './assets/img/television.jpg',
        respuesta: 'ARQUEOLOGO',
        otrasOpciones: ['PALEONTOLOGO','FISICO','GEOLOGO']
    },
    {
        id:35,
        rubro: 'television',
        pregunta: '¿Por donde ingresaban a su vehiculo los Duques de Hazzard ?',
        imagen: './assets/img/television.jpg',
        respuesta: 'POR LA VENTANILLA',
        otrasOpciones: ['POR EL BAUL','POR EL TECHO','POR LA PUERTA DE ATRAS']
    },
    {
        id:36,
        rubro: 'television',
        pregunta: '¿Como se llamaba el perro de Pierre Nodoyuna en los "Autos Locos"?',
        imagen: './assets/img/television.jpg',
        respuesta: 'PATAN',
        otrasOpciones: ['MILO','CORAJE','SIMON']
    },
    {
        id:37,
        rubro: 'television',
        pregunta: '¿Cual es el nombre de Will Smith en la pelicula "Hombres de Negro"?',
        imagen: './assets/img/television.jpg',
        respuesta: 'J',
        otrasOpciones: ['K','Z','R']
    },
    {
        id:38,
        rubro: 'television',
        pregunta: '¿Cual es la comida preferida de la Tortugas Ninja?',
        imagen: './assets/img/television.jpg',
        respuesta: 'PIZZA',
        otrasOpciones: ['PANCHO','HAMBURGUESAS','DONAS']
    },
    {
        id:39,
        rubro: 'television',
        pregunta: '¿Cuantos Pitufos Mujeres vivian en la aldea de los Pitufos?',
        imagen: './assets/img/television.jpg',
        respuesta: '1',
        otrasOpciones: ['2','3','NINGUNA']
    },
    {
        id:40,
        rubro: 'television',
        pregunta: '¿de que planeta llego ALF?',
        imagen: './assets/img/television.jpg',
        respuesta: 'MELMAC',
        otrasOpciones: ['ORK','MARTE','JUPITER']
    },

    {
        id:1000,
        rubro: 'arte',
        pregunta: 'Quien es el de la foto',
        imagen: './assets/img/picasso.jpg',
        respuesta: 'PABLO PICASSO',
        otrasOpciones: ['JOAN MIRÓ','CLAUDE MONET','ANTONIO BERNI']
    },
    {
        id:1001,
        rubro: 'arte',
        pregunta: '¿Cuantas cuerdas tiene un Arpa ',
        imagen: './assets/img/arte.jpg',
        respuesta: '47',
        otrasOpciones: ['36','42','50']
    },
    {
        id:1002,
        rubro: 'arte',
        pregunta: 'Segun la cancion de la "MONA JIMENEZ",¿Se tomaron todo...? ',
        imagen: './assets/img/arte.jpg',
        respuesta: 'EL VINO',
        otrasOpciones: ['EL CAFE','EL FERNET','EL WHISKY']
    },
    {
        id:1003,
        rubro: 'arte',
        pregunta: '¿Cuantos hijos tuvo el compositor SEBASTIAN BACH? ',
        imagen: './assets/img/arte.jpg',
        respuesta: '20 HIJOS',
        otrasOpciones: ['14 HIJOS','7 HIJOS','NINGUNO']
    },
    {
        id:1004,
        rubro: 'arte',
        pregunta: '¿Que grupo de Rock cantaba "Mejor no hablar de ciertas cosas"',
        imagen: './assets/img/arte.jpg',
        respuesta: 'SUMO',
        otrasOpciones: ['SODA ESTEREO','VIRUS','DIVIDIDOS']
    },
    { 
        id:1005,
        rubro: 'arte',
        pregunta: '¿Que instrumentos fabricaba Antonio Stradivarius?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'VIOLINES',
        otrasOpciones: ['PIANOS','GUITARRAS','CONTRABAJOS']
    },
    {
        id:1006,
        rubro: 'arte',
        pregunta: '¿Que grupo de musica fue autor de "La Biblia"?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'VOX DEI',
        otrasOpciones: ['SERU GIRAN','SUI GENERIS','SUMO']
    },
    {
        id:1007,
        rubro: 'arte',
        pregunta: '¿Donde esta el primer teatro del Mundo?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'ARLES',
        otrasOpciones: ['NAPOLES','ATENAS','ROMA']
    },
    {
        id:1008,
        rubro: 'arte',
        pregunta: '¿cual fue la obra mas importante de Frida Kahlo?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'LAS DOS FRIDAS',
        otrasOpciones: ['DIEGO Y YO','LAS FLORES Y LA UNICEJA','AUTORRETRATO CON TERCIOPELO']
    },
    {
        id:1009,
        rubro: 'arte',
        pregunta: '¿Que se le Perdio a Silvio Rodriguez?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'UN UNICORNIO AZUL',
        otrasOpciones: ['LA MEMORIA','UN ELEFANTE ROSA','LA MUJER']
    },
    {
        id:1010,
        rubro: 'arte',
        pregunta: '¿De que pais es originario el grupo "U2"?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'IRLANDA',
        otrasOpciones: ['SUECIA','INGLATERRA','SUIZA']
    },
    {
        id:1011,
        rubro: 'arte',
        pregunta: 'Charly Garcia no va en tren, ¿En que viajaba?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'EN AVION',
        otrasOpciones: ['EN AUTO','EN MOTO','EN BICICLETA']
    },
    {
        id:1012,
        rubro: 'arte',
        pregunta: 'De quien es la cancion "Y nos dieron las 10"',
        imagen: './assets/img/arte.jpg',
        respuesta: 'JOAQUIN SABINA',
        otrasOpciones: ['JOAN MANUEL SERRAT','SILVIO RODRIGUEZ','SANDRO']
    },
    {
        id:1013,
        rubro: 'arte',
        pregunta: '¿De que pais es originario el grupo "Led Zeppelin"?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'INGLATERRA',
        otrasOpciones: ['SUECIA','IRLANDA','SUIZA']
    },

    {
        id:2000,
        rubro: 'geografia',
        pregunta: '¿cual es la montaña mas alta del mundo?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'EVEREST',
        otrasOpciones: ['ACONCAGUA','KILIMANJARO','ELBRUS']
    },
    {
        id:2001,
        rubro: 'geografia',
        pregunta: '¿Que longitud tiene la Gran Muralla China ',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'MAS DE 6000KM',
        otrasOpciones: ['ALREDEDOR DE 2000KM','ALREDEDOR DE 4000KM','ALREDEDOR DE 5000KM']
    },
    {
        id:2002,
        rubro: 'geografia',
        pregunta: '¿Cuantos rios hay en Arabia Saudita? ',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'NINGUNO',
        otrasOpciones: ['UNO','DOS','CINCO']
    },
    {
        id:2003,
        rubro: 'geografia',
        pregunta: '¿Cual es el idioma mas hablado del mundo?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'CHINO',
        otrasOpciones: ['INGLES','ESPAÑOL','PORTUGUES']
    },
    {
        id:2004,
        rubro: 'geografia',
        pregunta: '¿A que pais pertenece la Isla de Pascua ',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'CHILE',
        otrasOpciones: ['PERU','COLOMBIA','VENEZUELA']
    }, 
    {
        id:2005,
        rubro: 'geografia',
        pregunta: '¿Que colores tiene la bandera de Italia ',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'VERDE, BLANCO, ROJO',
        otrasOpciones: ['AZUL,BLANCO, ROJO','ROJO, BANCO, ROJO','VERDE,BLANCO,VERDE']
    },
    {
        id:2006,
        rubro: 'geografia',
        pregunta: '¿Que pais es el segundo mas poblado del mundo?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'INDIA',
        otrasOpciones: ['CHINA','JAPON','RUSIA']
    },
    {
        id:2007,
        rubro: 'geografia',
        pregunta: '¿En que continente se encuentra el pais BUTAN?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'ASIA',
        otrasOpciones: ['OCEANIA','AFRICA','EUROPA']
    },
    {
        id:2008,
        rubro: 'geografia',
        pregunta: '¿Cual es el rio mas largo del Mundo?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'AMAZONA',
        otrasOpciones: ['NILO','MISISIPI','CONGO']
    },
    {
        id:3000,
        rubro:'ciencia',
        pregunta: '¿Que elemento de la tabla periodica representa la foto: ',
        imagen: './assets/img/azufre.jpg',
        respuesta: 'AZUFRE',
        otrasOpciones: ['SELENIO','SILICIO','ARSENIO']
    },
    {
        id:3001,
        rubro:'ciencia',
        pregunta: '¿Cual es el planeta mas lejano al sol en nuestro Sistema Solar?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'PLUTON',
        otrasOpciones: ['JUPITER','SATURNO','MERCURIO']
    },
    {
        id:3002,
        rubro:'ciencia',
        pregunta: '¿Que elemento se utiliza en el interior de los termometros? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'MERCURIO',
        otrasOpciones: ['PLUTONIO','KRYPTONITA','AZUFRE']
    },
    {
        id:4000,
        rubro: 'deportes',
        pregunta: '¿Cuantos jugadores tiene un equipo de béisbol ',
        imagen: './assets/img/deporte.jpg',
        respuesta: '9',
        otrasOpciones: ['11','7','13']
    },
    {
        id:4001,
        rubro: 'deportes',
        pregunta: '¿Que seleccion de futbol usa camiseta de color anaranjado? ',
        imagen: './assets/img/deporte.jpg',
        respuesta: 'HOLANDA',
        otrasOpciones: ['BELGICA','NIGERIA','SUECIA']
    },
    {
        id:4002,
        rubro: 'deportes',
        pregunta: '¿Cual es el deporte mas practicado en Canadá? ',
        imagen: './assets/img/deporte.jpg',
        respuesta: 'NATACION',
        otrasOpciones: ['HOCKEY SOBRE HIELO','ATLETISMO','GOLF']
    },
    {
        id:4003,
        rubro: 'deportes',
        pregunta: '¿Contra quien jugo la final Argentina en el mundial de 1978? ',
        imagen: './assets/img/deporte.jpg',
        respuesta: 'HOLANDA',
        otrasOpciones: ['BRASIL','ITALIA','FRANCIA']
    },
    {
        id:4004,
        rubro: 'deportes',
        pregunta: '¿Cual fue el mayor puesto del ranking mundial que alcanzo la tenista Gabiela Sabattini? ',
        imagen: './assets/img/deporte.jpg',
        respuesta: 'TERCERO',
        otrasOpciones: ['PRIMERO','SEGUNDO','QUINTA']
    },
    {
        id:4005,
        rubro: 'deportes',
        pregunta: '¿A que se dedicaba Daniel Scioli antes de incursiona en la Politica? ',
        imagen: './assets/img/deporte.jpg',
        respuesta: 'CORREDOR DE LANCHAS',
        otrasOpciones: ['GOLF','AUTOMIVILISMO','JOCKEY']
    },
    {
        id:4006,
        rubro: 'deportes',
        pregunta: '¿En que incursiono Guillermo Vilas, luego de dejar el Tenis? ',
        imagen: './assets/img/deporte.jpg',
        respuesta: 'MUSICA',
        otrasOpciones: ['TEATRO','AUTOMIVILISMO','GOLF']
    },
    {
        id:4007,
        rubro: 'deportes',
        pregunta: '¿Como era el apodo de Mario Alberto Kempes? ',
        imagen: './assets/img/deporte.jpg',
        respuesta: 'EL MATADOR',
        otrasOpciones: ['EL FLACO','LA MAQUINA','EL IMPARABLE']
    },
    {
        id:5000,
        rubro: 'historia',
        pregunta: '¿Que emperador romano comandó "la Guerra de  las Galias"? ',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'JULIO CESAR',
        otrasOpciones: ['NERON','MARCO AURELIO','NERVA']
    },
    {
        id:5001,
        rubro: 'historia',
        pregunta: '¿Que personaje utilizaba sus flechas con fines amorosos"? ',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'CUPIDO',
        otrasOpciones: ['ROBIN HOOD','FLECHA VERDE','OJO DE ALCÓN']
    },
    {
        id:5002,
        rubro: 'historia',
        pregunta: '¿Como murió Adolf Hitler? ',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'SE SUICIDO EN SU BUNKER',
        otrasOpciones: ['LO ASESINARON SUS OFICIALES','LO ENVENENARON','TUVO UN ACCIDENTE']
    },
    {
        id:5003,
        rubro: 'historia',
        pregunta: '¿Que cantidad de Muertes provocó la Segunda Guerra Mundial? ',
        imagen: './assets/img/Historia.jpg',
        respuesta: '55 MILLONES',
        otrasOpciones: ['27 MILLONES','35 MILLONES','10 MILLONES']
    },
    {
        id:5004,
        rubro: 'historia',
        pregunta: '¿Quien era el Dios del Amor segun la mitologia Griega? ',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'EROS',
        otrasOpciones: ['CUPIDO','VENUS','ZEUS']
    },
    {
        id:5005,
        rubro: 'historia',
        pregunta: 'El Emperador Caligula nombro cónsul a un animal, ¿a cual? ',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'A SU CABALLO',
        otrasOpciones: ['A SU PERRO','A SU GATO','A SU LORO']
    },
    {
        id:5006,
        rubro: 'historia',
        pregunta: '¿En que año inicio la primera Guerra Mundial?',
        imagen: './assets/img/Historia.jpg',
        respuesta: '1914',
        otrasOpciones: ['1918','1912','1917']
    },
    {
        id:5007,
        rubro: 'historia',
        pregunta: 'En que año el hombre piso la luna por primera vez',
        imagen: './assets/img/Historia.jpg',
        respuesta: '1969',
        otrasOpciones: ['1965','1986','1973']
    },
    {
        id:5008,
        rubro: 'historia',
        pregunta: '¿cuantos años vivio la persona mas vieja del mundo?',
        imagen: './assets/img/Historia.jpg',
        respuesta: '128 AÑOS',
        otrasOpciones: ['125 AÑOS','133 AÑOS','119 AÑOS']
    },
    {
        id:5009,
        rubro: 'historia',
        pregunta: '¿quien invento el secador de pelo?',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'ALEXANDRE GODEFOY',
        otrasOpciones: ['LEONARDO DA VINCI','ALBERT EINSTEIN','JACOB SCHICK']
    },
    {
        id:5010,
        rubro: 'historia',
        pregunta: '¿En que año Argentina vuelve a la democracia?',
        imagen: './assets/img/Historia.jpg',
        respuesta: '1983',
        otrasOpciones: ['1979','1984','1989']
    },
    {
        id:5011,
        rubro: 'historia',
        pregunta: '¿En que año falleció Juan Domingo Peron?',
        imagen: './assets/img/Historia.jpg',
        respuesta: '1974',
        otrasOpciones: ['1973','1976','1978']
    },

    {
        id:6000,
        rubro: 'general',
        pregunta: 'Que marca de auto es: ',
        imagen: './assets/img/mercedes.jpg',
        respuesta: 'MERCEDES BENZ',
        otrasOpciones: ['ALPHA ROMEO','ASTON MARTIN','FERRARI']
    },
    {
        id:6001,
        rubro: 'general',
        pregunta: 'Cual aparecio primero: ',
        imagen: './assets/img/redesSociales.jpg',
        respuesta: 'LINKEDIN',
        otrasOpciones: ['FACEBOOK','WHATSAPP','TWITTER']
    },
    {
        id:6002,
        rubro: 'general',
        pregunta: '¿Como se llama al espiritu que puede mover y romper objetos ',
        imagen: './assets/img/fantasma.jpg',
        respuesta: 'POLSTERGEIST',
        otrasOpciones: ['MANDINGA','CUCO','CHOCARRERO']
    }
]