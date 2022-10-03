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
        pregunta: '¿Que alteró el organismo del DR David Banner?',
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
        otrasOpciones: ['LLAMAR A SU CASA','VER EN LA OSCURIDAD','COMUNICARSE']
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
        id:41,
        rubro: 'television',
        pregunta: '¿En que pelicula Cameron diaz hace perder la cabeza a Jim Carrey?',
        imagen: './assets/img/television.jpg',
        respuesta: 'LA MASCARA',
        otrasOpciones: ['ACE VENTURA','MENTIROSO MENTIROSO','DICK Y JANE']
    },
    {
        id:42,
        rubro: 'television',
        pregunta: '¿En que pelicula Al Pacino baila un tango?',
        imagen: './assets/img/television.jpg',
        respuesta: 'PERFUME DE MUJER',
        otrasOpciones: ['SCARFACE','EL PADRINO','EL IRLANDES']
    },
    {
        id:43,
        rubro: 'television',
        pregunta: '¿Que famosa actriz se desnuda en la pelicula "Striptease"?',
        imagen: './assets/img/television.jpg',
        respuesta: 'DEMI MOORE',
        otrasOpciones: ['CAMERON DIAZ','KIM BASINGER','SHARON STONE']
    },
    {
        id:44,
        rubro: 'television',
        pregunta: '¿Quien es Duro de Matar?',
        imagen: './assets/img/television.jpg',
        respuesta: 'BRUCE WILLIS',
        otrasOpciones: ['SYLVESTER STALLONE','VAN DAMME','SCHWARZENEGGER']
    },
    {
        id:45,
        rubro: 'television',
        pregunta: '¿Quien interpreta al Acertijo en "Batman Forever"?',
        imagen: './assets/img/television.jpg',
        respuesta: 'JIM CARREY',
        otrasOpciones: ['JACK NICOLSON','TOMMY LEE JONES','SCHWARZENEGGER']
    },
    {
        id:46,
        rubro: 'television',
        pregunta: '¿Como se llama el perro de tintin?',
        imagen: './assets/img/television.jpg',
        respuesta: 'MILU',
        otrasOpciones: ['ASTRO','DINO','FIRU']
    },
    {
        id:47,
        rubro: 'television',
        pregunta: '¿Como se llama el Gato del malo de los Pitufos?',
        imagen: './assets/img/television.jpg',
        respuesta: 'ASRAEL',
        otrasOpciones: ['ASMAL','GARGAMEL','GATURRO']
    },
    {
        id:48,
        rubro: 'television',
        pregunta: '¿De que origen era Tony, el personaje de Al Pacino en "Scarface"?',
        imagen: './assets/img/television.jpg',
        respuesta: 'CUBANO',
        otrasOpciones: ['COLOMBIANO','ITALIANO','FRANCES']
    },
    {
        id:49,
        rubro: 'television',
        pregunta: '¿A quien cuida Jon Bonachon?',
        imagen: './assets/img/television.jpg',
        respuesta: 'GARFIELD',
        otrasOpciones: ['SILVESTRE','TOM','GATURRO']
    },
    {
        id:50,
        rubro: 'television',
        pregunta: '¿Que animal era el personaje de la serie "Flipper"?',
        imagen: './assets/img/television.jpg',
        respuesta: 'DELFIN',
        otrasOpciones: ['ORCA','BALLENA','FOCA']
    },
    {
        id:51,
        rubro: 'television',
        pregunta: '¿Quién creó las películas "La quimera del oro" y "Luces de la ciudad"?',
        imagen: './assets/img/television.jpg',
        respuesta: 'CHARLES CHAPLIN',
        otrasOpciones: ['STANLEY KUBRICK','ALFRED HITCHCOCK','BUSTER KEATON']
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
        pregunta: '¿Cual fue la obra mas importante de Frida Kahlo?',
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
        id:1014,
        rubro: 'arte',
        pregunta: '¿Donde nacio el Bolero?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'CUBA',
        otrasOpciones: ['PUERTO RICO','MEXICO','VENEZUELA']
    },
    {
        id:1015,
        rubro: 'arte',
        pregunta: 'En que pais nacio Luis Miguel"?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'PUERTO RICO',
        otrasOpciones: ['MEXICO','PANAMA','COSTA RICA']
    },
    {
        id:1016,
        rubro: 'arte',
        pregunta: 'En la opera de Verdi ¿Aída era una...?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'ESCLAVA',
        otrasOpciones: ['PRINCESA','SIRVIENTE','REINA']
    },
    {
        id:1017,
        rubro: 'arte',
        pregunta: '¿Con que nombre es mas conocida la pintura a base de poliester?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'ACRILICO',
        otrasOpciones: ['PASTEL','OLEO','TEMPERA']
    },
    {
        id:1018,
        rubro: 'arte',
        pregunta: '¿Con que famoso pintor estuvo casada Frida Kahlo?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'DIEGO RIVERA',
        otrasOpciones: ['PABLO PICASSO','DAVID SIQUEIROS','SALVADOR DALI']
    },
    {
        id:1019,
        rubro: 'arte',
        pregunta: '¿Cual fue el ultimo tango que canto Gardel?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'TOMO Y OBLIGO',
        otrasOpciones: ['ADIOS MUCHACHOS','MELODIA DE ARRABAL','POR UNA CABEZA']
    },
    {
        id:1020,
        rubro: 'arte',
        pregunta: '¿En que provincia Argentina nació Mercedes Sosa?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'TUCUMAN',
        otrasOpciones: ['SANTIAGO DEL ESTERO','SALTA','BUENOS AIRES']
    },
    {
        id:1021,
        rubro: 'arte',
        pregunta: '¿Quien pinto la Gioconda con Bigotes?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'MARCEL DUCHAMP',
        otrasOpciones: ['PABLO PICASSO','ANDY WARHOL','SALVADOR DALI']
    },
    {
        id:1022,
        rubro: 'arte',
        pregunta: ' En 1972 un loco averió a martillazos una inmortal escultura de Miguel Angel ¿Cual?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'LA PIEDAD',
        otrasOpciones: ['EL DAVID','EL MOISES','ESCLAVO REBELDE']
    },
    {
        id:1023,
        rubro: 'arte',
        pregunta: '¿Para que instrumento es la sonata "Appassionata" de Beethoven?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'PIANO',
        otrasOpciones: ['VIOLIN','CELLO','CLARINETE']
    },
    {
        id:1024,
        rubro: 'arte',
        pregunta: '¿Cuantos versos tiene un soneto?',
        imagen: './assets/img/arte.jpg',
        respuesta: '14',
        otrasOpciones: ['18','20','26']
    },
    {
        id:1025,
        rubro: 'arte',
        pregunta: '¿Donde se cayo la novia de "Los Fabulosos Cadillacs "?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'A UN POZO CIEGO',
        otrasOpciones: ['EN LA CALLE','AL PRECIPICIO','AL AGUA']
    },
    {
        id:1026,
        rubro: 'arte',
        pregunta: '¿Cual es el primer tema que grabaron Los Gatos, la banda de Lito Nebia?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'LA BALSA',
        otrasOpciones: ['REBELDE','AYER NOMAS','EL REY LLORO']
    },
    {
        id:1027,
        rubro: 'arte',
        pregunta: '¿En que pais esta la mayor coleccion de obras de Picasso?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'FRANCIA',
        otrasOpciones: ['ESPAÑA','ITALIA','EE UU']
    },
    {
        id:1028,
        rubro: 'arte',
        pregunta: '¿Que genero musical se considera que deriba del Rag-time?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'EL JAZZ',
        otrasOpciones: ['EL REGGAE','EL BOSANOVA','EL CHARLESTON']
    },
    {
        id:1029,
        rubro: 'arte',
        pregunta: '¿Cual es el primer libro del Antiguo testamento?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'GENESIS',
        otrasOpciones: ['EXODO','LEVITICO','APOCALIPSIS']
    },
    {
        id:1030,
        rubro: 'arte',
        pregunta: '¿Que obra de Shakespeare transcurre en Verona?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'ROMEO Y JULIETA',
        otrasOpciones: ['OTELO','EL REY LEAR','LA TEMPESTAD']
    },
    {
        id:1031,
        rubro: 'arte',
        pregunta: '¿De que origen era el pintor Rembrandt?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'HOLANDES',
        otrasOpciones: ['BELGA','FRANCES','ITALIANO']
    },
    {
        id:1032,
        rubro: 'arte',
        pregunta: '¿Cuantas eran, en una novela de Julio Verne, las leguas de viaje submarino ?',
        imagen: './assets/img/arte.jpg',
        respuesta: '20 MIL',
        otrasOpciones: ['30 MIL','10 MIL','5 MIL']
    },
    {
        id:1033,
        rubro: 'arte',
        pregunta: '¿A que edad murio Elvis Presley?',
        imagen: './assets/img/arte.jpg',
        respuesta: '42 AÑOS',
        otrasOpciones: ['32 AÑOS','28 AÑOS','40 AÑOS']
    },
    {
        id:1034,
        rubro: 'arte',
        pregunta: '¿En que Ciudad murio Manuel de Falla?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'ALTA GRACIA',
        otrasOpciones: ['MENDOZA','SEVILLA','BS AS']
    },
    {
        id:1035,
        rubro: 'arte',
        pregunta: '¿El "Kama Sutra" es de origen...?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'HINDU',
        otrasOpciones: ['PERSA','CHINO','JAPONES']
    },
    {
        id:1036,
        rubro: 'arte',
        pregunta: '¿Quienes crearon "El ritual de la banana"?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'LOS PERICOS',
        otrasOpciones: ['PARALAMAS','FABULOSOS CADILLACS','CALIGARIS']
    },
    {
        id:1037,
        rubro: 'arte',
        pregunta: 'En Musica ¿A cuantas blancas equivale una redonda?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'A DOS',
        otrasOpciones: ['A UNA','A CUATRO','A OCHO']
    },
    {
        id:1038,
        rubro: 'arte',
        pregunta: '¿Cuantas cuerdas tiene la bandurria?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'DOCE',
        otrasOpciones: ['OCHO','SEIS','DIEZ']
    },
    {
        id:1039,
        rubro: 'arte',
        pregunta: '¿Que famoso escritor argentino nacio en Belgica?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'JULIO CORTAZAR',
        otrasOpciones: ['ERNESTO SABATO','JORGE LUIS BORGES','ADOLFO BIOY CASARES']
    },
    {
        id:1040,
        rubro: 'arte',
        pregunta: '¿Segun Mario Benedetti, "en la calle codo a codo somos mucho mas que..."?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'QUE DOS',
        otrasOpciones: ['QUE DIOS','QUE EL SOL','QUE YO']
    },
    {
        id:1041,
        rubro: 'arte',
        pregunta: '¿Que instrumento sabia tocar Julio Cortázar?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'LA TROMPETA',
        otrasOpciones: ['LA GUITARRA','EL PIANO','EL BANDONEON']
    },
    {
        id:1042,
        rubro: 'arte',
        pregunta: '¿Pappo advierte que nadie se atreva a tocar a su...?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'SU VIEJA',
        otrasOpciones: ['SU AUTO','SU GUITARRA','SU NOVIA']
    },
    {
        id:1043,
        rubro: 'arte',
        pregunta: '¿Que musico argentino hizo una cancion usando solamente palabras con la vocal "O"?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'LEON GIECO',
        otrasOpciones: ['IGNACIO COPANI','HORACIO FONTOVA','HUGO VARELA']
    },
    {
        id:1044,
        rubro: 'arte',
        pregunta: '¿Quien escribio el "Apocalipsis"?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'SAN JUAN',
        otrasOpciones: ['JESUS','SAN MATEO','SAN LUCAS']
    },
    {
        id:1045,
        rubro: 'arte',
        pregunta: '¿Cuantas novelas escribió Jorge Luis Borges?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'NINGUNA',
        otrasOpciones: ['UNA','DOS','CINCO']
    },
    {
        id:1046,
        rubro: 'arte',
        pregunta: 'EL pintor Utrillo, ¿era..?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'FRANCES',
        otrasOpciones: ['ESPAÑOL','MEXICANO','ITALIANO']
    },
    {
        id:1047,
        rubro: 'arte',
        pregunta: '¿Que incapacidad tiene el cantante Jose Feliciano?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'ES CIEGO',
        otrasOpciones: ['ES SORDO','ES PARALITICO','ES MUDO']
    },
    {
        id:1048,
        rubro: 'arte',
        pregunta: '¿Que legendaria estrella del Rock fallecio el 16 de agosto de 1977?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'ELVIS PRESLEY',
        otrasOpciones: ['JANIS JOPLIN','JONH LENNON','FREDDY MERCURY']
    },
    {
        id:1049,
        rubro: 'arte',
        pregunta: '¿Cuantas llaves tiene una trompeta?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'TRES',
        otrasOpciones: ['CINCO','OCHO','NINGUNA']
    },
    {
        id:1050,
        rubro: 'arte',
        pregunta: '¿Cuantas veces fue robada del Louvre "La Gioconda"?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'UNA',
        otrasOpciones: ['DOS','TRES','NINGUNA']
    },
    {
        id:1051,
        rubro: 'arte',
        pregunta: 'El autor de la Odisea también escribió:',
        imagen: './assets/img/arte.jpg',
        respuesta: 'ILÍADA',
        otrasOpciones: ['HEROIDES','CANDIDE','ENEIDA']
    },
    {
        id:1052,
        rubro: 'arte',
        pregunta: '¿Cuál es un tipo de poesía japonesa?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'HAIKU',
        otrasOpciones: ['HANTASU','HOKKA','HOKUSAI']
    },
    {
        id:1053,
        rubro: 'arte',
        pregunta: '¿Quién compuso el "Bolero"?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'MAURICE RAVEL',
        otrasOpciones: ['CLAUDE DEBUSSY','MODEST MUSORGSKY','RICHARD WAGNER']
    },
    {
        id:1054,
        rubro: 'arte',
        pregunta: '¿En qué idioma escribio Franz Kafka sus novelas?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'ALEMÁN',
        otrasOpciones: ['CHECO','INGLES','HÚNGARO']
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
        otrasOpciones: ['AZUL, BLANCO, ROJO','ROJO, BANCO, ROJO','VERDE, BLANCO, VERDE']
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
        id:2009,
        rubro: 'geografia',
        pregunta: '¿Que provincia Argentina es la principal productora de Yerba Mate?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'MISIONES',
        otrasOpciones: ['CORRIENTES','FORMOSA','ENTRE RIOS']
    },
    {
        id:2010,
        rubro: 'geografia',
        pregunta: '¿Cual es la provincia mas extensa de la argentina?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'BUENOS AIRES',
        otrasOpciones: ['CORDOBA','SANTA CRUZ','CATAMARCA']
    },
    {
        id:2011,
        rubro: 'geografia',
        pregunta: '¿A que pais se suele llamar "La Suiza de America"?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'URUGUAY',
        otrasOpciones: ['CANADA','ECUADOR','PANAMA']
    },
    {
        id:2012,
        rubro: 'geografia',
        pregunta: '¿Que río separa las provincias de La Pampa y Rio Negro?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'EL RIO COLORADO',
        otrasOpciones: ['EL RIO NEGRO','RIO SUQUIA','RIO URUGUAY']
    },
    {
        id:2013,
        rubro: 'geografia',
        pregunta: 'Si usted visita las ruinas de la ciudad romana de Itálica ¿en que pais se encuetra?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'ESPAÑA',
        otrasOpciones: ['ITALIA','FRANCIA','ALBANIA']
    },
    {
        id:2014,
        rubro: 'geografia',
        pregunta: '¿Cual es el rio mas largo del Mundo?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'AMAZONA',
        otrasOpciones: ['NILO','MISISIPI','CONGO']
    },
    {
        id:2015,
        rubro: 'geografia',
        pregunta: '¿Cual de estas ciudades tiene un puerto marítimo?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'GÉNOVA',
        otrasOpciones: ['KINSHASA','CALGARY','QUITO']
    },
    {
        id:2016,
        rubro: 'geografia',
        pregunta: '¿Qué se encuentra entre Siberia y Alaska?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'MAR DE BERING',
        otrasOpciones: ['NUEVA ZELANDA','ISLAS MALVINAS','ISLANDIA']
    },
    {
        id:2017,
        rubro: 'geografia',
        pregunta: '¿Cual de estas ciudades es la mas alejada del mar?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'ASUNCIÓN',
        otrasOpciones: ['LOS ÁNGELES','MADRID','SAN PETERSBURGO']
    },
    {
        id:2018,
        rubro: 'geografia',
        pregunta: '¿Dónde está la ciudad de Monza?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'ITALIA',
        otrasOpciones: ['ESPAÑA','SUIZA','FRANCIA']
    },
    {
        id:2019,
        rubro: 'geografia',
        pregunta: '¿Qué río atraviesa la ciudad de Viena?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'DANUBIO',
        otrasOpciones: ['VOLGA','RIN','ELBA']
    },
    {
        id:2020,
        rubro: 'geografia',
        pregunta: '¿De dónde llegaron los cerdos a América del Norte ?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'EUROPA',
        otrasOpciones: ['INDIA','AUSTRALIA','ÁFRICA']
    },
    {
        id:2021,
        rubro: 'geografia',
        pregunta: '¿Cuál es la ciudad más grande de Turquía?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'ESTAMBUL',
        otrasOpciones: ['ESMIRNA','ANKARA','ANTALYA']
    },
    {
        id:2022,
        rubro: 'geografia',
        pregunta: 'La ciudad de Buenos Aires es la más cercana a:',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'URUGUAY',
        otrasOpciones: ['BOLIVIA','PARAGUAY','CHILE']
    },
    {
        id:2023,
        rubro: 'geografia',
        pregunta: '¿La bandera de que país es blanca con un punto rojo?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'JAPÓN',
        otrasOpciones: ['TURQUÍA','CHINA','EE. UU.']
    },
    {
        id:2024,
        rubro: 'geografia',
        pregunta: '¿Qué ciudad es la capital de Columbia Británica?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'VICTORIA',
        otrasOpciones: ['YELLOWKNIFE','REGINA','GOOSE BAY']
    },
    {
        id:2025,
        rubro: 'geografia',
        pregunta: '¿Cuál es el segundo océano mas extenso?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'ATLÁNTICO',
        otrasOpciones: ['PACÍFICO','ÍNDICO','ANTÁRTICO']
    },
    {
        id:2026,
        rubro: 'geografia',
        pregunta: '¿Qué ciudad NO se encuentra en Venezuela?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'COCHABAMBA',
        otrasOpciones: ['BARQUISIMETO','MARACAIBO','MARACAY']
    },
    {
        id:2027,
        rubro: 'geografia',
        pregunta: '¿Qué estado era parte de Yugoslavia?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'MACEDONIA DEL NORTE',
        otrasOpciones: ['HUNGRÍA','POLONIA','RUMANIA']
    },
    {
        id:2028,
        rubro: 'geografia',
        pregunta: '¿Dónde se encuentra Tebas de Beocia?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'GRECIA',
        otrasOpciones: ['ITALIA','ALBANIA','TURQUIA']
    },
    {
        id:2029,
        rubro: 'geografia',
        pregunta: '¿Dónde podemos encontrar las montañas Kazbek, Dykhtau y Elbrus?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'CÁUCASO',
        otrasOpciones: ['KARAKÓRUM','ÁFRICA CENTRAL','ANTÁRTIDA']
    },
    {
        id:2030,
        rubro: 'geografia',
        pregunta: '¿Qué río fluye a través dl Gran Cañón de los Estados Unidos?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'COLORADO',
        otrasOpciones: ['YUKON','OHIO','RÍO BRAVO']
    },
    {
        id:2031,
        rubro: 'geografia',
        pregunta: '¿Cuál es la ciudad más grande de Andalucía?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'SEVILLA',
        otrasOpciones: ['CORDOBA','CÁDIZ','GRANADA']
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
        id:3003,
        rubro:'ciencia',
        pregunta: '¿A cuantos grados hierve el agua? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: '100°',
        otrasOpciones: ['99°','98°','110°']
    },
    {
        id:3004,
        rubro:'ciencia',
        pregunta: '¿En que estacion del año nacen los Osos? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'INVIERNO',
        otrasOpciones: ['OTOÑO','PRIMAVERA','VERANO']
    },
    {
        id:3005,
        rubro:'ciencia',
        pregunta: '¿Que son Vega, Capella, Arturo y Proción? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'ESTRELLAS',
        otrasOpciones: ['MARIPOSAS','AMAPOLAS','CANTANTES']
    },
    {
        id:3006,
        rubro:'ciencia',
        pregunta: '¿Cuantos Ceros tiene un Cuatrillon? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'VEINTICUATRO',
        otrasOpciones: ['NUEVE','DOCE','DIECIOCHO']
    },
    {
        id:3007,
        rubro:'ciencia',
        pregunta: '¿A que temperatura se hace sólido el Aceite de Oliva? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: '0°',
        otrasOpciones: ['-5°','-10°','-30°']
    },
    {
        id:3008,
        rubro:'ciencia',
        pregunta: '¿De que color son las flores del Brocoli? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'AMARILLAS',
        otrasOpciones: ['AZULES','ROSAS','ROJAS']
    },
    {
        id:3009,
        rubro:'ciencia',
        pregunta: '¿De que se alimentan los animales Coprófagos? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'ESCREMENTO',
        otrasOpciones: ['RAICES','CARROÑA','SEMILLAS']
    },
    {
        id:3010,
        rubro:'ciencia',
        pregunta: '¿Con que suelen fabricarse las agujas del tocadisco? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'DIAMANTE',
        otrasOpciones: ['ACERO','IMAN','VIDRIO']
    },
    {
        id:3011,
        rubro:'ciencia',
        pregunta: '¿En que pais funciono la primera Central Electrica Nuclear? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'EE UU',
        otrasOpciones: ['UNION SOVIETICA','JAPON','CHINA']
    },
    {
        id:3012,
        rubro:'ciencia',
        pregunta: '¿En que siglo se observaron por primera vez espermatozoides en un microscopio? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'SIGLO XVII',
        otrasOpciones: ['SIGLO XX','SIGLO XIX','SIGLO XVIII']
    },
    {
        id:3013,
        rubro:'ciencia',
        pregunta: '¿Cuantas vueltas alrededor del Sol da la Luna en un año? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'UNA',
        otrasOpciones: ['SEIS','DOCE','VEINTICUATRO']
    },
    {
        id:3014,
        rubro:'ciencia',
        pregunta: '¿Que se fabrica con arena, cal, carbonato de sodio y oxido de plomo? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'VIDRIO',
        otrasOpciones: ['PLASTICO','CEMENTO','LADRILLO']
    },
    {
        id:3015,
        rubro:'ciencia',
        pregunta: '¿Que particularidad tiene las arandelas "GROWER"? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'ESTAN PARTIDAS',
        otrasOpciones: ['SON CUADRADAS','SON DE GOMA','SON DE PLASTICO']
    },
    {
        id:3016,
        rubro:'ciencia',
        pregunta: '¿Cuántas mandíbulas tiene el erizo de mar? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'CINCO',
        otrasOpciones: ['UNA','DOS','TRES']
    },
    {
        id:3017,
        rubro:'ciencia',
        pregunta: '¿Que pila es mas grande en tamaño? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'D',
        otrasOpciones: ['AAA','AA','C']
    },
    {
        id:3018,
        rubro:'ciencia',
        pregunta: '¿De que continente es originario el Tucan? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'AMERICA',
        otrasOpciones: ['ASIA','OCEANIA','AFRICA']
    },
    {
        id:3019,
        rubro:'ciencia',
        pregunta: '¿De que continente es originario el Ajo? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'ASIA',
        otrasOpciones: ['EUROPA','AMERICA','AFRICA']
    },
    {
        id:3020,
        rubro:'ciencia',
        pregunta: '¿De que continente es originario el Garbanzo? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'EUROPA',
        otrasOpciones: ['ASIA','AMERICA','OCEANIA']
    },
    {
        id:3021,
        rubro:'ciencia',
        pregunta: '¿Donde esta la cóclea? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'OIDO',
        otrasOpciones: ['PENE','VAGINA','NARIZ']
    },
    {
        id:3022,
        rubro:'ciencia',
        pregunta: '¿Que cebada es germinada artificialmente y tostada? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'MALTA',
        otrasOpciones: ['LÚPULO','LEVADURA','RAKIA']
    },
    {
        id:3023,
        rubro:'ciencia',
        pregunta: '¿Qué técnica quirúrgica crea otra ruta para que la sangre fluya? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'BYPASS',
        otrasOpciones: ['BYLINE','BYCATCH','BYWAY']
    },
    {
        id:3024,
        rubro:'ciencia',
        pregunta: '¿Cuál de estos animales está en la parte superior de la cadena trófica? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'ÁGUILA PESCADORA',
        otrasOpciones: ['PERCA EUROPEA','CAMARÓN','ALBURNO']
    },
    {
        id:3024,
        rubro:'ciencia',
        pregunta: '¿Qué parte de la planta ingerimos cuando comemos rábani rusticano? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'RAÍZ',
        otrasOpciones: ['TALLO','HOJA','FLOR']
    },
    {
        id:3025,
        rubro:'ciencia',
        pregunta: '¿Qué fueron Rodinia y Pangea? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'SUPER CONTINENTES',
        otrasOpciones: ['LUNAS','METEOROIDES','DINOSAURIOS']
    },
    {
        id:3026,
        rubro:'ciencia',
        pregunta: 'La hipótesis del mundo de ARN trata de explicar: ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'ORIGEN DE LA VIDA',
        otrasOpciones: ['EXTINCION DE DINOSAURIOS','BIG BANG','UNIVERSOS PARALELOS']
    },
    {
        id:3027,
        rubro:'ciencia',
        pregunta: '¿En qué continente podemos encontrar una Mamba Negra? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'AFRICA',
        otrasOpciones: ['ASIA','SUDAMERICA','OCEANIA']
    },
    {
        id:3028,
        rubro:'ciencia',
        pregunta: '¿Qué defecto hace difícil enfocar bien los objetos lejanos? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'MIOPÍA',
        otrasOpciones: ['HIPERMETROPÍA','DISLEXIA','NEUMONÍA']
    },
    {
        id:3029,
        rubro:'ciencia',
        pregunta: '¿Qué órgano filtra la sangre? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'RIÑÓN',
        otrasOpciones: ['DUODENO','FARINGE','PULMÓN']
    },
    {
        id:3030,
        rubro:'ciencia',
        pregunta: '¿Cuál de estos objetos es inmóvil para un observador de la Tierra? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'NINGUNO DE ESOS',
        otrasOpciones: ['VÍA LÁCTEA','SOL','LUNA']
    },
    {
        id:3031,
        rubro:'ciencia',
        pregunta: '¿El cultivo de que fruta a menudo requiere ponización por saturación ya que no es atractivo para las abejas? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'KIWI',
        otrasOpciones: ['FRESA','MORA','MANZANA']
    },
    {
        id:3032,
        rubro:'ciencia',
        pregunta: 'Cuando un gas alcanza su punto de condensación se convierte en:',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'LÍQUIDO',
        otrasOpciones: ['SÓLIDO','PLASMA','CONDENSADO DE BOSE-EINSTEIN']
    },
    {
        id:3033,
        rubro:'ciencia',
        pregunta: '¿Qué es un mandril? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'PRIMATE',
        otrasOpciones: ['ESPACIO VECTORIAL','GRANO','FERMION']
    },
    {
        id:3034,
        rubro:'ciencia',
        pregunta: '¿Qué es la salida de sngre de un vaso sanguíneo? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'HEMORRAGIA',
        otrasOpciones: ['HEMOFILIA','HEMOSTASIA','HEMÓLISIS']
    },
    {
        id:3035,
        rubro:'ciencia',
        pregunta: '¿Qué planta se adhiere a las ramas de un árbol para absorber agua y nutrientes? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'MUÉRDAGO',
        otrasOpciones: ['CARDO ESTRELLADO','HIERBA DONCELLA','ADELFA']
    },
    {
        id:3035,
        rubro:'ciencia',
        pregunta: '¿Cuál es la serpiente más grande? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'ANACONDA',
        otrasOpciones: ['MAMBA NEGRA','COBRA REAL','SERPIENTE DE CASCABEL']
    },
    {
        id:3036,
        rubro:'ciencia',
        pregunta: 'La soldadura fuerte usa una temperatura de fusión superior a: ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: '450°',
        otrasOpciones: ['0°','3000°','50°']
    },
    {
        id:3037,
        rubro:'ciencia',
        pregunta: '¿Quién desarrolló la primera vacuna contra la poliomelitis en 1952?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'JONAS SALK',
        otrasOpciones: ['FLORENCE SABIN','PAUL EHRLICH','KARL LANDSTEINER']
    },
    {
        id:3038,
        rubro:'ciencia',
        pregunta: '¿Qué piedra preciosa consiste en un solo elemnto químico?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'DIAMANTE',
        otrasOpciones: ['JADE','ÓPALO','ESMERALDA']
    },
    {
        id:3039,
        rubro:'ciencia',
        pregunta: '¿Cuál es otro nombre para la adrenalina?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'EPINEFRINA',
        otrasOpciones: ['CALCITRIOL','ACETILCOLINA','MELATONINA']
    },
    {
        id:3040,
        rubro:'ciencia',
        pregunta: '¿Qué animal NO es hematófago?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'LOBO',
        otrasOpciones: ['MURCIELAGO VAMPIRO','ANOPHELES','LAMPREA']
    },
    {
        id:3041,
        rubro:'ciencia',
        pregunta: '¿Cuál es un medicamento para calmar o eliminar el dolor?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'ANALGÉSICO',
        otrasOpciones: ['DIURÉTICO','ANTIBIÓTICO','ANOREXÍGENO']
    },
    {
        id:3042,
        rubro:'ciencia',
        pregunta: '¿Qué fuerza mantiene el agua en los océanos ?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'GRAVEDAD',
        otrasOpciones: ['FUERZA MAGNÉTICA','FRICCIÓN','RESISTENCIA AL AIRE']
    },
    {
        id:3043,
        rubro:'ciencia',
        pregunta: '¿Cuál de estos animales NO puede retraer sus garras ?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'OSO',
        otrasOpciones: ['LYNX','LEÓN','TIGRE']
    },
    {
        id:3044,
        rubro:'ciencia',
        pregunta: 'Un animal que está activo durante el día y descansa durante la noche es:',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'DIURNO',
        otrasOpciones: ['NOCTURNO','BIPOLAR','CREPUSCULAR']
    },
    {
        id:3045,
        rubro:'ciencia',
        pregunta: '¿Qué organo está cubierto por la pleura ?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'PULMÓN',
        otrasOpciones: ['RODILLA','ESTÓMAGO','CEREBRO']
    },
    {
        id:3046,
        rubro:'ciencia',
        pregunta: 'Merina es una raza de:',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'OVEJA',
        otrasOpciones: ['GATO','POLLO','GANADO']
    },
    {
        id:3047,
        rubro:'ciencia',
        pregunta: '¿Qué se ha formado durante muchos años a partir de turba de alta presión?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'CARBÓN',
        otrasOpciones: ['GRANITO','LADRILLO','ORO']
    },
    {
        id:3048,
        rubro:'ciencia',
        pregunta: '¿Cuál era utilizado como anestésico?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'ÉTER',
        otrasOpciones: ['SANGRE','AMONÍACO','ARSÉNICO']
    },
    {
        id:3049,
        rubro:'ciencia',
        pregunta: 'La mayoría de las plantas son: ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'AUTÓTROFAS',
        otrasOpciones: ['OVÍPARAS','PROCARIONTES','RUMIANTES']
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
        id:5012,
        rubro: 'historia',
        pregunta: '¿De donde provinieron los rescatistas de Benito Mussolini en septiembre de 1943?',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'ALEMANIA',
        otrasOpciones: ['RUSIA','FRANCIA','GRAN BRETAÑA']
    },
    {
        id:5012,
        rubro: 'historia',
        pregunta: '¿Quien recibe gran poder y lujo, pero tiene una gran espada colgando sobre su cabeza?',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'DAMOCLES',
        otrasOpciones: ['ÍCARO','MENELAO','SÍSIFO']
    },
    {
        id:5013,
        rubro: 'historia',
        pregunta: '¿Los doce apóstoles siguieron a: ?',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'JESUS',
        otrasOpciones: ['BUDA','GADAFI','MAHOMA']
    },
    {
        id:5014,
        rubro: 'historia',
        pregunta: '¿Quién era la hija más joven del profeta islámico Mahoma?',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'FATIMA',
        otrasOpciones: ['KHADIJA','AISHA','NUSAYBA']
    },
    {
        id:5015,
        rubro: 'historia',
        pregunta: '¿Qué titan de la mitologia griega robó el fuego celestial para la humanidad?',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'PROMETEO',
        otrasOpciones: ['HEFESTO','PERSES','HIPERIÓN']
    },
    {
        id:5016,
        rubro: 'historia',
        pregunta: '¿Qué lugar de nacimiento de Jesús se menciona en el Nuevo Testamento (aparte de Nazaret)?',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'BELEN',
        otrasOpciones: ['JERUSALÉN','TEL AVIV','BEIRUT']
    },
    {
        id:5017,
        rubro: 'historia',
        pregunta: '¿Quién nació en el siglo XIX?',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'FEDERICO CHOPIN',
        otrasOpciones: ['LAURENCE STERNE','LEONHARD EULER','ALBERT CAMUS']
    },
    {
        id:5018,
        rubro: 'historia',
        pregunta: 'En 2010, un terremoto mató a mas de 100000 personas en:',
        imagen: './assets/img/Historia.jpg',
        respuesta: 'HAITÍ',
        otrasOpciones: ['JAPÓN','BANGLADÉS','PAPÚA NVA. GUINEA']
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