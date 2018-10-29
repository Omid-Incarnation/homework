//Step 1: Custom DOM manipulation challenge

const nameId = ["the-ice-monster",
               "the-wonky-donkey",
               "ottolenghi-simple",
               "brief-answers-to-the-big-questions",
               "you-are-awesome"];
//function bookShelf(){
//    const ulmaker = document.createElement('ul');
//    
//    for (let i = 0; i < bookTitles.length; i++){
//        const liMaker = document.createElement('li');
//        
//        liMaker.innerHTML = bookTitles[i];
//        
//        ulmaker.appendChild(liMaker);
//    }
//
//    
//    
//    document.body.appendChild(ulmaker);
//}
//
//bookShelf();


const bookTitles =[ 
    {id: nameId[0],
    title: "The Ice Monster",
    author: "David Walliams",
    price: "30 DKK"},
    
    {id: nameId[1],
    title: "The Wonky Donkey",
    author: "Craig Smith",
    price: "70 DKK"},
    
    {id: nameId[2],
    title: "Ottolenghi SIMPLE",
    author: "Yotam Ottolenghi",
    price: "50 DKK"},
    
    {id: nameId[3],
    title: "Brief Answers to the Big Questions",
    author: "Stephen Hawking",
    price: "110 DKK"},
    
    {id: nameId[4],
    title: "You Are Awesome",
    author: "Matthew Syed",
    price: "40 DKK"},
];

const bookCover = [
    {id: nameId[0],
    imagLink: "imgBookCover/the-ice-monster.jpg",},
    
    {id: nameId[1],
    imagLink: "imgBookCover/the-wonky-donkey.jpg",},
    
    {id: nameId[2],
    imagLink: "imgBookCover/ottolenghi-simple.jpg",},
    
    {id: nameId[3],
    imagLink: "imgBookCover/brief-answers-to-the-big-questions.jpg",},
    
    {id: nameId[4],
    imagLink: "imgBookCover/you-are-awesome.jpg",},
    
];


function bookShelf(){
    const ulMaker = document.createElement('ul');
    
    for (let i = 0; i < bookTitles.length; i++){
       const liMaker = document.createElement('li');
        const header = document.createElement('h2');
        const cover = document.createElement('img')
        const writer = document.createElement('h4');
        const money = document.createElement('p');
        
        
        header.innerHTML = bookTitles[i].title;
        cover.setAttribute('src', bookCover[i].imagLink);
        writer.innerHTML = bookTitles[i].author;
        money.innerHTML = bookTitles[i].price;
        
        
        ulMaker.appendChild(liMaker);
        liMaker.appendChild(header);
        liMaker.appendChild(cover);
        liMaker.appendChild(writer);
        liMaker.appendChild(money);
        
    }
    
    
    document.body.appendChild(ulMaker);
}

bookShelf();