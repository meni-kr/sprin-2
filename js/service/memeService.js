'use strict'

let gMeme = {
    selectedImgId: 7,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: '#ffffff'
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
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    gMeme.selectedLineIdx = 0
    gMeme.lines[gMeme.selectedLineIdx].size = 35
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
            txt: 'I sometimes',
            size: 20,
            color: '#ffffff'
        }
        )
        
}

function switchLine() {
    if(gMeme.lines.length===1) return
    if (!gMeme.selectedLineIdx) gMeme.selectedLineIdx = 1
    else gMeme.selectedLineIdx = 0
    
    return gMeme.lines[gMeme.selectedLineIdx].txt

}