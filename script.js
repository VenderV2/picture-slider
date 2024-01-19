const imagesArray = [];

class Image {
    constructor(imgPath, id) {
        this.imgPath = imgPath
        this.id = id
        this.store()
    }
    store() {
        imagesArray.push(this)
    }
    static create() {
        const imageArea = document.querySelector('.images')
        imagesArray.forEach(image => {
            const newImage = document.createElement('img')
            newImage.classList.add('images-individual')
            newImage.setAttribute('src', image.imgPath)
            imageArea.appendChild(newImage)
        });
    }
    static destroy() {
        const myNode = document.querySelector(".images");
        while (myNode.firstChild) {
          myNode.removeChild(myNode.lastChild);
        }
    }
}
const img1 = new Image('pictures/account-badge.svg', 1)
const img2 = new Image('pictures/bell-outline.svg', 2)
const img3 = new Image('pictures/home.svg', 3)
const img4 = new Image('pictures/plus.svg', 4)
const img5 = new Image('pictures/view-dashboard.svg', 5)

Image.create()

function buttonLogic() {
    const images = document.querySelector('.images')
    const nextBtn = document.querySelector('#next-button');
    let i = 400
    let imageCounter = 1;
    nextBtn.addEventListener('click', moveNext)
    function moveNext() {
        images.style.transform = 'translate(-' + i + 'px)'
        i += 400
        imageCounter++
    
        if (imageCounter > imagesArray.length) {
            Image.destroy()
            Image.create()
            imageCounter = 1
            images.style.transform = ''
            i = 400
        }
    }
    let intervalID;
    if (!intervalID) {
        intervalID = setInterval(moveNext, 5000)
    }

}
buttonLogic()







