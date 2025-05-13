# Audio Narration Files

This directory should contain the audio narration files for each scene in the game. The files should be named according to the following pattern:

- `scene1.mp3` - The Enchanted Threshold
- `scene2.mp3` - The Luminous Path
- `scene3.mp3` - Ancient Markings
- `scene4.mp3` - The Crystal Clearing
- `scene5.mp3` - The Guardian's Watch

## Audio Requirements

1. Format: MP3
2. Quality: 128kbps or higher
3. Duration: Keep narrations concise (15-30 seconds per scene)
4. Voice: Clear, professional narration
5. Background: Minimal or no background music/sounds

## Audio Content

Each audio file should contain the narration text as specified in the game scenes:

1. scene1.mp3: "You stand at the edge of an ancient forest. The trees seem to whisper secrets as their branches sway in the gentle breeze."
2. scene2.mp3: "The path before you glows with an otherworldly light, as if the forest itself is guiding your way."
3. scene3.mp3: "The markings seem to tell a story, one of power and mystery hidden within these woods."
4. scene4.mp3: "The air crackles with energy as you enter the clearing, the crystals resonating with an ancient power."
5. scene5.mp3: "Before you stands a guardian of old, its form shifting between light and shadow."

## Implementation Notes

- The audio will automatically play when each scene loads
- Previous audio will stop when moving to a new scene
- Audio playback is handled by the browser's native audio capabilities
- Make sure all audio files are properly compressed for web delivery 