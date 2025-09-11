function enviarWhats(event) {

    event.preventDefault()
    const nome = document.getElementById('namep').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5551985412047'
    const text = `Olá, me chamo ${nome}, ${mensagem}`
    const msgformatada = encodeURIComponent(text)
    const url = `https://wa.me/${telefone}/?text=${msgformatada}`
    window.open(url, '_blank')


}


const switchBtn = document.getElementById('btn-switch');
const body = document.body;
const foto = document.querySelector('.perfilPhoto');
const nav = document.querySelector('.navegacao');
const formButton = document.querySelector('.form-button');
const nameClass = document.querySelector('.name-class');
const titleBtn = document.querySelector('.title-switch');

let temaEscuro = true;

switchBtn.addEventListener('change', () => {
  temaEscuro = !temaEscuro;

  if (temaEscuro) {
  
    body.style.setProperty('background-color', 'var(--escuro)');
    body.style.setProperty('color', 'var(--claro)');
    document.documentElement.style.setProperty('font-family', "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
    foto.src = './img/fotopportfolio.jpg';
    nav.style.backgroundColor = ''
    folhas.style.display = 'none'; // ❌ Esconde folhas
    nameClass.style.color = 'var(--primary)';
    titleBtn.textContent = "Switch Anime Mode";
    formButton.style.background = 'var(--primary)';
  } else {
  
    body.style.setProperty('background-color', '#246724');
    body.style.setProperty('color', '#222');
    document.body.style.color = 'white'
    document.documentElement.style.setProperty('font-family', "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
    foto.src = './img/fotopportfolio-anime.jpg';
    nav.style.backgroundColor = 'rgba(0, 36, 11, 0.8)'
    folhas.style.display = 'block'; // 🌿 Ativa folhas
    nav.style.zIndex = '25';
    formButton.style.background = 'rgba(0, 36, 11, 0.8)';
    nameClass.style.color = 'white';
    titleBtn.textContent = "Switch Normal Mode";
  }
});

const folhas = document.getElementById('folhas');

function toggleReadMore() {
  const moreText = document.querySelector(".more-text");
  const btn = document.querySelector(".read-more-btn");

  moreText.classList.toggle("open");
  btn.classList.toggle("active");

  if (moreText.classList.contains("open")) {
    btn.innerHTML = '<span class="arrow">▲</span> Ler menos';
  } else {
    btn.innerHTML = '<span class="arrow">▼</span> Ler mais';
  }
}
