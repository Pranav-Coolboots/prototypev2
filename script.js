// Game narrative structure
const gameScenes = [
    {
        id: 1,
        description: "",
        image: 'background1.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        audio: 'null',
        useTypewriter: false
    },
    {
        id: 2,
        description: "You see a strange figure in front of you, sitting under a tree, meditating in silence with several portals around it. As you watch those portals carefully, you notice that you can see universes in each portal. Fascinated, as you continue to watch, you wake it ...",
        image: 'background2.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        audio: 'audio/narration.mp3',
        useTypewriter: true,
        typewriterSpeed: 35  // Speed in milliseconds (lower = faster)
    },
    {
        id: 3,
        description: "Welcome stranger, I see you! My name is Kakbhushundi. I am a devotee of Shree Ram. Don't be startled by my looks, my appearance is because of a curse due to my arrogance and pride.",
        image: '2.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        audio: 'audio/scene1.mp3',
        useTypewriter: true,
        typewriterSpeed: 30
    },
    {
        id: 4,
        description: "But this curse became a step in my spiritual evolution, when I renounced my ego and embraced total devotion to Shree Ram. Moved by my unwavering devotion, Shree Ram granted me immortality and divine knowledge allowing me to see events that have already occurred and that would occur in the future, across different universes.",
        image: '3.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        audio: 'audio/scene2.mp3',
        useTypewriter: true,
        typewriterSpeed: 35
    },
    {
        id: 5,
        description: "I have witnessed Mahabharat not once, but sixteen times across different universes with different outcomes. Each time, the great war unfolds with subtle variations, yet one truth remains constant: destiny is a force not easily turned.",
        image: '4.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        audio: 'audio/scene3.mp3',
        useTypewriter: true,
        typewriterSpeed: 30
    },
    {
        id: 6,
        description: "While I watched Mahabharat across timeline and universes, I stood at a pivotal moment in one of the universe, where I have traveled to a timeline where I must choose how to guide the Pandavs to win the battle of Kurukshetra.",
        image: '5.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        audio: 'audio/scene4.mp3',
        useTypewriter: true,
        typewriterSpeed: 30
    },
    {
        id: 7,
        description: "What should I have done?",
        image: '6.png',
        showControls: true,
        showForward: true,
        showBackward: true,
        audio: 'audio/scene6.mp3',
        useTypewriter: true,
        typewriterSpeed: 10
        
    },
    {
        id: 8,
        description: "What should I have done?",
        image: '6.png',
        showControls: true,
        showForward: false,
        showBackward: true,
        audio: 'audio/choice.mp3',
        choices: [
            { text: "Should I advise the Pandavas to prevent war and guide them toward peace over bloodshed?", nextScene: 9 },
            { text: "Or should I let destiny unfold as it must? For I have seen that the war may be inevitable", nextScene: 13 }
        ]
    },
    {
        id: 9,
        description: "A noble thought indeed. I, too, once wished to change the tide of fate. In one of the timelines, I intervened early, urging the Pandavs toward diplomacy and avoidance of war. But...",
        image: '8.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        audio: 'audio/A1.mp3',
        useTypewriter: true,
        typewriterSpeed: 40
    },
    {
        id: 10,
        description: "Despite my intentions, the wheel of destiny spun on. Quarrels deepened. Duryodhana's pride remained unbent. And even where peace was momentarily won, war eventually erupted in a different form.",
        image: '9.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        audio: 'audio/A2.mp3',
        useTypewriter: true,
        typewriterSpeed: 40
    },
    { //Branch A wisdom
        id: 11,
        description: "",
        image: '10.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        audio: 'audio/scene9.mp3',
        useTypewriter: false
    },
    { //Branch A Shlok
        id: 12,
        description: "",
        image: '11.png',
        showControls: false,
        showForward: false,
        showBackward: false,
        audio: 'null',
        playAgain: true
        
    },
    {
        id: 13,
        description: "Yes... this is the path I ultimately walked. After witnessing the war across many realms, I understood it is not for even a sage to bend the laws of time. The Mahabharata is not merely a conflict of kings. It is the unfolding of karma, the resolution of ancient debts, and the birth of dharma through fire.",
        image: '12.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        audio: 'audio/B1.mp3',
        useTypewriter: true,
        typewriterSpeed: 35
    },
    {
        id: 14,
        description: "Had I stopped the war, I would have merely delayed the storm. The lessons it brings about duty, sacrifice, and cosmic balance would remain unlearned. You have chosen wisely. The understanding of fate's role is a mark of deep insight. My gratitude to you, dear friend, for affirming the path I took.",
        image: '13.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        audio: 'audio/B2.mp3',
        useTypewriter: true,
        typewriterSpeed: 40
    },
    { //Branch B wisdom
        id: 15,
        description: "",
        image: '14.png',
        showControls: true,
        showForward: true,
        showBackward: false,
        audio: 'audio/scene13.mp3'
    },
    { //Branch B Shlok
        id: 16,
        description: "",
        image: '15.png',
        showControls: false,
        showForward: true,
        showBackward: false,
        audio: 'null',
        playAgain: true
    },
    
    // Add more scenes as needed
];

