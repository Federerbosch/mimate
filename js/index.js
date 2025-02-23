const producto = []

const URL = "js/producto.json"

const container = document.querySelector('div.container.container-card')


const retornarCardHtml= (yuyos) => {
    return `<div class="card">
                <div class="card-imagen"><img class="producto-imagen" src="${yuyos.imagen}"></div>
                <div class="card-name">${yuyos.nombre}</div>
            </div>`
}

const activarClickEnBotones= ()=>{
    const botonAgregar = document.querySelectorAll('button.button-outline')
    if(botonAgregar !== null){
        botonAgregar.forEach((button)=>{
            button.addEventListener('click', (e)=>{
                agregarAlCarrito(e.target.id)
            })
        })
    }
}


const cargarProductos = (array)=>{
    if(array.length > 0){
        container.innerHTML = ""
        array.forEach(producto => {
            container.innerHTML += retornarCardHtml(producto)
        })
        activarClickEnBotones()
    }
}


const obtenerProductos = ()=> {
    fetch(URL)
    .then((response)=> response.json())
    .then((data) => producto.push(...data))
    .then(()=> cargarProductos(producto))
}

obtenerProductos()