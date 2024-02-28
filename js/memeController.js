'use strict'



var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gElCanvas= document.querySelector('canvas')
let gCtx= gElCanvas.getContext('2d')




function renderMeme() {
    const elMemeEditorContainer = document.querySelector('.meme-editor-container')
    elMemeEditorContainer.style.display = 'flex'

    let meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme,200,200)
    }
}

function drawText(meme, x, y) {
    
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${meme.lines[meme.selectedLineIdx].color}`

    gCtx.font = '35px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(meme.lines[meme.selectedLineIdx].txt, x, y)
    gCtx.strokeText(meme.lines[meme.selectedLineIdx].txt, x, y)
}

function onChangeText(txt){
    changeText(txt)
    renderMeme()
}

function onChangeColor(color){
    changeColor(color)
    renderMeme()
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}