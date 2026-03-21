// console.log('connected ')

const loadLeassons = () =>{
    // give a reponse 
    fetch('https://openapi.programming-hero.com/api/levels/all') 
    .then((rse) => rse.json())
    .then((json) => displayLeasson(json.data))
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
         <button class="btn btn-outline btn-primary">
         <i class="fa-solid fa-book"></i>
         Leasson-${leasson.level_no}
         </button>
        `

        // 4. append into the container 
        levelContainer.append(btnDiv);


    }

}

loadLeassons()