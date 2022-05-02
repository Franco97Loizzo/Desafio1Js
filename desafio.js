// SALIR DEL CALABOZO CON OPCIONES
// Menu de "salgamos del calabozo"
// pregunta: "miras izq o derecha"
// dar opciones en izq y der
// al ver una dar mas opciones
// total de 8 opciones, 2 correctas
// 4 opciones de te vio el guardia, 2 de oh no no funcionaria, 2 HAS LOGRADO ESCAPAR

let menuPrincipal
alert(`Bienvenido al juego ESCAPA DEL CALABOZO
Dale click en aceptar para ver instrucciones`);
let opcionDerIzq = ("DERECHA" || "IZQUIERDA")
/* let opcionDerIzq */

while (menuPrincipal!==opcionDerIzq)
{
    menuPrincipal = prompt (`Has sido aprisionado por error
                    Debemos salir de este calabozo!!!
                    En tu prision, puedes ver hacia dos lados
                    Decides mirar hacia:
                    IZQUIERDA
                    DERECHA`);
                    
        if (menuPrincipal==="DERECHA")
        {
            
            let opcionesDerecha = prompt (`Decides mirar el lado derecho de tu calabozo
                                    Logras distinguir un pequeño desperfecto en el suelo
                                    Pareciera que alguien ya intento escapar ahi,
                                    pero no dejo nada mas que
                                    una cuchara de plastico casi rota
                                    Y logras ver que la cañeria de agua de tu aseo pierde agua
                                            ¿Que decides probar? (Escriba el numero de la opcion)
                                            1 EL DESPERFECTO DEL SUELO
                                            2 REVISAR LA CAÑERIA DE AGUA
                                            3 VOLVER`)
            if (opcionesDerecha==="1")
            {
                alert(`El guardia te ve intentado cavar un tunel
                        Hacen que te lleven a una celda con mas seguridad :c`)
            }
            else if (opcionesDerecha==="2")
            {
                alert(`Haces que el guardia venga a ver la gotera
                        Es despistado y deja las llaves afuera de la celda
                        CORRES Y LO ENCIERRAS`)
                alert(`FELICITACIONES!!! HAZ LOGRADO ESCAPAR`)
            }
        }
        if (menuPrincipal==="IZQUIERDA")
        {
            
            let opcionesIzquierda = prompt(`Decides mirar al lado izquierdo de tu calabozo
                                            Ves cerca de las rejas, una escoba
                                            Creo que alguien de la limpieza va ser despedido
                                            Y tambien logras distinguir un pequeño clip de gancho
                                            Tus ideas florecen, que decides probar?
                                            (Escribe el numero de la opcion)
                                            1 LA ESCOBA
                                            2 EL CLIP DE GANCHO
                                            3 VOLVER`)
            if (opcionesIzquierda==="1")
            {
                alert(`Pensandolo bien, que harias con una escoba???
                        Bueno, guardala y salva al empleado de limpieza, buen gesto`)
            }
            else if (opcionesIzquierda==="2")
            {
                alert(`No tienes habilidades de ganzua, que quieres intentar???
                        Tu nivel de observador se ha incrementado`)
                        
            }
        }
    else
    {
        alert("opcion invalida")
    }
}






