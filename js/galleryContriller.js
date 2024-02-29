'use strict'

let gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['trump', 'angry'] },
    { id: 2, url: 'img/2.jpg', keywords: ['dog', 'kiss'] },
    { id: 3, url: 'img/3.jpg', keywords: ['baby', 'cute'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat', 'cute'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby', 'angry'] },
    { id: 6, url: 'img/6.jpg', keywords: ['man', 'funy'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby', 'surprize'] },
    { id: 8, url: 'img/8.jpg', keywords: ['cat', 'cute'] },
    { id: 9, url: 'img/9.jpg', keywords: ['cat', 'cute'] },
    { id: 10, url: 'img/10.jpg', keywords: ['cat', 'cute'] },
    { id: 11, url: 'img/11.jpg', keywords: ['cat', 'cute'] },
    { id: 12, url: 'img/12.jpg', keywords: ['cat', 'cute'] },
    { id: 13, url: 'img/13.jpg', keywords: ['cat', 'cute'] },
    { id: 14, url: 'img/14.jpg', keywords: ['cat', 'cute'] },
    { id: 15, url: 'img/15.jpg', keywords: ['cat', 'cute'] },
    { id: 16, url: 'img/16.jpg', keywords: ['cat', 'cute'] },
    { id: 17, url: 'img/17.jpg', keywords: ['cat', 'cute'] },
    { id: 18, url: 'img/18.jpg', keywords: ['cat', 'cute'] },
]

function onInit() {
    renderGallery()
}

function renderGallery() {
    const elMainImgContainer = document.querySelector('.gallery-container')
    
    let strHtmls = gImgs.map(img =>`
    <img id="${img.id}" src="${img.url}" alt="${img.keywords}" title="${img.keywords}" onclick="onImgSelect(this)">    
    `)

    elMainImgContainer.innerHTML = strHtmls.join('')
}

function onImgSelect({id}){
    setImg(id)
    const elMainImgContainer = document.querySelector('.main-gallery-container')
    elMainImgContainer.style.display = 'none'
    renderMeme()
}

function onFlexibleBtn(){
    setImg(getRandomInt(1,18))
    const elMainImgContainer = document.querySelector('.main-gallery-container')
    elMainImgContainer.style.display = 'none'
    renderMeme()
}