// Preload all assets
const assetsToPreload = [
    // Background images
    'images/background1.png',
    'images/background2.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png',
    'images/8.png',
    'images/9.png',
    'images/10.png',
    'images/11.png',
    'images/12.png',
    'images/13.png',
    'images/14.png',
    'images/15.png',
    // Control images
    'images/backward.png',
    'images/forward.png',
    // Audio files
    'audio/narration.mp3',
    'audio/scene1.mp3',
    'audio/scene2.mp3',
    'audio/scene3.mp3',
    'audio/scene4.mp3',
    'audio/scene6.mp3',
    'audio/choice.mp3',
    'audio/A1.mp3',
    'audio/A2.mp3',
    'audio/scene9.mp3',
    'audio/B1.mp3',
    'audio/B2.mp3',
    'audio/scene13.mp3'
];

// Create loading screen
function createLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = '<div class="loading-text">Loading</div>';
    document.body.appendChild(loadingScreen);
}

// Function to preload images
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
    });
}

// Function to preload audio
function preloadAudio(src) {
    return new Promise((resolve, reject) => {
        const audio = new Audio();
        audio.oncanplaythrough = () => resolve(audio);
        audio.onerror = () => reject(new Error(`Failed to load audio: ${src}`));
        audio.src = src;
    });
}

// Function to preload all assets
async function preloadAllAssets() {
    const promises = assetsToPreload.map(src => {
        if (src.endsWith('.mp3')) {
            return preloadAudio(src);
        } else {
            return preloadImage(src);
        }
    });

    try {
        await Promise.all(promises);
        document.getElementById('loading-screen').classList.add('hidden');
        document.querySelector('.container').classList.remove('hidden');
    } catch (error) {
        console.error('Error preloading assets:', error);
        // Handle error appropriately
    }
}

let currentSceneIndex = 0;
let isTransitioning = false;
let currentAudio = null;
let visitedScenes = new Set();

// Initialize the game
async function initializeGame() {
    createLoadingScreen();
    document.querySelector('.container').classList.add('hidden');
    await preloadAllAssets();
    updateSceneContent();
}

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

