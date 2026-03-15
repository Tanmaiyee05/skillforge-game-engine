let missionData;
let currentMission;

fetch("../json/mission.json")
.then(response => response.json())
.then(data => {

    missionData = data;

    // Load first mission
    currentMission = missionData.missions[0];

    document.getElementById("missionTitle").innerText = currentMission.title;
    document.getElementById("missionDesc").innerText = currentMission.description;

    let array = currentMission.test_cases[0].input;
    document.getElementById("array").innerText = "Array: " + array.join(", ");

});

// Timer
let time = 30;

let timer = setInterval(() => {

    time--;
    document.getElementById("timer").innerText = time;

    if(time <= 0){
        clearInterval(timer);
        alert("Time Up!");
    }

},1000);


// Submit Answer
function submitAnswer(){

    let answer = document.getElementById("answer").value;

    let correctAnswer = currentMission.test_cases[0].output;

    if(answer == correctAnswer){

        alert("Correct! Score: " + currentMission.points);

    }else{

        alert("Wrong answer! Try again.");

    }

}