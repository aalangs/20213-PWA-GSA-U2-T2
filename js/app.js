let path = '/20213-PWA-GSA-U2-T2/sw.js';
let url = window.location.href;

//Componentes
let player = $('#player');
let photoUser = $('#photoUser');
let listImg = $('#listImg')

//Botones
let btnCamera = $('#btnCamera');
let btnCameraBack = $('#btnCameraBack');
let btnTakePhoto = $('#btnTakePhoto');

//Crear camara
const camera = new Camera(player[0]);

//frontal/trasera
let typePhoto = "";

btnCamera.on('click', () => {
    typePhoto = "Frontal";
    camera.on()
    .then( res => {
        if (!res) {
            alert('Error al iniciar la cámara');
        }
    })
})

btnCameraBack.on('click', () => {
    typePhoto = "Trasera";
    camera.on_back()
    .then( res => {
        if (!res) {
            alert('Error al iniciar la cámara trasera');
        }
    })
})

btnTakePhoto.on('click', () => {
    camera.off()
    let img_base64 = createCard(camera.take_photo())
    $('#listImg').append(img_base64)
})

function createCard(image) {
    let card = $(`
        <div class="col-12 pt-3">
            <div class="card">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-footer text-center">
                <b>${typePhoto}</b>
            </div>
            </div>
        </div>
    `);

    return card;
}

if (navigator.serviceWorker) {
    if (url.includes('localhost') || url.includes('127.0.0.1')) {
        path = '/sw.js'
    }
    navigator.serviceWorker.register(path)
}