// Función que determina si una persona es elegible para la jubilación
function esElegibleParaJubilacion(edad, aportes) {
  if (edad < 0) {
    return "Edad no puede ser negativa";
  }
  
  if (edad === 0) {
    return "Debe proporcionar una edad válida";
  }
  
  if (edad < 18) {
    return "Solo las personas mayores de edad pueden solicitar la jubilación";
  }
  
  if (edad >= 65 && aportes >= 240) {
    return "Es elegible para la jubilación";
  }
  
  return "No cumple con los requisitos para la jubilación";
}

// Función para capturar datos del usuario
function solicitarDatos() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Por favor, introduzca la edad: ", (entradaEdad) => {
    const edad = Number(entradaEdad);
    rl.question("Por favor, introduzca la cantidad de aportes al IGSS: ", (entradaAportes) => {
      const aportes = Number(entradaAportes);
      const resultado = esElegibleParaJubilacion(edad, aportes);
      console.log(resultado);
      rl.close();
    });
  });
}

// Ejecutar solo si el archivo se está ejecutando directamente
if (require.main === module) {
  solicitarDatos();
}

module.exports = { esElegibleParaJubilacion };
