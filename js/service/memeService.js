'use strict'

let gMeme = {
    selectedImgId: 7,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'eat Falafel',
            font:'Impact',
            size: 20,
            colorStroke: '#ffffff',
            colorFill: '#000000',
            textAlign: 'center',
            x: 200,
            y:40,
            txtLength:0,
            lindID:0

        }

    ]
}

function getMeme() {
    return gMeme
}

function changeText(txt) {
    return gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function changeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].colorFill = color
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    gMeme.selectedLineIdx = 0
    gMeme.lines[gMeme.selectedLineIdx].size = 35
    gMeme.lines[gMeme.selectedLineIdx].font = 'Impact'
    gMeme.lines[gMeme.selectedLineIdx].textAlign = 'center'
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size++
}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].size--
}

function addLine() {
    
    if(gMeme.lines.length>1) return
    
    gMeme.lines.push(
        {
            txt: 'sometimes',
            font:'Impact',
            size: 20,
            colorStroke: '#ffffff',
            colorFill: '#000000',
            textAlign: 'center',
            x: 200,
            y:350,
            txtLength:0,
            lindID:1
        }
        )
        
}

function switchLine() {
    if(gMeme.lines.length===1) return
    if (!gMeme.selectedLineIdx) gMeme.selectedLineIdx = 1
    else gMeme.selectedLineIdx = 0
    
    return gMeme.lines[gMeme.selectedLineIdx].txt

}

function setFont(font){
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function alignText(value){
    
    gMeme.lines[gMeme.selectedLineIdx].textAlign = value
    
}