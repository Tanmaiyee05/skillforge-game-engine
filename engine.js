let missionData;
let currentMission;
let score = 0;
let timer;
let timeLeft = 30;

fetch("mission.json")
.then(res => res.json())
.then(data => {

    missionData = data;

    let select = document.getElementById("missionSelect");

    missionData.missions.forEach((mission, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.text = mission.title;
        select.appendChild(option);
    });

    select.addEventListener("change", () => {
        loadMission(select.value);
    });

    loadMission(0);
});

function loadMission(index) {

    currentMission = missionData.missions[index];

    document.getElementById("missionTitle").innerText = currentMission.title;
    document.getElementById("missionDesc").innerText = currentMission.description;

    // 🔥 Difficulty text + color
    let diffElement = document.getElementById("difficulty");
    diffElement.innerText = "Difficulty: " + currentMission.difficulty;

    if (currentMission.difficulty === "Easy") {
        diffElement.style.color = "#00ff88";
    } else if (currentMission.difficulty === "Medium") {
        diffElement.style.color = "#ffd166";
    } else {
        diffElement.style.color = "#ff4d4d";
    }

    let array = currentMission.test_cases[0].input;
    document.getElementById("array").innerText = "Array: " + array.join(", ");

    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";

    // 🔥 Dynamic timer
    let time;
    if (currentMission.difficulty === "Easy") {
        time = 20;
    } else if (currentMission.difficulty === "Medium") {
        time = 40;
    } else {
        time = 60;
    }

    resetTimer(time);
}

function resetTimer(limit) {

    clearInterval(timer);
    timeLeft = limit;

    document.getElementById("timer").innerText = timeLeft;

    timer = setInterval(() => {

        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("result").innerText = "⏰ Time Up!";
        }

    }, 1000);
}

function submitAnswer() {

    let answer = document.getElementById("answer").value;
    let correct = currentMission.test_cases[0].output;

    if (answer == correct) {

        score += currentMission.points;

        document.getElementById("result").innerText = "✅ Correct!";
        document.getElementById("score").innerText = "Score: " + score;

        document.getElementById("answer").value = "";

        // 🔥 AUTO NEXT MISSION
        let currentIndex = document.getElementById("missionSelect").value;
        let nextIndex = parseInt(currentIndex) + 1;

        if (nextIndex < missionData.missions.length) {
            setTimeout(() => {
                document.getElementById("missionSelect").value = nextIndex;
                loadMission(nextIndex);
            }, 1000);
        }

    } else {

        document.getElementById("result").innerText = "❌ Wrong! Try again.";

    }
}
