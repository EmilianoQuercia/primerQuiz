document.addEventListener('DOMContentLoaded', () => {
   
})


let musica = new Audio('./assets/sound/musicaPrincipal.mp3')

musica.volume = 0.5

let sonidoGanar = new Audio('./assets/sound/correcto.mp3')

sonidoGanar.volume = 0.5

let sonidoPerder = new Audio('./assets/sound/incorrecto.wav')

sonidoPerder.volume = 0.5

//variable para saber cuantas respuestas correctas tenemos al final
let puntaje = 0

let timer;
let tiempo = 10
let tablaPuntos = []


//todo lo que llamo de HTML
let inicio = document.getElementById('pantallaInicio')
let pantallaRegistro = document.getElementById('pantallaRegistro')
let pantallaAjustes = document.getElementById('pantallaAjustes')
let controlMusica = document.getElementById('inputMusica')
let controlSonido = document.getElementById('inputSonido')
let pantallaJuego = document.getElementById('pantallaJuego')
let usuario = document.getElementById('usuario')
let pantallaPuntos = document.getElementById('pantallaFinal')
let btnJugar = document.getElementById('jugar')
let botonComenzar = document.getElementById('comenzar')
let botonAjustes = document.getElementById('btnAjustes')
let botonVolver = document.getElementById('btnVolver')
let spanPregunta = document.getElementById('pregunta')
let btnOpcion1 = document.getElementById('opc1')
let btnOpcion2 = document.getElementById('opc2')
let btnOpcion3 = document.getElementById('opc3')
let btnOpcion4 = document.getElementById('opc4')
let imagen = document.getElementById('imagen')
let msjRespuestas = document.getElementById('correcto')
let btnReinicio = document.getElementById('reiniciar')
let reloj = document.getElementById('tiempo')

let puntos = document.getElementById('puntos')
let nombreGuardados = document.getElementById('nombreGuardados')
let puntosGuardados = document.getElementById('puntosGuardados')

//indico que la pantallas pantallas no se vean
pantallaJuego.style.display = 'none'
pantallaPuntos.style.display = 'none'
pantallaRegistro.style.display = 'none'
pantallaAjustes.style.display = 'none'

btnJugar.addEventListener('click', ()=>{
    inicio.style.display= 'none'
    pantallaRegistro.style.display = 'flex'
    let vM = localStorage.getItem('volumenMusica')
    let vS = localStorage.getItem('volumenSonidos')
    musica.volume = vM
    sonidoGanar.volume = vS
    sonidoPerder.volume = vS
    musica.play()
})

//cuando apreto el boton comenzar llama a la funcion cargar preguntas y empieza a correr el tiempo
botonComenzar.addEventListener('click', ()=>{
    cargarPregunta() 
    timer = setInterval('restarTiempo()',1000)
} )

botonAjustes.addEventListener('click', ajustes)

controlMusica.addEventListener('change', controlesMusica)
controlSonido.addEventListener('change',controlesSonido)

botonVolver.addEventListener('click', btnVolver)

btnOpcion1.addEventListener('click', ()=>seleccionarOpcion(0))
btnOpcion2.addEventListener('click', ()=>seleccionarOpcion(1))
btnOpcion3.addEventListener('click', ()=>seleccionarOpcion(2))
btnOpcion4.addEventListener('click', ()=>seleccionarOpcion(3))

btnReinicio.addEventListener('click',reiniciar)



function ajustes(){
    pantallaRegistro.style.display = 'none'
    pantallaAjustes.style.display = 'flex'
}

function controlesMusica(){
    musica.volume = controlMusica.value / 100
    localStorage.setItem('volumenMusica', musica.volume)
}

function controlesSonido(){
    sonidoGanar.play()
    sonidoGanar.volume = controlSonido.value / 100
    sonidoPerder.volume = controlSonido.value / 100 
    localStorage.setItem('volumenSonidos', sonidoGanar.volume)
}

function btnVolver(){
    pantallaRegistro.style.display = 'flex'
    pantallaAjustes.style.display = 'none'
}


