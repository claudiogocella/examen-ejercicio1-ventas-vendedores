/*Dados estos 5 arreglos que representan las ventas semanales del primer trimentre,
correspondientes a 5 vendedores de la empresa: 
Camila, Franco, Sofía, Matías y Agustina, respectivamente.
vendedor1 [32558, 36165, 34240, 39273,   34360, 21347, 20869, 21493,   23062, 31908, 30369, 30652]
vendedor2 [27520, 31480, 24053, 34823,   32942, 38477, 23756, 21413,   26699, 22045, 25625, 26855] 
vendedor3 [20584, 33473, 34300, 24598,   33955, 24040, 39173, 25542,   25105, 26759, 29790, 36218] 
vendedor4 [27243, 38774, 21246, 30691,   24542, 39771, 31807, 31641,   20850, 29837, 37182, 28006] 
vendedor5 [23334, 32687, 25217, 26844,   27033, 35244, 25702, 25781,   35525, 34874, 38842, 20562]
// SEMANA	 1       2     3      4        1      2      3      4        1      2      3      4
// MES               ENERO						 FEBRERO						MARZO
​
Escribir un programa que permita determinar:

Para cada vendedor mostrar su nombre y 
1- su venta máxima indicando semana y mes de la misma.
2- su venta mínima indicando semana y mes de la misma.
3- su promedio trimestral de ventas.
4- su promedio mensual de ventas.


Entre todos los vendedores calcular:
5- nombre y monto vendido del mejor vendedor de cada semana.
6- nombre y suma de montos vendidos del mejor vendedor de cada mes
7- nombre y suma de montos vendidos del peor vendedor de cada mes
8- nombre y suma de montos vendidos de peor vendedor del trimestre

Tenga en cuenta que cada valor en los arreglos es la venta de una semana, y que cuatro semanas forman un mes.
*/

let vendedor1 : [] = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]
let vendedor2 : [] = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855]
let vendedor3 :[] = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218]
let vendedor4 : [] = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] 
let vendedor5 : [] = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]
let longitud : number = 12
let indice : number = 0

//1- nombre vendedor + su venta máxima indicando semana y mes de la misma.
//vendedor1 obtuvo su mejor venta en la semanaMayorVenta del mes de ?
let primerMes :string[] = ["Enero"];
let segundoMes :string[] = ["Febrero"];
let tercerMes :string[] = ["Marzo"];

let vendedor1 :string [] = ["Camila"]
let vendedor2 :string [] = ["Franco"]
let vendedor3 :string [] = ["Sofía"]
let vendedor4 :string [] = ["Matías"]
let vendedor5 :string [] = ["Agustina"]

function obtenerMaximaVentaSemanal(arreglo1:number[], longitud:number, primerMes: string[])
  let max:number = 0;
  let primerMes : string = ""; 
  let texto : string =""

    for (indice = 0; indice<longitud; indice++){
      if (arreglo1 [indice] > max){
        max = arreglo1 [indice];
        semanaMayorVenta = primerMes[indice];
      }
      
      }
   }
    
  
      texto = "La semana de mayor venta correspondiente al mes de : " + primerMes "fue la " + semanaMayorVenta;
    
      return   texto; 
      
      function obtenerMaximaVentaSemanal(arreglo2:number[], longitud:number, segundoMes: string[])
      let max:number = 0;
      let segundoMes : string = ""; 
      let texto : string =""
    
        for (indice = 0; indice<longitud; indice++){
          if (arreglo2 [indice] > max){
            max = arreglo2 [indice];
            semanaMayorVenta = segundoMes[indice];
          }
          
          }
       }
       texto = "La semana de mayor venta correspondiente al mes de : " + segundoMes "fue la " + semanaMayorVenta;
       return   texto; 

       function obtenerMaximaVentaSemanal(arreglo3:number[], longitud:number, tercerMes: string[])
       let max:number = 0;
       let tercerMes : string = ""; 
       let texto : string =""
     
         for (indice = 0; indice<longitud; indice++){
           if (arreglo3 [indice] > max){
             max = arreglo3 [indice];
             semanaMayorVenta = mesTres[indice];
           }
           
           }
        }
         
           texto = "La semana de mayor venta correspondiente al mes de : " + mesTres "fue la " + semanaMayorVenta;
         
           return   texto; 



      //2- su venta mínima indicando semana y mes de la misma.




      //3- su promedio trimestral de ventas.