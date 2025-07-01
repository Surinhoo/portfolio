const modal = document.querySelector('.modal')
const maskModal = document.querySelector('.mask2')
const btn = document.getElementById('btn')

function showModal(){
    modal.style.left = '50%'
    maskModal.style.visibility = 'visible';
}

function hiddenModal(){
    modal.style.left = '-30%'
    maskModal.style.visibility = 'hidden';

}

function alertBtn(){
    alert('Clicando aqui poderá ir direto para um whatsapp de sua loja!')
}
