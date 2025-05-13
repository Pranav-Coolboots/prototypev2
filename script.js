// Game narrative structure
const gameScenes = [
    {
        id: 1,
        title: '',
        description:'',
        image: 'background1.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        narration: "You stand at the edge of an ancient forest. The trees seem to whisper secrets as their branches sway in the gentle breeze.",
        audio: 'null'
    },
    {
        id: 2,
        title: "",
        description: "",
        image: 'background2.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        narration: "The path before you glows with an otherworldly light, as if the forest itself is guiding your way.",
        audio: 'audio/scene3.mp3'
    },
    {
        id: 3,
        title: "",
        description: "",
        image: 'background3.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        narration: "The markings seem to tell a story, one of power and mystery hidden within these woods.",
        audio: 'audio/scene4.mp3'
    },
    {
        id: 4,
        title: "",
        description: "",
        image: 'background4.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        narration: "The air crackles with energy as you enter the clearing, the crystals resonating with an ancient power.",
        audio: 'audio/scene5.mp3'
    },
    {
        id: 5,
        title: "",
        description: "",
        image: 'background5.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'audio/scene6.mp3'
    },
    {
        id: 6,
        title: "",
        description: "",
        image: 'background6.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'audio/scene7.mp3'
    },
    {
        id: 7,
        title: "",
        description: "",
        image: 'background7.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null',
        
    },
    {
        id: 8,
        title: "",
        description: "",
        image: 'background8.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null',
        choices: [
            { text: "Should I advise the Pandavas to prevent war and guide them toward peace over bloodshed?", nextScene: 9 },
            { text: "Or should I let destiny unfold as it must? For I have seen that the war may be inevitable", nextScene: 13 }
        ]
    },
    {
        id: 9,
        title: "",
        description: "",
        image: 'background9.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null'
    },
    {
        id: 10,
        title: "",
        description: "",
        image: 'background10.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null'
    },
    {
        id: 11,
        title: "",
        description: "",
        image: 'background11.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null'
    },
    {
        id: 12,
        title: "",
        description: "",
        image: 'background12.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null'
    },
    {
        id: 13,
        title: "",
        description: "",
        image: 'background13.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null'
    },
    {
        id: 14,
        title: "",
        description: "",
        image: 'background14.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null'
    },
    {
        id: 15,
        title: "",
        description: "",
        image: 'background15.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null'
    },
    {
        id: 16,
        title: "",
        description: "",
        image: 'background16.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null'
    },
    {
        id: 17,
        title: "",
        description: "",
        image: 'background17.png',
        showControls: false,
        showForward: true,
        showBackward: false,
        narration: "Before you stands a guardian of old, its form shifting between light and shadow.",
        audio: 'null'
    },

    // Add more scenes as needed
];

let currentSceneIndex = 0;
let isTransitioning = false;
let currentAudio = null;

// Get the elements
const forwardButton = document.querySelector('img[alt="Forward button"]');
const backwardButton = document.querySelector('img[alt="Backward button"]');
const backgroundImage = document.querySelector('.background-image');
const container = document.querySelector('.container');
const controlDiv = document.querySelector('.control');
const storyContent = document.querySelector('.story-content');

// Function to play audio narration
function playNarration(audioPath) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(audioPath);
    currentAudio.play().catch(error => {
        console.log('Audio playback failed:', error);
    });
}

// Function to update scale
function updateScale() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const containerWidth = 1920;
    const containerHeight = 1080;
    
    const scaleX = windowWidth / containerWidth;
    const scaleY = windowHeight / containerHeight;
    const scale = Math.min(scaleX, scaleY);
    
    container.style.setProperty('--scale-factor', scale);
}

// Initial scale
updateScale();

// Update scale on window resize
window.addEventListener('resize', updateScale);

// Function to handle scene transition
function handleSceneTransition(newSceneIndex) {
    if (isTransitioning) return;
    isTransitioning = true;

    // Fade out current scene
    backgroundImage.classList.add('fade');
    storyContent.classList.add('fade');

    setTimeout(() => {
        currentSceneIndex = newSceneIndex;
        updateSceneContent();

        // Fade in new scene
        setTimeout(() => {
            backgroundImage.classList.remove('fade');
            storyContent.classList.remove('fade');
            isTransitioning = false;
        }, 50);
    }, 500);
}

// Function to update scene content
function updateSceneContent() {
    const currentScene = gameScenes[currentSceneIndex];
    
    // Update background image
    backgroundImage.src = `images/${currentScene.image}`;
    
    // Update controls visibility
    if (currentScene.showControls) {
        controlDiv.style.display = 'flex';
        // Update forward/backward button visibility
        forwardButton.style.opacity = currentScene.showForward ? '1' : '0.3';
        forwardButton.style.pointerEvents = currentScene.showForward ? 'auto' : 'none';
        backwardButton.style.opacity = currentScene.showBackward ? '1' : '0.3';
        backwardButton.style.pointerEvents = currentScene.showBackward ? 'auto' : 'none';
    } else {
        controlDiv.style.display = 'none';
    }
    
    // Update scene text
    document.querySelector('.scene-title').textContent = currentScene.title;
    document.querySelector('.scene-description').textContent = currentScene.description;
    
    // Play narration
    if (currentScene.audio) {
        playNarration(currentScene.audio);
    }
    
    // Handle choices if they exist
    const choicesContainer = document.querySelector('.choices');
    if (currentScene.choices) {
        choicesContainer.innerHTML = currentScene.choices.map(choice => 
            `<button class="choice-btn">${choice.text}</button>`
        ).join('');
        
        // Add event listeners to choice buttons
        document.querySelectorAll('.choice-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const nextScene = currentScene.choices[index].nextScene;
                const nextSceneIndex = gameScenes.findIndex(scene => scene.id === nextScene);
                handleSceneTransition(nextSceneIndex);
            });
        });
        
        choicesContainer.style.display = 'flex';
    } else {
        choicesContainer.style.display = 'none';
    }
}

// Function to change scene with fade effect
function changeScene(direction) {
    if (isTransitioning) return;
    
    const currentScene = gameScenes[currentSceneIndex];
    if ((direction === 'forward' && !currentScene.showForward) || 
        (direction === 'backward' && !currentScene.showBackward)) {
        return;
    }
    
    let newSceneIndex;
    if (direction === 'forward') {
        newSceneIndex = (currentSceneIndex + 1) % gameScenes.length;
    } else {
        newSceneIndex = (currentSceneIndex - 1 + gameScenes.length) % gameScenes.length;
    }
    
    handleSceneTransition(newSceneIndex);
}

// Initial scene content
updateSceneContent();

// Add click event listeners
forwardButton.addEventListener('click', () => changeScene('forward'));
backwardButton.addEventListener('click', () => changeScene('backward')); 