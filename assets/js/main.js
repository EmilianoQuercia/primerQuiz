

//variable para saber cuantas respuestas correctas tenemos al final
let puntaje = 0

let timer;
let tiempo = 30


//todo lo que llamo de HTML
let inicio = document.getElementById('pantallaInicio')
let pantallaRegistro = document.getElementById('pantallaRegistro')
let pantallaJuego = document.getElementById('pantallaJuego')
let usuario = document.getElementById('usuario')
let pantallaPuntos = document.getElementById('pantallaFinal')
let btnJugar = document.getElementById('jugar')
let botonComenzar = document.getElementById('comenzar')
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

btnJugar.addEventListener('click', ()=>{
    inicio.style.display= 'none'
    pantallaRegistro.style.display = 'flex'
})

//cuando apreto el boton comenzar llama a la funcion cargar preguntas y empieza a correr el tiempo
botonComenzar.addEventListener('click', ()=>{
    cargarPregunta() 
    timer = setInterval('restarTiempo()',1000)
} )


btnOpcion1.addEventListener('click', ()=>seleccionarOpcion(0))
btnOpcion2.addEventListener('click', ()=>seleccionarOpcion(1))
btnOpcion3.addEventListener('click', ()=>seleccionarOpcion(2))
btnOpcion4.addEventListener('click', ()=>seleccionarOpcion(3))
btnReinicio.addEventListener('click',reiniciar)



function cargarPregunta(){
    //elegimos una pregunta al azar
    let indicePregunta = Math.round(Math.random()*baseDatosPreguntas.length)

    pantallaRegistro.style.display = 'none'

    if (tiempo != 0){
        pantallaJuego.style.display = 'flex'
    }
    
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
        
        msjRespuestas.innerHTML = 'EXCELENTE!!!!'
        msjRespuestas.style.color = 'green'
        puntaje++
        //si responde bien le suma 4 segundos de tiempo como un premio
        tiempo +=4

        setTimeout(()=>cargarPregunta(), 2000)

    }else{
        
        msjRespuestas.innerHTML = `INCORRECTO. La respuesta es ${objPregunta.respuesta}`
        msjRespuestas.style.color = 'red'
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
let tablaPuntos = []
function guardarPuntos(puntos,usuario){

    if (JSON.parse(localStorage.getItem('tabla'))){
        tablaPuntos = JSON.parse(localStorage.getItem('tabla'))
    }
    
    let datosJugador = {puntaje:puntos, Jugador:usuario}

    tablaPuntos.push(datosJugador)

    mejorPuntaje = tablaPuntos.sort((a,b)=> b.puntaje-a.puntaje)

    if (mejorPuntaje.length>5){
        mejorPuntaje.pop()
    }

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
    location.reload()
}

