// console.log('connected ')

const loadLeassons = () =>{
    // give a reponse 
    fetch('https://openapi.programming-hero.com/api/levels/all') 
    .then((rse) => rse.json())
    .then((json) => displayLeasson(json.data))
}

const loadLevelWord = (id) => {

    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    
    fetch(url)
    .then(rse => rse.json())
    .then((data) => displayLevelWords(data.data))

}

const displayLevelWords = (words) => {
    // console.log(words)
    // 1.get the container and empty contaner 
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';

    
    /*
 {id: 80, 
 level: 1,
 word: 'Run', 
 meaning: 'দৌড়ানো', 
 pronunciation: 'রান'
    */
    // 2.get into every leassons
    words.forEach((word) => {
        console.log(word);
        const card = document.createElement('div');
        card.innerHTML = `
           <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5">
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold">${word.meaning}</p>
        <div class="font-medium text-2xl font-Bangla">${word.pronunciation}</div>
        <div class="flex justify-between items-center">
            <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF90] "><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF90]  "><i class="fa-solid fa-volume-high"></i></button>
            
        </div>
    </div>
        `;
        wordContainer.append(card)
    })


}

// loadLeassons()

const displayLeasson = (leassons) => {
    // 1. get the container 
    const levelContainer = document.getElementById('lebel-container');
    levelContainer.innerHTML = "";

    // 2.get into every leassons

    for(let leasson of leassons){
        // 3. create element 
        console.log(leasson)
        const  btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
         <button onclick="loadLevelWord(${leasson.level_no})" class="btn btn-outline btn-primary">
         <i class="fa-solid fa-book"></i>
         Leasson-${leasson.level_no}
         </button>
        `

        // 4. append into the container 
        levelContainer.append(btnDiv);


    }

}

loadLeassons()