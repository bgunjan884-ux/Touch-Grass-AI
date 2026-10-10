
const AI_URL = "http://127.0.0.1:11434/api/chat";
const MODEL = "llama3.2:3b";

const moodSelect = document.getElementById("mood");
const timeSelect = document.getElementById("time");
const placeSelect = document.getElementById("place");
const generateBtn = document.getElementById("generateBtn");
const anotherBtn = document.getElementById("anotherBtn");
const result = document.getElementById("result");
const aiStatus = document.getElementById("aiStatus");

const activityTitle = document.getElementById("activityTitle");
const activityText = document.getElementById("activityText");
const activityTime = document.getElementById("activityTime");

const challengeTitle = document.getElementById("challengeTitle");
const challengeText = document.getElementById("challengeText");
const completeBtn = document.getElementById("completeBtn");
const newChallengeBtn = document.getElementById("newChallengeBtn");
const progressLabel = document.getElementById("progressLabel");

let currentActivity = 0;
let currentChallenge = 0;
let completedChallenges = Number(
  localStorage.getItem("grassCompleted") || 0
);

const activities = {
  relaxed: [
    {
      title: "Take a mindful nature walk 🌿",
      text: "Walk slowly in a safe outdoor space. Notice the sunlight, the breeze and the sounds around you. Leave your phone in your pocket.",
    },
    {
      title: "Find your little patch of peace ☁️",
      text: "Sit somewhere comfortable outdoors. Watch the clouds, listen to birds and give yourself a quiet moment without notifications.",
    },
    {
      title: "Discover the tiny details 🍃",
      text: "Look closely at leaves, flowers and interesting patterns in nature. Notice three details you have never paid attention to before.",
    }
  ],
  curious: [
    {
      title: "Become a mini nature detective 🔎",
      text: "Explore a garden or park. Find three different leaf shapes, listen for bird calls and observe the small details of your surroundings.",
    },
    {
      title: "Go on a birdwatching adventure 🐦",
      text: "Find a comfortable spot and observe birds from a distance. Notice their colors, movements and sounds without disturbing them.",
    },
    {
      title: "Explore the world of plants 🌱",
      text: "Find three different plants. Compare their leaves, shapes and colors. Avoid touching unfamiliar plants.",
    }
  ],
  energetic: [
    {
      title: "Start a mini walking adventure 👟",
      text: "Take a brisk walk on a familiar, safe route. Look for interesting trees, gardens and new details along the way.",
    },
    {
      title: "Move, stretch and recharge ☀️",
      text: "Visit a safe outdoor space for a gentle stretch and a short walk. Move at a comfortable pace and enjoy the fresh air.",
    },
    {
      title: "Try a nature scavenger hunt 🌳",
      text: "Look for something round, something green, a fallen leaf and an interesting natural pattern. Observe rather than collect.",
    }
  ],
  creative: [
    {
      title: "Create a nature-inspired sketch 🎨",
      text: "Find a comfortable spot and sketch a leaf, a flower or a landscape. You don't need to be an artist. Just notice the details.",
    },
    {
      title: "Collect colors with your eyes 🌈",
      text: "Find five different colors outdoors. Notice how sunlight changes the colors of plants, buildings and the sky.",
    },
    {
      title: "Write a tiny outdoor journal ✍️",
      text: "Sit outside and write three sentences about what you see, hear and feel. Turn an ordinary moment into a small memory.",
    }
  ],
  social: [
    {
      title: "Invite someone on a nature walk 🧡",
      text: "Ask a friend or family member to join you for a walk in a familiar public place. Leave time for a good conversation.",
    },
    {
      title: "Share a little gardening time 🌼",
      text: "Ask someone to help water plants or care for a garden. Learn one thing about a plant together.",
    },
    {
      title: "Plan a park catch-up 🌳",
      text: "Meet someone you trust in a suitable public outdoor space. Talk, walk and enjoy a break from your screens.",
    }
  ]
};

const challenges = [
  {
    title: "Notice five things in nature.",
    text: "Find a leaf, a bird, a cloud, a flower and an interesting natural pattern."
  },
  {
    title: "Spend 10 minutes outdoors.",
    text: "Visit a safe outdoor space and pay attention to the world around you."
  },
  {
    title: "Become a cloud observer.",
    text: "Look at the sky and notice the different cloud shapes, if the weather allows."
  },
  {
    title: "Discover three shades of green.",
    text: "Look for different shades on leaves, grass and other plants without picking them."
  },
  {
    title: "Listen to nature for a moment.",
    text: "Pause in a safe place and identify three sounds from your surroundings."
  },
  {
    title: "Do one kind thing for nature.",
    text: "Water a plant or help care for a garden with permission."
  },
  {
    title: "Take a different perspective.",
    text: "Notice one familiar outdoor place as if you were seeing it for the first time."
  }
];

