function poisk(event){
    event.preventDefault()
    let musicsklad = document.getElementsByClassName("musicbox");
    let zapros = document.getElementsByTagName("input")[0].value.toLowerCase();

    
    for (index in musicsklad){
        let musicbox=musicsklad[index]
            console.log(musicbox);
        let musicbox_compozitor = musicbox.children[0].children[0].innerHTML.toLowerCase();
        console.log(musicbox_compozitor)
        if (musicbox_compozitor.includes(zapros)){
                musicbox.style.display = "flex"

        }
        else{
            console.log("!!!");
            musicbox.style.display = "none"
        }
    }
}