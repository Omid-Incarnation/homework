//▼------------(*^_^*)-------------▲//
//▼----------NOnoN0nOYes (Note taking app)-----------▲//
    //Save a note
const notes = [];
function addNote(note, noteId){
    notes.push({note, noteId});
}

addNote("First line!", 7);
addNote("Second line!", 13);
addNote("Third line!", 18);
addNote("Fourth line!", 21);
console.log(notes);

    //Get a note
        //If I didn't look at Johana's code I couldn't write this code.
function getNoteFromId (id){
    let recordFound = false;
    for(let i = 0; i < notes.length; i++){
         if (id === notes[i].noteId){
         console.log("This is your Note: " + notes[i].note);
         recordFound = true;
         break;
         } 
     }
    if (recordFound === false){
        console.log("Note id " + id + " doesn't exist.")
    }     
}
getNoteFromId(21);

    //Read all notes
function showAllNotes(){
    for(i = 0; i < notes.length ; i++){
        console.log("Note with Id number: " + notes[i].noteId + "  ---->" + "  " + notes[i].note);
    }
}

showAllNotes();

    //Unique feature
        //nothing came to my mind yet! :) //

//▼--CactusIO-interactive (Smart phone usage app)--▲//
    //Adding an activity
let activities = [];
function addActivity(date, activity, duration){
    activities.push({date, activity, duration});
};
addActivity('23/7-18', 'Youtube', 30);
addActivity('23/7-18', 'Facebook', 35);
addActivity('23/7-18', 'Instagram', 40);
console.log(activities);

    //Show my status
        //If I didn't look at Badr's code I couldn't write this code.
let totalTime = 0;
function showStatus(){
  if(activities.length == 0){
    console.log("Do something!!");
  }
  else{
  for(i=0; i < activities.length; i++){
      totalTime += activities[i].duration;
  }
  console.log("You had " + activities.length + " activities and It seems you waste " + totalTime + " minutes!");
  }
}
showStatus();

    //Usage limit
        //if you write more than 10 line it will alert!

const limitation = 10; //I mean 10 line
function limit(){
    if(activities.length > limitation){
        alert("No more Note!");
    }
}
limit();

    //Extra feature
        //nothing came to my mind yet! :) //

//▼----------Rover the Robot (Optional)-----------▲//
//Game Over






