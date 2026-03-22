// ============================================================
//  PokéDev — TrainerCard  |  script.js
//  Misión 10 · LevelUp Code Bootcamp 2026
// ============================================================
//  INSTRUCCIONES:
//  → Este es el único archivo que debes editar.
//  → El HTML y el CSS ya están listos. Tu trabajo es JS puro.
//  → Sigue los TODOs en orden — el patrón siempre está dado.
// ============================================================


// ────────────────────────────────────────────────────────────
//  SECCIÓN 1 — FUNCIONES DE UI  (ya implementadas ✅)
//  No las modifiques — son tus herramientas listas para usar.
// ────────────────────────────────────────────────────────────

// Muestra un mensaje de error visible en el formulario
function mostrarError(mensaje) {
  let elError = document.getElementById("mensajeError");
  let elExito = document.getElementById("mensajeExito");

  elExito.style.display = "none";
  elError.textContent = "⚠️ " + mensaje;
  elError.style.display = "block";
}

// Muestra un mensaje de éxito visible en el formulario
function mostrarExito(mensaje) {
  let elError = document.getElementById("mensajeError");
  let elExito = document.getElementById("mensajeExito");

  elError.style.display = "none";
  elExito.textContent = "✅ " + mensaje;
  elExito.style.display = "block";
}

// Limpia ambos mensajes de feedback
function limpiarMensajes() {
  document.getElementById("mensajeError").style.display = "none";
  document.getElementById("mensajeExito").style.display = "none";
}

// Recibe el objeto entrenador y pinta toda la tarjeta en el DOM
// Este es el "cliente" que recibe tu objeto — él sabe qué hacer con él
function renderizarTarjeta(entrenador) {

  // Paleta de colores por región — así la tarjeta cambia de tema sola
  let claseRegion = "region-" + entrenador.region.toLowerCase();

  // Avatar: primera letra del nombre en mayúscula
  let inicial = entrenador.nombre.charAt(0).toUpperCase();

  // ID de entrenador ficticio basado en la hora actual
  let idFicticio = "ID-" + Date.now().toString().slice(-6);

  // Pintamos cada pieza de la tarjeta en su lugar del HTML
  document.getElementById("cardAvatar").textContent = inicial;
  document.getElementById("cardNombre").textContent = entrenador.nombre;
  document.getElementById("cardRegion").textContent = "📍 Región: " + entrenador.region;
  document.getElementById("cardTipo").textContent = entrenador.tipo;
  document.getElementById("cardPokemon").textContent = entrenador.pokemon;
  document.getElementById("cardFrase").textContent = "\"" + entrenador.frase + "\"";
  document.getElementById("cardId").textContent = idFicticio;

  // Aplicamos el tema de color de la región al contenedor de la tarjeta
  let tarjeta = document.getElementById("trainerCard");
  tarjeta.className = "trainer-card " + claseRegion;

  // ── BONUS ── Si el objeto tiene el método obtenerInsignia, lo usamos
  // El programa funciona perfecto aunque este método no exista todavía
  if (entrenador.obtenerInsignia) {
    document.getElementById("cardInsignia").textContent = entrenador.obtenerInsignia();
  } else {
    document.getElementById("cardInsignia").textContent = "🏅";
  }

  // Usamos el método presentarse() para mostrarlo en consola
  // Así los estudiantes ven en vivo que el método funciona
  console.log(entrenador.presentarse());

  // Intercambiamos secciones: ocultamos el formulario y mostramos la tarjeta
  document.getElementById("formSection").style.display = "none";
  document.getElementById("cardSection").style.display = "block";
}


// ────────────────────────────────────────────────────────────
//  SECCIÓN 2 — MANEJADOR DEL SUBMIT
//
//  🎫 TICKET 1 — Leer los 5 campos y validar que ninguno esté vacío.
//  🎫 TICKET 2 — Construir el objeto entrenador con sus propiedades y método.
//  🎫 TICKET 3 — Llamar a renderizarTarjeta() con el objeto listo.
// ────────────────────────────────────────────────────────────

