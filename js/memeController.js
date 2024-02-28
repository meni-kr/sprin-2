'use strict'



var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gElCanvas = document.querySelector('canvas')
let gCtx = gElCanvas.getContext('2d')




function renderMeme() {
    const elMemeEditorContainer = document.querySelector('.meme-editor-container')
    elMemeEditorContainer.style.display = 'flex'

    let meme = getMeme()
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme, 200, 50)
    }
}

function drawText(meme, x, y) {
    

    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${meme.lines[0].color}`

    gCtx.font = `${meme.lines[0].size}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(meme.lines[0].txt, x, y)
    gCtx.strokeText(meme.lines[0].txt, x, y)
    gCtx.closePath()

    if (meme.lines.length > 1) {
        
        gCtx.beginPath()
        gCtx.lineWidth = 2
        gCtx.strokeStyle = `${meme.lines[1].color}`

        gCtx.font = `${meme.lines[1].size}px Arial`
        gCtx.textAlign = 'center'
        gCtx.textBaseline = 'middle'

        gCtx.fillText(meme.lines[1].txt, x, 250)
        gCtx.strokeText(meme.lines[1].txt, x, 250)
        gCtx.closePath()
    }


}

function onChangeText(txt) {
    changeText(txt)
    renderMeme()
}

function onChangeColor(color) {
    changeColor(color)
    renderMeme()
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onIncreaseFontBtn() {
    increaseFont()
    renderMeme()
}

function onDecreaseFontBtn() {
    decreaseFont()
    renderMeme()
}

function onAddLineBtn() {
    addLine()
    onSwitchLineBtn()
    renderMeme()
}

function onSwitchLineBtn() {
    const elInput = document.getElementById('search')  
   elInput.value = switchLine()

}