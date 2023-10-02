"""Este código tiene la función de traducir de código Morse a texto y viceversa, solicitando al usuario a través de la consola que elija qué traducción utilizará el programa a través de un menú de opciones"""

# Se define una funcion que traduce una secuencia de códigos Morse en letras

def traducirMorse(codigos): # Se toma como parametro el codigo ingresado por el usuario

    palabras = ""  # Inicializa una cadena vacía para almacenar las palabras traducidas
    
    while len(codigos) != 0:  # Inicia un ciclo mientras haya códigos Morse para traducir.

        for i in range(4, 0, -1):  # Itera en un ciclo desde 4 hasta 1 en orden descendente

            t = False  # Inicializa una variable booleana para controlar si se encontró una traducción

            codigo = codigos[:i]  # Obtiene un extracto del codigo Morse del usuario
            
            if codigo in morse:  # Comprueba si el extracto está en el diccionario morse y si esta...

                palabras += morse[codigo]  # Agrega la letra correspondiente a la cadena de palabras

                t = True  # Establece t en True para indicar que se encontró una traducción
                
            if t:  # Si se encontró una traducción en la iteración actual del ciclo entonces...

                codigos = codigos[i:]  # Actualiza la cadena de codigos eliminando el extracto ya traducido

                break  # Sale del ciclo
            
            if len(codigo) == 1 and codigo not in morse:  # Si no se encontró una traducción y el extracto tiene solo un caracter entonces...

                if codigo == "/":  # Si el código es "/", representa un espacio

                    palabras += " "  # Agrega un espacio a la cadena de palabras

                codigos = codigos[i:]  # Actualiza la cadena de códigos eliminando el extracto

                break  # Sale del ciclo actual
    
    return palabras  # Devuelve la cadena de palabras traducidas

# Se define una funcion que traduce letras a su equivalente en código Morse

def traducirTexto(palabras): # Se toma como parametro las palabras ingresadas por el usuario

    codigoMorse = ""  # Inicializa una cadena vacía para almacenar el código Morse resultante

    for letra in palabras:  # Itera cada caracter con el alias "letra" en la cadena 'palabras'
        for clave, valor in morse.items():  # Itera a través de los pares clave-valor en el diccionario morse

            if valor == letra:  # Comprueba si el valor del diccionario morse coincide con el caracter actual

                codigoMorse += clave + " "  # Agrega el código Morse correspondiente seguido de un espacio

        if letra ==  " ":  # Comprueba si el caracter es un espacio.
            codigoMorse += "/ "  # Agrega un carácter de barra seguido de un espacio para representar un espacio en Morse.

    return codigoMorse  # Devuelve la cadena de código Morse resultante

# Este diccionario asocia códigos Morse con letras del alfabeto

morse = {
    ".-"   : "A",
    "-..." : "B",
    "-.-." : "C",
    "-.."  : "D",
    "."    : "E",
    "..-." : "F",
    "--."  : "G",
    "...." : "H",
    ".."   : "I",
    ".---" : "J",
    "-.-"  : "K",
    ".-.." : "L",
    "--"   : "M",
    "-."   : "N",
    "---"  : "O",
    ".--." : "P",
    "--.-" : "Q",
    ".-."  : "R",
    "..."  : "S",
    "-"    : "T",
    "..-"  : "U",
    "...-" : "V",
    ".--"  : "W",
    "-..-" : "X",
    "-.--" : "Y",
    "--.." : "Z",
}

# Este ciclo permite que el programa se ejecute continuamente hasta que se elija la opción de salir

while True:
    try:
        # Muestra un menú de opciones al usuario

        print("Este programa traduce tu texto a morse y viceversa \nEscoja una de las opciones para continuar \n 1) De texto a morse. \n 2) De morse a texto. \n 3) Salir.")

        infinito = int(input("Digite una de las opciones (uno de los numeros): "))  # Solicita al usuario que ingrese una opción
        
        if infinito == 1: # Si la opcione es igual a 1 entonces...

            texto = str(input("\nIngrese el texto que desea traducir: "))  # Solicita al usuario que ingrese el texto a traducir

            traduccion = traducirTexto(texto.upper())  # Llama a la función para traducir de texto a Morse y le envia como parametro las palbaras escritas colocando todas las letras en mayusculas para prevenir errores

            print("\nTraducción: ", traduccion, " (los slashes representan los espacios)\n")  # Muestra la traducción resultante

        elif infinito == 2: # Si la opcione es igual a 2 entonces...

            codigo = str(input("\nIngrese el código que desea traducir (recuerde separar las letras y usar los slashes para una mejor traducción): "))  # Solicita al usuario que ingrese el código Morse a traducir recordando las reglas que se tienen que cumplir

            traduccion = traducirMorse(codigo)  # Llama a la función para traducir de Morse a texto y le envia como parametro el codigo escrito

            print("\nTraducción: ", traduccion,"\n")  # Muestra la traducción resultante

        elif infinito == 3: # Si la opcione es igual a 3 entonces...

            print("\n¡Adiós! :D\n")  # Muestra un mensaje de despedida y sale del ciclo
            break

        else:
            print("\n------Opción no válida------\n")  # Muestra un mensaje de error si se ingresa una opción inválida es decir, un numero diferente a los establecidos

    except ValueError:
        print("\n------Ingrese un número entero------\n")  # Muestra un mensaje de error si se ingresa algo que no es un número entero (int)