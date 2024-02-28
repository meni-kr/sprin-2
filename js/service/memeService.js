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

function getMeme(){
    return gMeme
}

function changeText(txt){
    return gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function changeColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setImg(imgId){
    gMeme.selectedImgId = imgId
    gMeme.selectedLineIdx = 0
}