// Function to create typewriter effect
function createTypewriterEffect(element, text, speed = 50) {
    // Clear existing content
    element.innerHTML = '';
    element.classList.add('typewriter');
    
    // Only disable buttons if this scene hasn't been visited before
    if (!visitedScenes.has(currentSceneIndex)) {
        forwardButton.style.pointerEvents = 'none';
        forwardButton.style.opacity = '0.3';
        backwardButton.style.pointerEvents = 'none';
        backwardButton.style.opacity = '0.3';
    }
    
    // Split text into characters and create spans
    const chars = text.split('').map(char => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char;
        element.appendChild(span);
        return span;
    });
    
    // Animate each character
    let currentIndex = 0;
    function animateNextChar() {
        if (currentIndex < chars.length) {
            chars[currentIndex].classList.add('visible');
            currentIndex++;
            setTimeout(animateNextChar, speed);
        } else {
            // Animation complete - enable navigation buttons
            const currentScene = gameScenes[currentSceneIndex];
            if (currentScene.showForward) {
                forwardButton.style.pointerEvents = 'auto';
                forwardButton.style.opacity = '1';
            }
            if (currentScene.showBackward) {
                backwardButton.style.pointerEvents = 'auto';
                backwardButton.style.opacity = '1';
            }
            // Mark this scene as visited
            visitedScenes.add(currentSceneIndex);
        }
    }
    
    // Start animation
    animateNextChar();
}

// Function to update scene content
function updateSceneContent() {
    const currentScene = gameScenes[currentSceneIndex];
    
    // Update background image
    backgroundImage.src = `images/${currentScene.image}`;
    
    // Update controls visibility
    if (currentScene.showControls) {
        controlDiv.style.display = 'flex';
        
        // If scene has been visited before, enable buttons immediately
        if (visitedScenes.has(currentSceneIndex)) {
            if (currentScene.showForward) {
                forwardButton.style.pointerEvents = 'auto';
                forwardButton.style.opacity = '1';
            }
            if (currentScene.showBackward) {
                backwardButton.style.pointerEvents = 'auto';
                backwardButton.style.opacity = '1';
            }
        } else {
            // New scene - initially disable both buttons
            forwardButton.style.opacity = '0.3';
            forwardButton.style.pointerEvents = 'none';
            backwardButton.style.opacity = '0.3';
            backwardButton.style.pointerEvents = 'none';
        }
    } else {
        controlDiv.style.display = 'none';
    }
    
    // Update scene text with typewriter effect if enabled
    const descriptionElement = document.querySelector('.scene-description');
    
    if (currentScene.useTypewriter && !visitedScenes.has(currentSceneIndex)) {
        // Use the scene's typewriterSpeed if defined, otherwise use default (50ms)
        const speed = currentScene.typewriterSpeed || 50;
        createTypewriterEffect(descriptionElement, currentScene.description, speed);
    } else {
        // For visited scenes or scenes without typewriter, show text immediately
        descriptionElement.textContent = currentScene.description;
        descriptionElement.classList.remove('typewriter');
        
        // If no typewriter effect or scene was visited, enable buttons immediately
        if (currentScene.showForward) {
            forwardButton.style.pointerEvents = 'auto';
            forwardButton.style.opacity = '1';
        }
        if (currentScene.showBackward) {
            backwardButton.style.pointerEvents = 'auto';
            backwardButton.style.opacity = '1';
        }
    }
    
    // Play narration
    if (currentScene.audio && currentScene.audio !== 'null') {
        playNarration(currentScene.audio);
    }
    
    // Handle choices or play again button
    const choicesContainer = document.querySelector('.choices');
    choicesContainer.innerHTML = ''; // Clear any existing content
    
    if (currentScene.playAgain) {
        console.log('Creating play again button for scene', currentSceneIndex); // Debug log
        const playAgainBtn = document.createElement('button');
        playAgainBtn.className = 'play-again-btn';
        playAgainBtn.textContent = 'Play Again';
        playAgainBtn.addEventListener('click', () => {
            currentSceneIndex = 0;
            visitedScenes.clear();
            handleSceneTransition(0);
        });
        choicesContainer.style.display = 'flex';
        choicesContainer.appendChild(playAgainBtn);
    } else if (currentScene.choices) {
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

// Initialize the game when the window loads
window.addEventListener('load', initializeGame); 