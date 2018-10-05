//▼------------(*^_^*)-------------▲//

function emptyObject(){
    let anObject = {
    "time": 12,
    }
    return anObject;
}
const timeObject = emptyObject();
console.log(timeObject);

//▼------------(*^_^*)-------------▲//

const anArry = [
    {"color": "green"},
    {"color": "pink"},
    {"color": "black"},
];

function returnsAnArray(color1, color2, color3){
    return anArry;
};

const colorObjects = returnsAnArray();
console.log(colorObjects);

    //first method
for(let i = 0; i < anArry.length; i++){
    console.log(anArry[i].color);
};

    //second method
//for(let colorlist of anArry){
//    console.log(colorlist);
//}

//▼------------(*^_^*)-------------▲//


const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let today = "Sunday";
let weWillMeetIn = 9;


for(i = 0; i < weWillMeetIn; i++){
    const meetingDay = weWillMeetIn - weekDays.length ;
    if(today == weekDays[i]){
        console.log("Today is: " + today);
        console.log("How many days to meet: " + weWillMeetIn);
        console.log("We are meeting on: " + weekDays[meetingDay]);
    }
}