function cargarPregunta(){
    //elegimos una pregunta al azar
    let indicePregunta = Math.round(Math.random()*baseDatosPreguntas.length)

    pantallaRegistro.style.display = 'none'

    //utilizo Operador logico AND remplazando la linea 67
    tiempo!=0 && (pantallaJuego.style.display = 'flex')
    
    // if (tiempo != 0){
    //     pantallaJuego.style.display = 'flex'
    // }
    
    btnOpcion1.disabled=false
    btnOpcion2.disabled=false
    btnOpcion3.disabled=false
    btnOpcion4.disabled=false

   
    msjRespuestas.innerHTML = ''
   
    //NOTA: genero variables sin let (objPregunta y opciones) para que sean globales y poder usarla en otras en funciones 
    objPregunta = baseDatosPreguntas[indicePregunta]

    //guardo en opciones el array de otras opciones con el metodo spread (...)    
    opciones = [...objPregunta.otrasOpciones]

   //le agrego a opciones la respuesta correcta
    opciones.push(objPregunta.respuesta)

    // aca le paso un metodo para mostrar las respuestas desordenadas
    opciones.sort(() => Math.random() - 0.5)
    
    // imprimo en pantalla la pregunta
    spanPregunta.innerHTML = objPregunta.pregunta

    // muestro la imagen
     imagen.src = objPregunta.imagen
   
    //imprimo las respuestas 
    btnOpcion1.innerHTML = opciones[0]
    btnOpcion2.innerHTML = opciones[1]
    btnOpcion3.innerHTML = opciones[2]
    btnOpcion4.innerHTML = opciones[3]


    //borramos la pregunta que ya salio
    baseDatosPreguntas.splice(indicePregunta,1)

}


function seleccionarOpcion(index){
    btnOpcion1.disabled=true
    btnOpcion2.disabled=true
    btnOpcion3.disabled=true
    btnOpcion4.disabled=true
 
    //chequeamos que la opcion elegida sea la correcta
    if(opciones[index] == objPregunta.respuesta){
  
        sonidoGanar.play()

        Swal.fire({
            icon: 'success',
            iconColor: '#29bf12',
            color: '#000',
            title: 'CORRECTA',
            timer: '2000',
            showConfirmButton: false,
            background: '#ffaaaa'
        })      
        // msjRespuestas.innerHTML = 'EXCELENTE!!!!'
        // msjRespuestas.style.color = 'green'
        puntaje++
        //si responde bien le suma 4 segundos de tiempo como un premio
        tiempo +=4

        setTimeout(()=>cargarPregunta(), 2000)

    }else{
        sonidoPerder.play()

        Swal.fire({
            icon: 'error',
            iconColor: '#f00',
            color: '#000',
            title: 'INCORRECTO',
            text: `La respuesta es ${objPregunta.respuesta}`,
            timer: '2000',
            showConfirmButton: false,
            background: '#ffaaaa'
        })  
        // msjRespuestas.innerHTML = `INCORRECTO. La respuesta es ${objPregunta.respuesta}`
        // msjRespuestas.style.color = 'red'
        setTimeout(()=>cargarPregunta(), 2000)
         
    }  
}

function restarTiempo(){
    tiempo--

    reloj.innerHTML = tiempo

    if (tiempo == 0){
        clearInterval(timer)
        pantallaJuego.style.display = 'none'
        pantallaPuntos.style.display = 'flex'
        
        mostrarPuntajeFinal();
        guardarPuntos(puntaje,usuario.value);
        pintarPuntaje()
    }   
}

function mostrarPuntajeFinal(){
    return puntos.innerHTML =` JUGADOR: ${usuario.value} -- PUNTOS: ${puntaje} `   
}


function guardarPuntos(puntos,usuario){

    let datosJugador = {puntaje:puntos, Jugador:usuario}
    //chequea que haya algo cargado en el storage
    if (JSON.parse(localStorage.getItem('tabla'))){
        tablaPuntos = JSON.parse(localStorage.getItem('tabla'))

        // si tenemos el puntaje mas alto nos tira un mensaje de alerta
        if(datosJugador.puntaje>tablaPuntos[0].puntaje){
            Swal.fire({
                icon: 'success',
                iconColor: '#29bf12',
                title: 'NUEVO RECORD',
                text: `FELICITACION ${datosJugador.Jugador} Tenes el mejor Puntaje`,
                color: '#000',
                timer: '5000',
                showConfirmButton: false,
                background: '#ffaaaa'
            })  
        }
    }
    
    tablaPuntos.push(datosJugador)

    //acomodamos los puntajes de mayor a menor
    mejorPuntaje = tablaPuntos.sort((a,b)=> b.puntaje-a.puntaje)

    //Cuando la tabla supera los 5 mejores puntajes va borrando el ultimo
    mejorPuntaje.length>5 && mejorPuntaje.pop()
    
    // if (mejorPuntaje.length>5){
    //     mejorPuntaje.pop()
    // }

    const enJSON = JSON.stringify(mejorPuntaje)
    localStorage.setItem('tabla',enJSON)

}


function pintarPuntaje(){


    pintarTabla = JSON.parse(localStorage.getItem('tabla'))
    
    pintarTabla.forEach(punto => {
        nombreGuardados.innerHTML += `<span>${punto.Jugador}</span> <br>`, 
        puntosGuardados.innerHTML += `<span>${punto.puntaje}</span> <br>`
    })
        
}



function reiniciar(){
    location.reload();
    musica.stop();
}

