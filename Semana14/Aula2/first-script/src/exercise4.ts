import { carro, carros } from "./exercises_3_5_6"

function buscarCarrosPorMarca(
   frota: carro[],
   marca?: string
) {
   if (marca === undefined) {
      return frota
   }

   return frota.filter(
      (carro) => {
         return carro.marca === marca
      }
   )
}

console.log(
   buscarCarrosPorMarca(
      carros,
      "VolksWagen"
   )
);

