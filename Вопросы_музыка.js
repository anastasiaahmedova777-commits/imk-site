document.addEventListener("DOMContentLoaded",()=>{
    createVoprosi()
});

let ishodnijeVoprosi = [
    {
      "text":"Выберите правильного автора",
      "track":"Vezd.mp3",
        "answers":["С.С.Прокофьев","А.С.Даргомыжский","П.И.Чайковский","М.И.Глинка"],
        "truth":1  
    },
     {
      "text":"Выберите правильного автора",
      "track":"Petrushka03.mp3",
        "answers":["М.П.Мусоргский","А.С.Даргомыжский","И.Ф.Стравинский","Н.А.Римский-Корсаков"],
        "truth":3  
    },
     {
      "text":"Выберите правильное название",
      "track":"Vezd.mp3",
        "answers":["Александр Невский. Русь под игом монгольским","Александр Невский. Мёртвое поле","Александр Невский. Вставайте, люди русские","Александр Невский. Въезд Александра во Псков"],
        "truth":4  
    }, {
      "text":"Выберите правильное название",
      "track":"",
        "answers":["Александр Невский. Русь под игом монгольским","Петрушка. Картина 2: У Петрушки","Александр Невский. Въезд Александра во Псков","Петрушка. Тема уличной танцовщицы"],
        "truth":2 
    }

]


function shuffleArray(array){
    for (let i =0; i<array.length-1 ; i++){
        const j = Math.floor(Math.random()*(i+1));
        [array[i] , array[j]] = [array[j] , array[i]]
    }
    return array
}

function createVoprosi(){
    let voprosi = shuffleArray(ishodnijeVoprosi)
    let main_container = document.getElementById('main')
    for (let i in voprosi){
        let vopros = document.createElement('div')
        vopros.className = 'Vopros'
        let voprosik = document.createElement('div')
        voprosik.className = 'voprosik'
        let text_voprosa = document.createElement('div')
        text_voprosa.className = 'text_voprosa'
        text_voprosa.innerHTML = voprosi[i].text
        voprosik.appendChild(text_voprosa)
        let audio = document.createElement('audio')
        audio.controls = true
        let source_tag = document.createElement('source')
        source_tag.src = voprosi[i].track
        
        audio.appendChild(source_tag)
        voprosik.appendChild(audio)


        vopros.appendChild(voprosik)
        let otvetik = document.createElement('div')
        otvetik.className = 'otvetik'
        otvetik.id = 'q'+i
        vopros.appendChild(otvetik)
        for (let j in voprosi[i].answers){
            let variant = document.createElement('div')
            variant.className='variant'
            variant.innerHTML = voprosi[i].answers[j]
            variant.id = 'q'+i+'a'+(parseInt(j) +1).toString()
            variant.onclick = checkOtveti
            otvetik.appendChild(variant)

        }
        main_container.appendChild(vopros)
    }
}


function checkOtveti(){
    let otveti = this.parentNode
    let nomer_voprosa = otveti.id.slice(1)
    let truth = ishodnijeVoprosi[nomer_voprosa].truth
    for (let w in otveti.children){    
        otveti.children[w].onclick = null
    }

    if (this.id.slice(-1) == truth){
        this.id = 'good'
    }
    else{
            let tn = this.id.slice(0,-1)+truth
            this.id = 'bad'
            
            console.log(tn)
            document.getElementById(tn).id = 'good'            
        }

}
