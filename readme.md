# Code Challenge: chessBishopAndPawn

Dadas las posiciones de un alfil blanco y un peón negro en el tablero de ajedrez estándar, 
determine si el alfil puede capturar el peón en un solo movimiento.

### Movimiento del Alfil (Bishop)
El alfil no tiene restricciones de distancia para cada movimiento, pero está limitado al movimiento diagonal. 

Consulte el ejemplo a continuación para ver cómo se puede mover:  
![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2Fbishop.jpg?alt=media&token=260667ac-a778-4135-9a16-a6c1e19f57c4)

### Coordenadas en tablero de Ajedrez
La posición de una celda en el tablero de ajedrez se identifica mediante una coordenada alfanumérica.   

- El eje horizontal o eje X se identifica con una letra entre la "A" y la "H" (A,B,C,D,E,F,G,H)  
- El eje vertical o eje Y se identiica con un numero entre el "1" y el "8" (1,2,3,4,5,6,7,8)  

Por ejemplo: "A1", "G7", "F3"  

![Tablero Ajedrez](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2FtablerAjedrez.jpg?alt=media&token=d6ba9a45-7646-49a1-b7c2-45138e9df7fd)


## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: bishop (Alfil)
- **tipo**: String

##### Parámetro 2
- **nombre**: pawn (Peon)
- **tipo**: String

## Salida

- **tipo**: Boolean

## Ejemplo
Para alfil = "A1" y peón = "C3", la salida debe ser = verdadero.  

![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2FbishopPawn1.jpg?alt=media&token=c130d63b-2de4-4328-a9cb-4bb0d7658e1d)  
---  

Para alfil = "H1" y peón = "H3", la salida debe ser = falso.  

![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2FbishopPawn2.jpg?alt=media&token=74344d5f-b9fb-4853-909f-4c592829ce12)  
## Tests

### Test 1  

- **Parametros**: (bishop = "A1", pawn = "C3")  
- **Resultado esperado**: true
---
### Test 2  

- **Parametros**: (bishop = "H1", pawn = "H3")  
- **Resultado esperado**: false
---
### Test 3  

- **Parametros**: (bishop = "H4", pawn = "F2")  
- **Resultado esperado**: true
---
### Test 4  

- **Parametros**: (bishop = "B2", pawn = "E4")  
- **Resultado esperado**: true
---
### Test 5

- **Parametros**: (bishop = "D8", pawn = "G8")  
- **Resultado esperado**: false

---
### Test 6 

- **Parametros**: (bishop = "C6", pawn = "H2")  
- **Resultado esperado**: false

---
### Test 7 

- **Parametros**: (bishop = "A1", pawn = "H8")  
- **Resultado esperado**: true

---
### Test 8

- **Parametros**: (bishop = "A3", pawn = "H3")  
- **Resultado esperado**: false
