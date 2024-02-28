'use strict'

let gMeme = {
    selectedImgId: 7,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}

function getMeme(){
    return gMeme
}

function ChangeText(txt){
    return gMeme.lines[0].txt = txt
}

function setImg(imgId){
    gMeme.selectedImgId = imgId
    gMeme.selectedLineIdx = 0
}