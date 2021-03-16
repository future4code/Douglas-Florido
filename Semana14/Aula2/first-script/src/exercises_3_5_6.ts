enum MARCAS_DE_CARROS {
   FORD = "FORD", // e não 0
   VOLKSWAGEN = "VOLKSWAGEN",
   FIAT = "FIAT",
   NISSAN = "NISSAN",
   RENAUT = "RENAUT"
}

export type carro = {
   marca: MARCAS_DE_CARROS,
   volumeDoTanque: number,
   temMotorFlex?: boolean,
   calcularAutonomia: (combustivelRestante: number) => number
}

const calcularAutonomia = (
   combustivelRestante: number
): number => {
   return 15 * combustivelRestante
}

const mustang: carro = {
   marca: MARCAS_DE_CARROS.FORD,
   volumeDoTanque: 61,
   temMotorFlex: false,
   calcularAutonomia
}

const gol: carro = {
   marca: MARCAS_DE_CARROS.VOLKSWAGEN,
   volumeDoTanque: 55,
   temMotorFlex: true,
   calcularAutonomia  // sintaxe abreviada
}

const kombi: carro = {
   marca: MARCAS_DE_CARROS.VOLKSWAGEN,
   volumeDoTanque: 40,
   temMotorFlex: false,
   calcularAutonomia
}

export const carros: carro[] = [mustang, gol, kombi]