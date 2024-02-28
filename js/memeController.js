'use strict'

var gImgs = [{id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']}]
var gMeme = {
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
var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}
const gElCanvas = document.querySelector('canvas')
const gCtx = gElCanvas.getContext('2d')



function onInit(){
    renderMeme()
}

function renderMeme(){
    
    drawText('hay',100,100)
    drawImg(gImgs)
}




function drawImg([{url}]) {
    
    const elImg = new Image()
    elImg.src = url
    elImg.onload = () => 
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

       
}