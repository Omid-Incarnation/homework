//document.getElementById('aButton').addEventListener('click', getData);


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
//function getData(){
//    fetch('https://api.github.com/orgs/HackYourFuture-CPH/repos')
//        .then((res) => res.json())
//        .then(hyfJSON => {
//        let name = '';
//        hyfJSON.forEach((nameId)=> {
//            name += `<ul><li id="${nameId.name}">${nameId.name}</li></ul>`;     
//        });
//        document.getElementById('info').innerHTML = name;
//        })
//};

document.getElementById('repositoryNameButton').addEventListener('click', aFunction);

function aFunction() {
    fetch('https://api.github.com/orgs/HackYourFuture-CPH/repos')
    .then((res) => res.json())
    .then(hyfJSON => {console.log(hyfJSON);
                      const ulMaker = document.createElement('ul');
                      let liMaker = '';
                      
                      hyfJSON.forEach((x) => {
                          liMaker += `<li class="moreInfo"><a href="#">${x.name}</a>
                                            <ul class="hidenUl">
                                                <li>Full Name: ${x.full_name}</li>
                                                <li>Forks Count: ${x.forks_count}</li>
                                            </ul>
                                        </li>`
                      });
                      
                      ulMaker.innerHTML = liMaker;
                      document.getElementById('repNames').appendChild(ulMaker);
                      console.log(ulMaker);
                     });
    
}

