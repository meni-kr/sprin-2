'use strict'



var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

let gElCanvas = document.querySelector('canvas')
let gCtx = gElCanvas.getContext('2d')


function renderMeme() {
    const elMemeEditorContainer = document.querySelector('.meme-editor-container')
    elMemeEditorContainer.style.display = 'flex'

    let meme = getMeme()

    meme.lines[0].txtLength = gCtx.measureText(`${meme.lines[0].txt}`).width
    var text1Height = meme.lines[meme.selectedLineIdx].size
    var text1Length = gCtx.measureText(`${meme.lines[meme.selectedLineIdx].txt}`).width
    
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme) 
        if(!meme.selectedLineIdx){
            gCtx.strokeRect( meme.lines[0].x, meme.lines[0].y - text1Height  ,  text1Length +meme.lines[0].x ,  meme.lines[0].y + 10)
            
        }else if(meme.selectedLineIdx && meme.lines.length > 1){
            gCtx.strokeRect( meme.lines[1].x, 250 - text1Height  ,  text1Length +meme.lines[1].x ,  text1Height+10 )
        }
    }
}

function drawText(meme) {
    
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = `${meme.lines[0].color}`
    
    gCtx.font = `${meme.lines[0].size}px Arial`
    gCtx.fillText(meme.lines[0].txt, meme.lines[0].x, meme.lines[0].y)
    gCtx.strokeText(meme.lines[0].txt, meme.lines[0].x, meme.lines[0].y)
    gCtx.closePath()
    
    
    
    if (meme.lines.length > 1) {
        meme.lines[1].txtLength = gCtx.measureText(`${meme.lines[1].txt}`).width
        gCtx.beginPath()
        gCtx.lineWidth = 2
        gCtx.strokeStyle = `${meme.lines[1].color}`
        
        gCtx.font = `${meme.lines[1].size}px Arial`
        
        gCtx.fillText(meme.lines[1].txt, meme.lines[1].x, meme.lines[1].y)
        gCtx.strokeText(meme.lines[1].txt, meme.lines[1].x, meme.lines[1].y)
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
    renderMeme()
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
    renderMeme() 
}

function onMouseDown(ev){
    let meme = getMeme()
    meme.lines[0].txtLength = gCtx.measureText(`${meme.lines[0].txt}`).width
    if (meme.lines.length > 1){
        meme.lines[1].txtLength = gCtx.measureText(`${meme.lines[1].txt}`).width
    }
    const { offsetX, offsetY, clientX, clientY } = ev
    
    const hoveredStar = meme.lines.find(line => {
        const { x, y, size ,txtLength} = line
        return offsetX >= x && offsetX <= x + txtLength &&
        offsetY <= y && offsetY <= y + size
    })
    
    if(hoveredStar){
        onSwitchLineBtn()
    }
}