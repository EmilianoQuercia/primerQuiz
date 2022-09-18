

//variable para indicar que arranque de la primer pregunta
let indicePregunta = 0
//variable para saber cuantas respuestas correctas tenemos al final
let puntaje = 0

//todo lo que llamo de HTML
let spanPregunta = document.getElementById('pregunta')
let divOpcion1 = document.getElementById('opc1')
let divOpcion2 = document.getElementById('opc2')
let divOpcion3 = document.getElementById('opc3')
let divOpcion4 = document.getElementById('opc4')
let imagen = document.getElementById('imagen')
let msjRespuestas = document.getElementById('correcto')
let btnReinicio = document.getElementById('reiniciar')


divOpcion1.addEventListener('click', ()=>seleccionarOpcion(0))
divOpcion2.addEventListener('click', ()=>seleccionarOpcion(1))
divOpcion3.addEventListener('click', ()=>seleccionarOpcion(2))
divOpcion4.addEventListener('click', ()=>seleccionarOpcion(3))
btnReinicio.addEventListener('click',reiniciar)

function cargarPregunta(index){
    btnReinicio.style.display = 'none'
    msjRespuestas.innerHTML = ''
   
    //NOTA: genero variables sin let (objPregunta y opciones) para que sean globales y poder usarla en otras en funciones 
    objPregunta = baseDatosPreguntas[index]

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
    divOpcion1.innerHTML = opciones[0]
    divOpcion2.innerHTML = opciones[1]
    divOpcion3.innerHTML = opciones[2]
    divOpcion4.innerHTML = opciones[3]


}


function seleccionarOpcion(index){
    //indice que aumenta de a uno cada vez que se selecciona una respuesta
    indicePregunta++
    //chequeamos que la opcion elegida sea la correcta
    if(opciones[index] == objPregunta.respuesta){
        
        msjRespuestas.innerHTML = 'EXCELENTE!!!!'
        msjRespuestas.style.color = 'green'
        puntaje++

        if (indicePregunta>= baseDatosPreguntas.length){
            msjRespuestas.innerHTML = 'EXCELENTE'
        }else{
            //tiempo que esperamos para que se muestre el mensaje antes de cargar la proxima ronda
            setTimeout(()=>cargarPregunta(indicePregunta), 2000)
        }   
    }else{
        
        msjRespuestas.innerHTML = `INCORRECTO. La respuesta es ${objPregunta.respuesta}`
        msjRespuestas.style.color = 'red'
    
        if (indicePregunta>= baseDatosPreguntas.length){
            msjRespuestas.innerHTML = `INCORRECTO. La respuesta es ${objPregunta.respuesta}`
        }else{
            setTimeout(()=>cargarPregunta(indicePregunta), 2000)
        }
         
    }
    //tiempo que esperamos antes de que se muestre el mensaje final cuando no hay mas preguntas
    setTimeout(()=>{
        if(indicePregunta>= baseDatosPreguntas.length){
            msjRespuestas.style.color = 'black'
            msjRespuestas.innerHTML = 'FIN DEL JUEGO'
            setTimeout(()=>{ msjRespuestas.innerHTML  = `Tu puntaje es de ${puntaje}/${baseDatosPreguntas.length} respuestas acertadas`},1000)
            
            btnReinicio.style.display = 'block'
        }
    },2000)
   
}

function reiniciar(){
    location.reload()
}

cargarPregunta(indicePregunta)