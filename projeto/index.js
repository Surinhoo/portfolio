function enviarWhats(event) {

    event.preventDefault()
    const nome = document.getElementById('namep').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5551985412047'
    const text = `Òlá me chamo ${nome}, ${mensagem}`
    const msgformatada = encodeURIComponent(text)
    const url = `https://wa.me/${telefone}/?text=${msgformatada}`
    window.open(url, '_blank')


}