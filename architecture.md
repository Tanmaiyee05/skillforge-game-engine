# SkillForge Game Engine Architecture

SkillForge is a reusable game engine that loads missions from JSON configuration files.

CORE ENGINE LOOP

1. Player starts the game
2. Engine loads a mission from JSON configuration
3. Timer starts
4. Player attempts the challenge
5. Engine evaluates the solution
6. Score is calculated
7. Leaderboard updates

System Flow

User → UI → Game Engine → JSON Mission Loader → Evaluation → Score → Leaderboard


JSON CONFIGURATION STRUCTURE

The engine reads missions from JSON files.

Example fields:

mission_id – unique mission id  
title – mission name  
difficulty – challenge level  
time_limit – allowed time  
points – score reward  
test_cases – input and expected output


REUSABILITY MODEL

The engine separates game logic from mission data.

All missions are stored in JSON files.

This allows:

• New missions to be added without modifying the engine  
• Multiple game modes using the same engine  
• Expansion to coding, debugging, AI, or puzzle challenges