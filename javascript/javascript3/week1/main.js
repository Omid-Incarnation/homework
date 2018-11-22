console.log('Java Script 03 Week 01');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

const doubleOddNumbers = numbers.filter((odd) => odd % 2 !== 0).map((double) => double * 2);

console.log(doubleOddNumbers);


fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(res => res.json())
    .then((movies) => {
        console.log(movies);

        //Give each movie a tag: Good, Average, Bad. Based on the ratings
    
        const getMoviesRatedOver7 = movie => movie.rating >= 7; 
        const getMoviesRatedBetween4to7 = movie => movie.rating >= 4 && movie.rating < 7;
        const getMoviesRatedLess4 = movie => movie.rating < 4;

        const goodMovies = movies.filter(getMoviesRatedOver7);
        const averageMovies = movies.filter(getMoviesRatedBetween4to7);
        const badMovies = movies.filter(getMoviesRatedLess4);

        console.log(goodMovies);
        console.log(averageMovies);
        console.log(badMovies);
        
        //Click buttons and get pieces of information
        document.getElementById('goodButton').addEventListener('click', showGoodMovies);
        document.getElementById('averageButton').addEventListener('click', showaverageMovies);
        document.getElementById('badButton').addEventListener('click', showBadMovies);
        
        function cleanUpTheList(){
            document.getElementById('goodMoviesUl').innerHTML = '';
            document.getElementById('averageMoviesUl').innerHTML = '';
            document.getElementById('badMoviesUl').innerHTML = '';
            document.getElementById('80sMoviesUl').innerHTML = '';
        }
    
        function showGoodMovies(){
            cleanUpTheList()
            let goodMoviesList = '';
            goodMovies.forEach((goodTitles) => {
                goodMoviesList += `<li>${goodTitles.title}</li>`
            });
            document.getElementById('goodMoviesUl').innerHTML = goodMoviesList;
        };
    
        function showaverageMovies(){
            cleanUpTheList()
            let averageMoviesList = '';
            averageMovies.forEach((averageTitles) => {
                averageMoviesList += `<li>${averageTitles.title}</li>`
            });
            document.getElementById('averageMoviesUl').innerHTML = averageMoviesList;
        }
    
        function showBadMovies(){
            cleanUpTheList()
            let badMoviesList = '';
            badMovies.forEach((badTitles) => {
                badMoviesList += `<li>${badTitles.title}</li>`
            });
            document.getElementById('badMoviesUl').innerHTML = badMoviesList;
        }
    
        //Calculate the average rating of all the movies
    
        let allRating = movies.map(getRating => getRating.rating);
        
        let averageOfRating = allRating.reduce((a, b) => a + b) / movies.length;
    
        console.log('Average Of Rating: ' + averageOfRating);
    
        //Count the total number of Good, Average and Bad movies.
            
        let totalMovies = movies.length
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
    
        document.getElementById('80sButton').addEventListener('click', show80sMovies);
        
        function show80sMovies(){
            cleanUpTheList()
            let _80sMoviesList = '';
            _80sMovie.forEach((_80sTitles) => {
                _80sMoviesList += `<li>${_80sTitles.title}</li>`
            });
            document.getElementById('80sMoviesUl').innerHTML = _80sMoviesList;
        }
});