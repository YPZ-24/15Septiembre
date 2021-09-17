const body = document.querySelector('body')
const conteGallery = document.querySelector('#conte-gallery')
const title = document.querySelector('#conte-text > h3')
const audio = document.querySelector('audio')
audio.play()

const createItemGallery = ({desc: description, img: imgSrc}) => {
    const itemGallery = document.createElement('div')
    itemGallery.className = 'item-gallery'
    const img = document.createElement('img')
    img.src = '../src/me/'+imgSrc
    const div = document.createElement('div')
    div.className = 'item-gallery-backdrop'
    const p = document.createElement('p')
    p.className = 'item-gallery-description'
    p.textContent = description

    itemGallery.append(img, div, p)

    return itemGallery
}

body.onload = () => {
    let currentDiv
    conteGallery.addEventListener('mousemove', (e) => {
        if(currentDiv != e.target){
            currentDiv = e.target
            title.textContent = currentDiv.parentNode.querySelector('.item-gallery-description').textContent
        }
    })
    let itemsGallery = []
    imgs.forEach((img, i)=>{
        itemsGallery.push(createItemGallery(img))
    })
    conteGallery.append(...itemsGallery)

}
