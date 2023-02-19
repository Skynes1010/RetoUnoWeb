const btnTotal = document.getElementById('btnTotal');

const num1 = 400000;

let colors = { //Objeto para los colores
  y: 'yellow',
  g: 'green',
  r: 'red',
  p: 'purple',
  d: 'darkblue',
  m: 'grey'
};

btnTotal.addEventListener('click', () => {
  const cantidad = document.getElementById('cantidad').value;
  const color = document.getElementById('color').value;
  const result = document.getElementById('result'); // Lo traemos pero el html, sin el velor
  const backgroude = document.getElementById('backgroude');
  const colorFinal = colors[color]; // Aquí se encuentran todos los colores del obejeto en [color]

  backgroude.style.background = colorFinal;

  //console.log(colorFinal);

  result.innerHTML = `<h1>Total: $${cantidad * num1}</h1><p>Cantidad: ${cantidad}</p><p>Color:</p>`;
});