document.getElementById("formTrainer").addEventListener("submit", function (evento) {

  // Detenemos el comportamiento por defecto del formulario (recargar la página)
  evento.preventDefault();
  limpiarMensajes();


  // ── PASO 1: LEER LOS CAMPOS ──────────────────────────────
  let nombre = document.getElementById("inputNombre").value;

  // TODO — lee el valor del select de región
  let region = document.getElementById("inputRegion").value;

  // TODO — lee el valor del select de tipo
  let tipo = document.getElementById("inputTipo").value;

  // TODO — lee el valor del input de pokémon estrella
  let pokemon = document.getElementById("inputPokemon").value;

  // TODO — lee el valor del input de frase de batalla
  let frase = document.getElementById("inputFrase").value;


  // ── PASO 2: VALIDAR QUE NINGÚN CAMPO ESTÉ VACÍO ─────────
  // Si un campo está vacío, mostramos el error y cortamos la ejecución con return
  // ✅ El primero ya está — replica el patrón para los 4 restantes

  if (nombre.trim() === "") {
    mostrarError("El nombre del entrenador no puede estar vacío.");
    return;
  }

  // TODO — valida que region no esté vacío
  // Pista: if (region === "") { mostrarError("..."); return; }
  if(region === ""){
    mostrarError("La región de origen de tu pokemón no puede estar vacío");
    return;
  }
  // TODO — valida que tipo no esté vacío
  if(tipo === ""){
    mostrarError("El tipo de tu pokemón no puede estar vacío");
    return;
  }
  // TODO — valida que pokemon no esté vacío
  if(pokemon === ""){
    mostrarError("El nombre de tu pokemón no puede estar vacío");
    return;
  }
  // TODO — valida que frase no esté vacío
  if(frase === ""){
    mostrarError("La frase de batalla de tu pokemón no puede estar vacía");
    return;
  }

  // ── PASO 3: CONSTRUIR EL OBJETO ──────────────────────────
  // Aquí está el concepto central de esta lección:
  // agrupamos datos relacionados en una sola estructura con identidad propia.
  //
  // Un objeto no es solo un contenedor — puede tener comportamiento propio
  // a través de sus métodos. presentarse() es ese comportamiento.
  //
  // ✅ La estructura ya está iniciada — completa las propiedades que faltan

  let entrenador = {
    nombre: nombre,
    
    
    
    


    // TODO — agrega la propiedad region con su valor
    region:region,
    // TODO — agrega la propiedad tipo con su valor
    tipo:tipo,
    // TODO — agrega la propiedad pokemon con su valor
    pokemon:pokemon,
    // TODO — agrega la propiedad frase con su valor
    frase:frase,
    // Este es un MÉTODO: una función que vive dentro del objeto
    // Usa "this" para referirse a las propiedades del mismo objeto
    presentarse: function () {
      // TODO — retorna una frase usando this.nombre y this.region
      // Ejemplo de resultado: "Soy Red, entrenador de la región Kanto."
      // Pista: return "Soy " + this.nombre + ...
      return "Soy" + this.nombre + this.region;
    },

    obtenerInsignia: function () {
    if (this.region === "Kanto") {
        return "🔴";
    } else if (this.region === "Johto") {
        return "✨";
    } else if (this.region === "Hoenn") {
        return "🌊";
    } else if (this.region === "Sinnoh") {
        return "💎";
    } else if (this.region === "Unova") {
        return "⚫";
    } else if (this.region === "Kalos") {
        return "🌸";
    }

    // Si no es ninguna de las anteriores, devolvemos la medalla por defecto
    return "🏅"; 
}
  };


  // ── PASO 4: ENTREGAR EL OBJETO A LA FÁBRICA ─────────────
  // renderizarTarjeta ya sabe cómo pintar todo — solo necesita el objeto

  // TODO — llama a renderizarTarjeta() y pásale el objeto entrenador
  // Pista: renderizarTarjeta( ??? );
  renderizarTarjeta(entrenador);
});


// ────────────────────────────────────────────────────────────
//  BOTÓN RESET — ya implementado ✅
//  Vuelve al formulario para crear una nueva tarjeta
// ────────────────────────────────────────────────────────────

document.getElementById("btnReset").addEventListener("click", function () {
  document.getElementById("cardSection").style.display = "none";
  document.getElementById("formSection").style.display = "block";
  document.getElementById("formTrainer").reset();
  limpiarMensajes();
});


// ════════════════════════════════════════════════════════════
//  🔥 EXTRA BONUS — TICKET EXTRA: obtenerInsignia()
// ════════════════════════════════════════════════════════════
//
//  El sistema de tarjetas quiere mostrar una insignia especial
//  en la esquina superior derecha según la región del entrenador.
//
//  Tu misión: agregar un SEGUNDO MÉTODO al objeto entrenador
//  llamado obtenerInsignia() que use if / else if para retornar
//  un emoji diferente según el valor de this.region.
//
//  Regiones y su insignia sugerida:
//    Kanto   → "🔴"
//    Johto   → "✨"
//    Hoenn   → "🌊"
//    Sinnoh  → "💎"
//    Unova   → "⚫"
//    Kalos   → "🌸"
//    default → "🏅"   ← por si acaso
//
//  Pista de estructura (agrégalo dentro del objeto entrenador,
//  separado por coma después del método presentarse):
//
//    obtenerInsignia: function () {
//      if (this.region === "Kanto") {
//        return "🔴";
//      } else if (this.region === "Johto") {
//        return "✨";
//      } // ... continúa para las demás regiones
//    }
//
//  Cuando esté listo, la tarjeta mostrará la insignia automáticamente
//  porque renderizarTarjeta() ya está preparada para llamarla.