// Get the selected time.
function getSelectedTime() {
  return document.querySelector('input[name="time"]:checked').value;
}

// Choose an activity from the built-in library.
function getFallbackActivity() {
  const mood = moodSelect.value;
  const list = activities[mood] || activities.relaxed;

  const activity = list[currentActivity % list.length];
  currentActivity++;

  return activity;
}

// Display an activity on the page.
function showActivity(activity, time) {
  activityTitle.textContent = activity.title;
  activityText.textContent = activity.text;
  activityTime.textContent = `◷ ${time}`;

  result.classList.remove("hidden");

  result.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

// Ask a locally running open-weight model for an activity.
async function generateWithAI() {
  const mood = moodSelect.value;
  const time = getSelectedTime();
  const place = placeSelect.value;

  const prompt = `
You are Touch Grass AI, a friendly outdoor activity coach.

Suggest ONE practical, enjoyable outdoor activity.

User's mood: ${mood}
Available time: ${time}
Available location: ${place}

Requirements:
- Encourage real-world activity rather than screen time.
- Make the suggestion suitable for the available time.
- Prioritize ordinary, accessible activities.
- Never suggest dangerous stunts, trespassing or disturbing wildlife.
- Respect the environment and personal safety.
- Do not require purchases or special equipment.
- Respond with ONLY valid JSON in this format:
{
  "title": "A short activity title with one emoji",
  "text": "Two or three sentences describing the activity"
}
`;

  const response = await fetch(AI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      stream: false,
      format: "json"
    })
  });

  if (!response.ok) {
    throw new Error("Local AI could not generate an activity.");
  }

  const data = await response.json();
  const content = data.message.content;
  const activity = JSON.parse(content);

  if (
    typeof activity.title !== "string" ||
    typeof activity.text !== "string"
  ) {
    throw new Error("Unexpected AI response.");
  }

  return activity;
}

// Main activity generator.
async function generateActivity() {
  generateBtn.disabled = true;
  generateBtn.textContent = "Finding your adventure...";

  const time = getSelectedTime();

  try {
    const activity = await generateWithAI();
    showActivity(activity, time);
    aiStatus.textContent = "Connected to local AI · " + MODEL;
  } catch (error) {
    const activity = getFallbackActivity();

    showActivity(activity, time);

    aiStatus.textContent =
      "Using built-in activities. Start Ollama to enable local AI.";
  } finally {
    generateBtn.disabled = false;
    generateBtn.innerHTML =
      'Generate my adventure <span>✳</span>';
  }
}

// Check whether Ollama is running.
async function checkAI() {
  try {
    const response = await fetch(
      "http://127.0.0.1:11434/api/tags"
    );

    if (!response.ok) {
      throw new Error("Ollama unavailable");
    }

    const data = await response.json();

    const modelAvailable = data.models?.some(
      model => model.name === MODEL ||
               model.name.startsWith(MODEL + "-")
    );

    if (modelAvailable) {
      aiStatus.textContent =
        "Local AI is ready · " + MODEL;
    } else {
      aiStatus.textContent =
        "Ollama is running. Download " + MODEL +
        " to activate AI suggestions.";
    }
  } catch {
    aiStatus.textContent =
      "Local AI is offline. Built-in activities are ready.";
  }
}

// Generate a fresh daily challenge.
function showChallenge() {
  currentChallenge =
    (currentChallenge + 1) % challenges.length;

  const challenge = challenges[currentChallenge];

  challengeTitle.textContent = challenge.title;
  challengeText.textContent = challenge.text;

  completeBtn.disabled = false;
  completeBtn.textContent = "I did it! ✓";
}

// Update challenge completion.
function updateProgress() {
  progressLabel.textContent =
    `${completedChallenges} challenge` +
    `${completedChallenges === 1 ? "" : "s"} completed`;
}

generateBtn.addEventListener("click", generateActivity);

anotherBtn.addEventListener("click", generateActivity);

newChallengeBtn.addEventListener("click", showChallenge);

completeBtn.addEventListener("click", () => {
  completedChallenges++;

  localStorage.setItem(
    "grassCompleted",
    String(completedChallenges)
  );

  updateProgress();

  completeBtn.textContent = "Challenge completed! 🌿";
  completeBtn.disabled = true;
});

// Start the app.
updateProgress();
checkAI();