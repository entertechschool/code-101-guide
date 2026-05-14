// 1. Función helper: aplica o quita los estilos de "logrado" a un sueño
function alternarLogrado(sueno, estaLogrado) {
  if (estaLogrado) {
    sueno.style.backgroundColor = '#f0fdf4';
    sueno.style.borderColor = '#16a34a';
    sueno.style.opacity = '0.75';
    sueno.style.textDecoration = 'line-through';
  } else {
    sueno.style.backgroundColor = '#ffffff';
    sueno.style.borderColor = '#fed7aa';
    sueno.style.opacity = '1';
    sueno.style.textDecoration = 'none';
  }
}

// 2. Contador global de sueños logrados
let totalLogrados = 0;
const contador = document.getElementById('num-logrados');

function actualizarContador() {
  contador.textContent = totalLogrados;
}

// 3. Sueño 1
let estado1 = false;
const sueno1 = document.getElementById('sueno-1');
sueno1.addEventListener('click', function() {
  if (estado1) {
    estado1 = false;
    totalLogrados = totalLogrados - 1;
  } else {
    estado1 = true;
    totalLogrados = totalLogrados + 1;
  }
  actualizarContador();
  alternarLogrado(sueno1, estado1);
});

// 4. Sueño 2
let estado2 = false;
const sueno2 = document.getElementById('sueno-2');
sueno2.addEventListener('click', function() {
  if (estado2) {
    estado2 = false;
    totalLogrados = totalLogrados - 1;
  } else {
    estado2 = true;
    totalLogrados = totalLogrados + 1;
  }
  actualizarContador();
  alternarLogrado(sueno2, estado2);
});

// 5. Sueño 3
let estado3 = false;
const sueno3 = document.getElementById('sueno-3');
sueno3.addEventListener('click', function() {
  if (estado3) {
    estado3 = false;
    totalLogrados = totalLogrados - 1;
  } else {
    estado3 = true;
    totalLogrados = totalLogrados + 1;
  }
  actualizarContador();
  alternarLogrado(sueno3, estado3);
});

// 6. Sueño 4
let estado4 = false;
const sueno4 = document.getElementById('sueno-4');
sueno4.addEventListener('click', function() {
  if (estado4) {
    estado4 = false;
    totalLogrados = totalLogrados - 1;
  } else {
    estado4 = true;
    totalLogrados = totalLogrados + 1;
  }
  actualizarContador();
  alternarLogrado(sueno4, estado4);
});

// 7. Sueño 5
let estado5 = false;
const sueno5 = document.getElementById('sueno-5');
sueno5.addEventListener('click', function() {
  if (estado5) {
    estado5 = false;
    totalLogrados = totalLogrados - 1;
  } else {
    estado5 = true;
    totalLogrados = totalLogrados + 1;
  }
  actualizarContador();
  alternarLogrado(sueno5, estado5);
});

// 8. Sueño 6
let estado6 = false;
const sueno6 = document.getElementById('sueno-6');
sueno6.addEventListener('click', function() {
  if (estado6) {
    estado6 = false;
    totalLogrados = totalLogrados - 1;
  } else {
    estado6 = true;
    totalLogrados = totalLogrados + 1;
  }
  actualizarContador();
  alternarLogrado(sueno6, estado6);
});
