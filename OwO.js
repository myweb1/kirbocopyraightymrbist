function startingtochambear() {
    navigator.mediaDevices.getUserMedia({ audio: "true" })
    audiotm = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3Rzd9sVFm/model.json", readi)

}
function readi() {
    console.log("siuuuuuuuu_lo_logre_siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
    audiotm.classify(wuasa)
}
function wuasa(error, result) {
    if (!error) {
        console.log(result)
        sound = result[0].label
        if (sound == "( ͡° ͜ʖ ͡°)") { document.getElementById("img2gifs").src = "gifss.gif" 
        document.getElementById("img1load").src = "loadik.gif"
        document.getElementById("img3elkirbo").src = "elkirboparado.gif"
        document.getElementById("img4elhola").src = "elholaparado.gif"
    }
        if (sound == "bu") { document.getElementById("img1load").src = "loadin.gif"
        document.getElementById("img3elkirbo").src = "elkirboparado.gif"
        document.getElementById("img4elhola").src = "elholaparado.gif"
        document.getElementById("img2gifs").src = "gifss.png" 
    }
        if (sound == "aplauso") { document.getElementById("img4elhola").src = "el hola.gif"
        document.getElementById("img3elkirbo").src = "elkirboparado.gif"
        document.getElementById("img2gifs").src = "gifss.png" 
        document.getElementById("img1load").src = "loadik.gif"
    
    }
        if (sound == "Background Noise") { document.getElementById("img3elkirbo").src = "el kirbo.gif" 
        document.getElementById("img2gifs").src = "gifss.png" 
        document.getElementById("img1load").src = "loadik.gif"
        document.getElementById("img4elhola").src = "elholaparado.gif"
    }
    document.getElementById("te_escucho").innerHTML=sound
    document.getElementById("porcentage").innerHTML=result[0].confidence
    }
}
var sound = ""
