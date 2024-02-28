'use strict'

let gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['trump', 'angry'] },
    { id: 2, url: 'img/2.jpg', keywords: ['dog', 'kiss'] },
    { id: 3, url: 'img/3.jpg', keywords: ['baby', 'cute'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat', 'cute'] },
]

function onInit() {

    renderGallery()


}


function renderGallery() {
    const elMainImgContainer = document.querySelector('.gallery-container')
    
    let strHtmls = gImgs.map(img =>`
    <img src="${img.url}" alt="${img.keywords}" title="${img.keywords}">    
    `)

    elMainImgContainer.innerHTML = strHtmls.join('')
}