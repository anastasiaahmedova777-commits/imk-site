
document.addEventListener("DOMContentLoaded",()=>{
    createVoprosi()
});

let ishodnijeVoprosi = [
    {
      "text":"Кто написал Балет Петрушка?",
        "answers":["И.Ф.Стравинский","М.П.Мусорский","М.И.Глинка","Н.А.Римский-Корсаков"],
        "truth":1  
    },
     {
      "text":"Где родился М.И.Глинка?",
        "answers":["В селе Карево Псковской губернии","В Воткинске","В селе Новоспассом Смоленской губернии","В селе Троицком Тульской губернии"],
        "truth":3  
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
        voprosik.innerHTML = voprosi[i].text
        vopros.appendChild(voprosik)
        let otvetik = document.createElement('div')
        otvetik.className = 'otvetik'
        otvetik.id = 'q'+i
        vopros.appendChild(otvetik)
        for (let j in voprosi[i].answers){
            let variant = document.createElement('button')
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
    otveti.style.pointerEvents = 'none'
    }




