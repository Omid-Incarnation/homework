console.log('Hi!');

function listmaker(){
    const ulmaker = document.createElement('ul');
    
    for (let i = 0; i < JSONyhf.length; i++){
        const liMaker = document.createElement('li');
        
        liMaker.innerHTML = JSONyhf[i].name;
        ulmaker.appendChild(liMaker);
    }
    
    document.body.appendChild(ulmaker);
}

listmaker();