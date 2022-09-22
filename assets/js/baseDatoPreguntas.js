//Declaro un array de objetos donde van a ir las preguntas y respuestas
const baseDatosPreguntas= [
    {
        pregunta: 'Como se llama el padre de la familia Simpsons',
        imagen: './assets/img/television.jpg',
        respuesta: 'HOMERO',
        otrasOpciones: ['MOE','LENNY','BARNIE']
    },
    {
        pregunta: 'Como se llama el mejor amigo de Bart',
        imagen: './assets/img/television.jpg',
        respuesta: 'MILHOUSE',
        otrasOpciones: ['MARTY','NELSON','RAFA']
    },
    {
        pregunta: 'Que marca de auto es: ',
        imagen: './assets/img/mercedes.jpg',
        respuesta: 'MERCEDES BENZ',
        otrasOpciones: ['ALPHA ROMEO','ASTON MARTIN','FERRARI']
    },
    {
        pregunta: 'Cual aparecio primero: ',
        imagen: './assets/img/redesSociales.jpg',
        respuesta: 'LINKEDIN',
        otrasOpciones: ['FACEBOOK','WHATSAPP','TWITTER']
    },
    {
        pregunta: 'Cuando se estreno Volver al Futuro 2 ',
        imagen: './assets/img/television.jpg',
        respuesta: '1989',
        otrasOpciones: ['1987','1988','1990']
    },
    {
        pregunta: 'Quien es el de la foto',
        imagen: './assets/img/picasso.jpg',
        respuesta: 'PABLO PICASSO',
        otrasOpciones: ['JOAN MIRÓ','CLAUDE MONET','ANTONIO BERNI']
    },
    {
        pregunta: '¿Que longitud tiene la Gran Muralla China ',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'MAS DE 6000KM',
        otrasOpciones: ['ALREDEDOR DE 2000KM','ALREDEDOR DE 4000KM','ALREDEDOR DE 5000KM']
    },
    {
        pregunta: '¿Como se llama al espiritu que puede mover y romper objetos ',
        imagen: './assets/img/fantasma.jpg',
        respuesta: 'POLSTERGEIST',
        otrasOpciones: ['MANDINGA','CUCO','CHOCARRERO']
    },
    {
        pregunta: '¿Que elemento de la tabla periodica representa la foto: ',
        imagen: './assets/img/azufre.jpg',
        respuesta: 'AZUFRE',
        otrasOpciones: ['SELENIO','SILICIO','ARSENIO']
    },
    {
        pregunta: '¿Cuantas cuerdas tiene un Arpa ',
        imagen: './assets/img/arte.jpg',
        respuesta: '47',
        otrasOpciones: ['36','42','50']
    },
    {
        pregunta: '¿Cuantos jugadores tiene un equipo de béisbol ',
        imagen: './assets/img/deporte.jpg',
        respuesta: '9',
        otrasOpciones: ['11','7','13']
    },
    {
        pregunta: '¿Que emperador romano comandó "la Guerra de  las Galias"? ',
        imagen: './assets/img/deporte.jpg',
        respuesta: 'JULIO CESAR',
        otrasOpciones: ['NERON','MARCO AURELIO','NERVA']
    },
    {
        pregunta: '¿Que personaje utilizaba sus flechas con fines amorosos"? ',
        imagen: './assets/img/historia.jpg',
        respuesta: 'CUPIDO',
        otrasOpciones: ['ROBIN HOOD','FLECHA VERDE','OJO DE ALCÓN']
    },
    {
        pregunta: '¿Cual es el planeta mas lejano al sol en nuestro Sistema Solar?',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'PLUTON',
        otrasOpciones: ['JUPITER','SATURNO','MERCURIO']
    },
    {
        pregunta: '¿Que seleccion de futbol usa camiseta de color anaranjado? ',
        imagen: './assets/img/deporte.jpg',
        respuesta: 'HOLANDA',
        otrasOpciones: ['BELGICA','NIGERIA','SUECIA']
    },
    {
        pregunta: '¿Cual es el deporte mas practicado en Canadá? ',
        imagen: './assets/img/deporte.jpg',
        respuesta: 'NATACION',
        otrasOpciones: ['HOCKEY SOBRE HIELO','ATLETISMO','GOLF']
    },
    {
        pregunta: 'Segun la cancion de la "MONA JIMENEZ",¿Se tomaron todo...? ',
        imagen: './assets/img/arte.jpg',
        respuesta: 'EL VINO',
        otrasOpciones: ['EL CAFE','EL FERNET','EL WHISKY']
    },
    {
        pregunta: '¿Cuantos rios hay en Arabia Saudita? ',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'NINGUNO',
        otrasOpciones: ['UNO','DOS','CINCO']
    },
    {
        pregunta: '¿Como murió Adolf Hitler? ',
        imagen: './assets/img/historia.jpg',
        respuesta: 'SE SUICIDO EN SU BUNKER',
        otrasOpciones: ['LO ASESINARON SUS OFICIALES','LO ENVENENARON','TUVO UN ACCIDENTE']
    },
    {
        pregunta: '¿Que elemento se utiliza en el interior de los termometros? ',
        imagen: './assets/img/ciencia.jpg',
        respuesta: 'MERCURIO',
        otrasOpciones: ['PLUTONIO','KRYPTONITA','AZUFRE']
    },
    {
        pregunta: '¿Cual es el idioma mas hablado del mundo?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'CHINO',
        otrasOpciones: ['INGLES','ESPAÑOL','PORTUGUES']
    },
    {
        pregunta: '¿Que cantidad de Muertes provocó la Segunda Guerra Mundial? ',
        imagen: './assets/img/historia.jpg',
        respuesta: '55 MILLONES',
        otrasOpciones: ['27 MILLONES','35 MILLONES','10 MILLONES']
    },
    {
        pregunta: '¿Quien era el Dios del Amor segun la mitologia Griega? ',
        imagen: './assets/img/historia.jpg',
        respuesta: 'EROS',
        otrasOpciones: ['CUPIDO','VENUS','ZEUS']
    },
    {
        pregunta: '¿Cuantos hijos tuvo el compositor SEBASTIAN BACH? ',
        imagen: './assets/img/arte.jpg',
        respuesta: '20 HIJOS',
        otrasOpciones: ['14 HIJOS','7 HIJOS','NINGUNO']
    },
    {
        pregunta: 'El Emperador Caligula nombro cónsul a un animal, ¿a cual? ',
        imagen: './assets/img/historia.jpg',
        respuesta: 'A SU CABALLO',
        otrasOpciones: ['A SU PERRO','A SU GATO','A SU LORO']
    },
    {
        pregunta: '¿A que pais pertenece la Isla de Pascua ',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'CHILE',
        otrasOpciones: ['PERU','COLOMBIA','VENEZUELA']
    }, 
    {
        pregunta: '¿Que grupo de Rock cantaba "Mejor no hablar de ciertas cosas"',
        imagen: './assets/img/arte.jpg',
        respuesta: 'SUMO',
        otrasOpciones: ['SODA ESTEREO','VIRUS','DIVIDIDOS']
    },
    {
        pregunta: '¿Que colores tiene la bandera de Italia ',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'VERDE, BLANCO, ROJO',
        otrasOpciones: ['AZUL,BLANCO, ROJO','ROJO, BANCO, ROJO','VERDE,BLANCO,VERDE']
    },
    {
        pregunta: '¿Que instrumentos fabricaba Antonio Stradivarius?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'VIOLINES',
        otrasOpciones: ['PIANOS','GUITARRAS','CONTRABAJOS']
    },
    {
        pregunta: '¿Cuantas peliculas hay de Harry Potter?',
        imagen: './assets/img/television.jpg',
        respuesta: '8',
        otrasOpciones: ['7','10','4']
    },
    {
        pregunta: '¿Como se llama el personaje de la foto?',
        imagen: './assets/img/sebastian.jpg',
        respuesta: 'SEBASTIAN',
        otrasOpciones: ['ARIEL','FLANDER','CLOROMIRO']
    },
    {
        pregunta: '¿Que pais es el segundo mas poblado del mundo?',
        imagen: './assets/img/television.jpg',
        respuesta: 'INDIA',
        otrasOpciones: ['CHINA','JAPON','RUSIA']
    },
    {
        pregunta: '¿Con que instrumento los Addams llamaban a su mayordomo Largo?',
        imagen: './assets/img/television.jpg',
        respuesta: 'CON UN BONG',
        otrasOpciones: ['CON UNA CAMPANA','CON UN TIMBRE','CON UN TELEFONO']
    },
    {
        pregunta: '¿Quien era el tío de Hugo, Paco y Luis?',
        imagen: './assets/img/television.jpg',
        respuesta: 'PATO DONALD',
        otrasOpciones: ['PATO LUCAS','GOFFY','MICKEY']
    },
    {
        pregunta: '¿Cual era el arma del Cacique Patoruzú?',
        imagen: './assets/img/television.jpg',
        respuesta: 'BOLEADORAS',
        otrasOpciones: ['PISTOLA','GOMERA','CERBATANA']
    },
    {
        pregunta: '¿Con que extraño elemento se comunicaba telefonicamente el Super Agente 86?',
        imagen: './assets/img/television.jpg',
        respuesta: 'CON SU ZAPATO',
        otrasOpciones: ['CON SU PARAGUA','CON SU SOMBRERO','CON LOS LENTES']
    },
    {
        pregunta: '¿Que animal era el maestro de las Tortugas Ninja?',
        imagen: './assets/img/television.jpg',
        respuesta: 'RATA',
        otrasOpciones: ['PERRO','TORTUGA','LIEBRE']
    },
    {
        pregunta: '¿Como se llama el mayordomo de Batman?',
        imagen: './assets/img/television.jpg',
        respuesta: 'ALFRED',
        otrasOpciones: ['BERNARDO','GUTIERREZ','KATO']
    },
    {
        pregunta: '¿Que grupo de musica fue autor de "La Biblia"?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'VOX DEI',
        otrasOpciones: ['SERU GIRAN','SUI GENERIS','SUMO']
    },
    {
        pregunta: '¿Como se llama el personaje de la foto?',
        imagen: './assets/img/skeletor.jpg',
        respuesta: 'SKELETOR',
        otrasOpciones: ['MUM-RA','DESTRUCTOR','GARGAMEL']
    },
    {
        pregunta: '¿Como se llamaba el caballo del Zorro?',
        imagen: './assets/img/television.jpg',
        respuesta: 'TORNADO',
        otrasOpciones: ['SILVER','PAMPERO','RIN TIN TIN']
    },
    {
        pregunta: '¿En que año inicio la primera Guerra Mundial?',
        imagen: './assets/img/historia.jpg',
        respuesta: '1914',
        otrasOpciones: ['1918','1912','1917']
    },
    {
        pregunta: 'En que año el hombre piso la luna por primera vez',
        imagen: './assets/img/historia.jpg',
        respuesta: '1969',
        otrasOpciones: ['1965','1986','1973']
    },
    {
        pregunta: '¿En que continente se encuentra el pais BUTAN?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'ASIA',
        otrasOpciones: ['OCEANIA','AFRICA','EUROPA']
    },
    {
        pregunta: '¿Cual es el rio mas largo del Mundo?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'AMAZONA',
        otrasOpciones: ['NILO','MISISIPI','CONGO']
    },
    {
        pregunta: '¿cuantos años vivio la persona mas vieja del mundo?',
        imagen: './assets/img/historia.jpg',
        respuesta: '128 AÑOS',
        otrasOpciones: ['125 AÑOS','133 AÑOS','119 AÑOS']
    },
    {
        pregunta: '¿quien invento el secador de pelo?',
        imagen: './assets/img/historia.jpg',
        respuesta: 'ALEXANDRE GODEFOY',
        otrasOpciones: ['LEONARDO DA VINCI','ALBERT EINSTEIN','JACOB SCHICK']
    },
    {
        pregunta: '¿Donde esta el primer teatro del Mundo?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'ARLES',
        otrasOpciones: ['NAPOLES','ATENAS','ROMA']
    },
    {
        pregunta: '¿cual es la montaña mas alta del mundo?',
        imagen: './assets/img/geografia.jpg',
        respuesta: 'EVEREST',
        otrasOpciones: ['ACONCAGUA','KILIMANJARO','ELBRUS']
    },
    {
        pregunta: '¿cual fue la obra mas importante de Frida Kahlo?',
        imagen: './assets/img/arte.jpg',
        respuesta: 'LAS DOS FRIDAS',
        otrasOpciones: ['DIEGO Y YO','LAS FLORES Y LA UNICEJA','AUTORRETRATO CON TERCIOPELO']
    }
    
    

    


]