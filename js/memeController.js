'use strict'

let gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gElCanvas
let gCtx


function onInit() {
     gElCanvas = document.querySelector('canvas')
     gCtx = gElCanvas.getContext('2d')
     renderMeme(gImgs)

    
}

function renderMeme([{url}]) {
    const elImg = new Image()
    elImg.src = url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText('thats it!',200,200)
    }
    
    
    
}



function drawText(text, x, y) {
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'orange'

    

    gCtx.font = '35px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}