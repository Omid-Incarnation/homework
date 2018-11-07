console.log('Java Script 03 Week 01');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

const doubleOddNumbers = numbers.filter((odd) => odd % 2 !== 0).map((double) => double * 2);

console.log(doubleOddNumbers);


fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(res => res.json())
    .then((movies) => {
        console.log(movies);

        //Give each movie a tag: Good, Average, Bad. Based on the ratings
        const over7 = movie => movie.rating >= 7; 
        const between4To7 = movie => movie.rating >= 4 && movie.rating < 7;
        const less4 = movie => movie.rating < 4;


        const goodMovies = movies.filter(over7);
        const averageMovies = movies.filter(between4To7);
        const badMovies = movies.filter(less4);

        console.log(goodMovies);
        console.log(averageMovies);
        console.log(badMovies);

    
        //Calculate the average rating of all the movies
        let allRating = movies.map(getRating => getRating.rating);
        
        let averageOfRating = allRating.reduce((a, b) => a + b) / movies.length;
    
        console.log('Average Of Rating: ' + averageOfRating);
    
    
        //Count the total number of Good, Average and Bad movies.
        let totalMovies = goodMovies.length + averageMovies.length + badMovies.length;
    
        console.log('Total Number Of Movies: ' + totalMovies);
    
    
        //following keywords: ["The", "dog", "who", "is", "not", "a", "man"]

    
        const includesWords = function(title) {
            if(title.includes("The" || "dog" || "who" || "is" || "not" || "a" || "man") ){
                return true;
            } else {
                return false;
            }
        }  
        const filterMovies = movies.filter(function(aMovie){
            return includesWords(aMovie.title)
        })  
        console.log(filterMovies);
        
    
        //movies made between 1980-1989
    
        const get80sMovies = function(movie){
            return movie.year > 1980 && movie.year < 1989;
        }
    
        const _80sMovie = movies.filter(get80sMovies)
        console.log(_80sMovie);
});


