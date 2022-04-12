# React challenge

La Nacion react developer challenge. ejercicio que consiste en componentizar la maqueta: https://especiales.lanacion.com.ar/arc-css/acumulado.asp .

Fue realizado con webpack, react, jsx, vanilla js y css

## Instalación

clonar repositorio

`$ git clone https://github.com/emilio4punto0/LaNacion.git`

## Cómo se usa

Ejecutar `npm start` o `yarn start` desde el folder principal

El navegador debe de abrir automaticamente, de lo contrario el puerto configurado para web serve es el http://localhost:8080/

## FIZZ BUZZ 

Segundo ejercicio se encuentra en la carpeta FIZZBUZZ. Ejecutar archivo js desde terminal y ver resultado por la misma terminal o copiar y pegar en la consola del browser

## Cómo se usa

`node fizzBuzz.js`

## respuestas del test 

¿De qué forma guardarías los archivos que un usuario suba por la aplicación al servidor y porque?
Respuesta: Desde el front a traves de una request http post se genera una conexion mediante API y el back es el encargado de enviarlo al servidor.

¿Implementaría un cache del lado del cliente? ¿Porque?
Respuesta: Si, siempre evaluando el caso previamente y de acuerdo a la necesidad de persistencia, tipo de data y requerimientos del cliente. El uso del cache permite una mayor velocidad y eficiencia del manejo de datos comunes o mas usados por el cliente generando una mejor experiencia en el usuario y optimizando el performance de los navegadores, reduce la carga en la base de datos y las peticiones al servidor.