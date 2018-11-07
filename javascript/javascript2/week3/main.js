document.getElementById('aButton').addEventListener('click', getData);


//01
//function getData(){
//    fetch('https://api.github.com/orgs/HackYourFuture-CPH/repos')
//        .then((res) => res.json())
//        .then(hyfJSON => {
//        document.getElementById('info').innerHTML = JSON.stringify(hyfJSON);
//        
//        })
//};

//02
function getData(){
    fetch('https://api.github.com/orgs/HackYourFuture-CPH/repos')
        .then((res) => res.json())
        .then(hyfJSON => {
        let name = '';
        hyfJSON.forEach((nameId)=> {
            name += `<ul><li id="${nameId.name}">${nameId.name}</li></ul>`;     
        });
        document.getElementById('info').innerHTML = name;
        })
};


