let items = [
  {
    "id": 1001,
    "nombre": "Camiseta titular Boca Juniors 2024",
    "descripcion": "Esta nueva camiseta titular de Boca Juniors adidas une la pasión y el barrio con diferentes tonos que resaltan sus colores, el azul y oro. Un diseño innovador para un equipo en constante evolución, inspirado en el icónico tren que bordea La Bombonera. Su tejido ligero, los modernos paneles de mesh y la tecnología de absorción AEROREADY se combinan para mantener cómodos a los hinchas del club. Hecho con materiales 100% reciclados, este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos",
    "foto": "multimedia/camiseta_boca.png",
    "precio": 124999
  },

  {
    "id": 1002,
    "nombre": "Campera All-Weather Boca Juniors",
    "descripcion": "Esta campera adidas de Boca Juniors mantiene tu cuerpo abrigado y seco. Tiene un dobladillo trasero alargado para una máxima protección contra el frío. La solapa frontal, los puños ajustables y el tejido que repele el agua son indispensables para cuando llega la lluvia. El escudo de Boca Juniors deja en evidencia tus preferencias futboleras a la vista de todos.",
    "foto": "multimedia/campera_boca.png",
    "precio": 99999
  },

  {
    "id": 1003,
    "nombre": "Mate con bombilla Boca Juniors",
    "descripcion": "¡Celebra tu pasión por el fútbol con nuestro exclusivo Mate Pampa Personalizado de Boca Juniors! Este elegante mate, cincelado en premium, está forrado en cuero vacuno y cuenta con un interior de calabaza, garantizando una experiencia única en cada sorbo.",
    "foto": "multimedia/mate_boca.jpg",
    "precio": 34999
  },

  {
    "id": 1004,
    "nombre": "Termo de acero inoxidable Boca Juniors",
    "descripcion": "El Termo de acero oficial de Boca Juniors es el compañero ideal de tardes de estudio, salidas o reuniones con amigos. Su doble pared de acero inoxidable y el proceso de vacío exclusivo garantizan una alta performance del producto y asegura el mantenimiento de temperatura por muchas horas. Con tapa plástica y pico matero para un cebado óptimo impidiendo que el líquido se derrame.",
    "foto": "multimedia/termo_boca.jpg",
    "precio": 79999
  },

  {
    "id": 1005,
    "nombre": "Botines De Boca adidas Goletto 8",
    "descripcion": "No importa si los estás anotando o parando, el deporte rey se trata de goles. Estos botines adidas Goletto VIII lucen un exterior sintético moderno que incorpora costuras en el antepié para un mayor control y un cómodo acolchado en el talón. La suela de caucho con tapones se adhiere al pasto sintético para ayudarte a brillar. Hechos parcialmente con contenido reciclado generado a partir de desechos de producción, tales como recortes de tela y desechos domésticos postconsumo, para evitar un mayor impacto ambiental al producir contenido virgen.",
    "foto": "multimedia/botinesBoca.png",
    "precio": 94999
  },

  {
    "id": 1006,
    "nombre": "Mochila De Boca Rigida Porta Notebook Urbana",
    "descripcion": "Disfrutá de llevar con vos todo lo que necesitás para pasar tiempo fuera del hogar. Elegí el mejor producto que se adapte a lo que estás buscando, siempre persiguiendo la calidad y la practicidad para aprovechar cada uno de tus planes. Comodidad y elegancia, si sos fan de Boca este accesorio no puede faltar en tu guardarropas, su diseño es ideal para llevarlo a donde sea y además, podés combinarlo con looks de día, de noche, casuales o de fiesta.",
    "foto": "multimedia/mochilaBoca.png",
    "precio": 29999
  }
];

document.addEventListener("DOMContentLoaded", (event) => {

  let contenedorItems = document.getElementById('eShop');
  let contenedorIndividual = document.createElement('div');
  contenedorIndividual.classList.add('contenedorItems');

  for(let i=0; i<items.length; i++)
      contenedorIndividual.innerHTML += `
          <div class="card" >
            <h3 id="nombre" name="nombre" class ="nombre">${items[i].nombre}</h3>
            <br>
            <div>
              <image class="itemImagen" src="${items[i].foto}" width=40% alt="${items[i].nombre}">
            <div>
            <p id="precio" name="precio" class="precio">$${items[i].precio}</p>
            <br>
            <button id="btnDetalles${items[i].id}" class="boton" onclick="mostrarDetalles(${items[i].id})">Detalles</button>
            <br>
            <div id="detalles${items[i].id}" class="detalles">
              <p>${items[i].descripcion}</p>
              <button id="ocultarDetalles${items[i].id}" class="boton" onclick="ocultarDetalles(${items[i].id})">Ocultar Detalles</button>
              <br>
              <button class="boton" value="Comprar">Comprar</button>
            </div>
            <button id="btnComprar${items[i].id}" class="boton" value="Comprar">Comprar</button>
          </div>            
       `;
      contenedorItems.append(contenedorIndividual);
    });


function mostrarDetalles(id) {

  event.preventDefault();

  let idx = id.toString();
  let descripcion = 'detalles' + idx;
  let btnDetalles = 'btnDetalles' + idx;
  let btnComprar = 'btnComprar' + idx;

  document.getElementById(descripcion).style.display = "block";
  document.getElementById(btnComprar).style.display = "none";
  document.getElementById(btnDetalles).style.display = "none";
}

function ocultarDetalles(id) {

  event.preventDefault();

  let idx = id.toString();
  let descripcion = 'detalles' + idx;
  let btnDetalles = 'btnDetalles' + idx;
  let btnComprar = 'btnComprar' + idx;

  document.getElementById(descripcion).style.display = "none";
  document.getElementById(btnComprar).style.display = "inline";
  document.getElementById(btnDetalles).style.display = "inline";
}
