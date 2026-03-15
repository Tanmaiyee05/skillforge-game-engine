# SkillForge JSON Game Engine

## Overview

SkillForge is a lightweight game engine where missions are defined using JSON configuration instead of hardcoded data.
The engine reads the JSON file and dynamically generates the playable mission.

This design separates **engine logic** from **game data**, making the system reusable.

---

## Project Structure

```
skillforge-game-engine
│
├── engine
│   └── engine.js
├── json
│   └── mission.json
├── prototype
│   └── index.html
├── architecture.md
├── engine-architecture.png
└── README.md
```

---

## JSON Schema

Example `mission.json`

```json
{
  "missions": [
    {
      "mission_id": "ARRAY001",
      "title": "Find Maximum Number",
      "description": "Find the largest number in the array",
      "difficulty": "easy",
      "time_limit": 30,
      "points": 100,
      "test_cases": [
        { "input": [3,7,2,9], "output": 9 }
      ]
    }
  ]
}
```

---

## How to Run

1. Open the project in **Visual Studio Code**
2. Install the **Live Server** extension
3. Open `prototype/index.html`
4. Right-click → **Open with Live Server**

The engine will load the mission dynamically from JSON.

---

## Key Features

* JSON-driven gameplay
* Dynamic mission loading
* Timer-based engine loop
* Answer validation using JSON test cases
* Clear separation of engine logic and game data
