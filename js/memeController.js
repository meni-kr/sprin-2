'use strict'



var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gElCanvas= document.querySelector('canvas')
let gCtx= gElCanvas.getContext('2d')




function renderMeme() {
    let meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme.lines[meme.selectedLineIdx].txt,200,200)
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

function onChangeText(txt){
    ChangeText(txt)
    renderMeme()
}