# 🌿 Touch Grass AI — Find Your Outside

**Less Scrolling. More Living.**

Touch Grass AI is an AI-powered outdoor activity companion built using HTML, CSS, JavaScript, and an open-weight AI model through Ollama. It helps people spend less time on screens and more time exploring nature through personalized outdoor activities and daily challenges.

## 🌍 About the Project

In today's digital world, people often spend a significant amount of time looking at screens. Touch Grass AI uses technology differently: it encourages people to step outside, discover nature, and participate in meaningful offline activities.

Users can select their mood, choose how much time they have, and specify their preferred outdoor environment. The application then suggests activities that fit their preferences.

The project follows the idea that technology should not always keep us online. Sometimes, its greatest purpose is to help us disconnect.

## 🎯 Objectives

- Encourage outdoor exploration and connection with nature.
- Reduce unnecessary screen time through meaningful activities.
- Generate personalized outdoor activity suggestions using AI.
- Demonstrate the use of open-weight AI models in a web application.
- Explore local AI inference and privacy-friendly design.
- Provide useful fallback activities when AI is unavailable.

## ✨ Features

### 🌿 1. AI-Powered Activity Generator
Generate personalized outdoor activity suggestions based on your mood, available time, and surroundings.

### ☀️ 2. Mood-Based Recommendations
Choose from different moods:
- Relaxed
- Curious
- Energetic
- Creative
- Social

### ⏰ 3. Flexible Time Selection
Choose an activity duration that fits your schedule:
- 10 minutes
- 20 minutes
- 45 minutes
- 1 hour

### 🌻 4. Daily Nature Challenges
Complete simple challenges such as observing five things in nature, identifying different shades of green, or spending time outdoors.

### 📊 5. Challenge Progress Tracking
Track completed challenges using browser local storage.

### 🔄 6. Built-In Activity Suggestions
The application can provide predefined outdoor activities when the local AI model is unavailable.

### 🔒 7. Local AI Support
Connect to a locally running open-weight language model through Ollama, allowing prompts to be processed on your computer.

### 📱 8. Responsive Design
Enjoy a nature-inspired interface designed for desktop computers, tablets, and mobile screens.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structures the website |
| CSS3 | Styling, layout, animations, and responsive design |
| JavaScript | Application logic and interactive features |
| Ollama | Runs the language model locally |
| Llama 3.2 3B | Example open-weight model for activity generation |
| Browser Local Storage | Saves challenge completion progress |

## 🤖 Why Open-Source AI?

Open innovation allows developers to experiment with AI, customize applications, and build solutions with greater control over their technology choices.

Touch Grass AI uses Ollama to connect the web application to a locally running open-weight language model.

### Benefits of This Approach

- **Privacy:** In local AI mode, prompts can be processed on the user's own computer rather than sent to a remote AI provider.
- **Customization:** Developers can modify prompts and experiment with compatible models.
- **Offline inference:** After downloading a compatible model, AI inference can work without an internet connection, provided the local setup is functioning.
- **Reduced API dependency:** The project does not require a paid hosted AI API for local inference.
- **Accessibility for experimentation:** Developers can explore AI integration using ordinary web technologies.

Open-weight models have their own licenses and hardware requirements. The selected model's license should be reviewed before redistribution or commercial use.

## 📁 Project Structure

```text
touch-grass-ai/
│
├── index.html       # Website structure
├── style.css        # Styling and responsive layout
├── script.js        # Application logic and AI integration
└── README.md        # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before running the project, make sure you have:

- A modern web browser.
- Visual Studio Code or another code editor.
- The Live Server extension for Visual Studio Code.
- Ollama installed for AI-powered activity generation.
- Sufficient memory and storage to run your chosen AI model.

The basic website and built-in activities can work without Ollama.

## ⚙️ Installation and Setup

### Step 1: Clone the Repository

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR_USERNAME/touch-grass-ai.git
```

### Step 2: Open the Project

```bash
cd touch-grass-ai
```

Open the folder in Visual Studio Code.

### Step 3: Install Ollama

Download Ollama from its official website:

https://ollama.com/download

Follow the installation instructions for your operating system.

### Step 4: Download and Run the Model

Open your terminal and execute:

```bash
ollama run llama3.2:3b
```

Wait for the model to download and start.

This project uses `llama3.2:3b` as its example model. You can experiment with other compatible models by updating the model name in `script.js`.

### Step 5: Launch the Website

Open `index.html` in Visual Studio Code.

Right-click the file and select **Open with Live Server**.

The website will open in your browser.

### Step 6: Test the AI Connection

Make sure Ollama is running and the model has been downloaded.

The JavaScript application sends requests to Ollama's local API at:

```text
http://127.0.0.1:11434/api/chat
```

If the connection fails because of browser security, CORS, or server configuration, the built-in activity suggestions remain available. You may need to configure local access appropriately for your development setup.

## 🎮 How to Use

1. Open Touch Grass AI in your browser.
2. Select your current mood.
3. Choose the amount of time available.
4. Select an outdoor location.
5. Click **Generate My Adventure**.
6. Read your personalized activity suggestion.
7. Head outdoors and try the activity.
8. Complete a daily nature challenge.
9. Track your completed challenges.

The goal is to keep the interaction short and make the real-world activity the main experience.

## 🌳 Example Activities

| Mood | Suggested Activity |
|---|---|
| Relaxed | Take a mindful nature walk |
| Curious | Observe birds and different plants |
| Energetic | Explore a familiar walking route |
| Creative | Sketch a leaf or outdoor landscape |
| Social | Invite a friend or family member for a walk |

Additional challenges include observing clouds, discovering different shades of green, listening to natural sounds, and caring for plants.

## 🔐 Privacy and Offline Support

Privacy and independence are important parts of this project.

- In local AI mode, prompts are sent to the Ollama service running on the user's computer.
- The application uses browser local storage to save challenge completion progress.
- The basic activity generator does not require an external AI API.
- AI inference can operate offline after the model has been downloaded and configured.
- An internet connection is needed for the initial model download.
- The Google Fonts import in the stylesheet requires internet access for remote font loading.

For a fully offline experience, remove the external Google Fonts import and use system fonts. Keep Ollama running locally while using its AI functionality.

## 🔮 Future Improvements

The project can be expanded with features such as:

- A local nature guide for identifying plants and birds.
- Weather-aware outdoor activity suggestions.
- Garden planning based on local growing conditions.
- Outdoor walking route recommendations.
- A weekly outdoor activity planner.
- Optional offline caching through a service worker.
- More detailed challenge statistics.
- Support for additional compatible open-weight models.
- Multilingual activity suggestions.
- Accessibility improvements and customizable themes.

These are potential future features and are not all implemented in the current version.

## 🧠 Challenges and Learnings

Developing Touch Grass AI provides an opportunity to learn how to:

- Build a responsive website using HTML and CSS.
- Create interactive experiences using JavaScript.
- Connect a frontend application to a locally running AI service.
- Construct prompts for useful AI-generated recommendations.
- Handle API errors and provide fallback functionality.
- Store simple progress data in a browser.
- Consider privacy, accessibility, and offline usability when designing AI applications.

## 🌍 Why Touch Grass Matters

Technology is most useful when it helps people accomplish something meaningful.

Touch Grass AI explores how artificial intelligence can encourage people to step away from their devices, spend time outdoors, observe nature, and enjoy everyday experiences.

**The screen is only the beginning. The real adventure happens outside.**

## 🤝 Contributing

Contributions and suggestions are welcome.

To contribute:

1. Fork this repository.
2. Create a new branch for your feature.
3. Make your changes.
4. Test the application.
5. Submit a pull request describing your improvements.

You can contribute new activity ideas, improve accessibility, enhance the design, or experiment with other compatible open-weight models.

## 📄 License

This project is intended as an educational and experimental project.

A license has not yet been selected. Before publishing, consider adding an appropriate license, such as the MIT License, if you want others to reuse and modify your code under its terms. The AI model and other dependencies may have separate licenses.

## 🙌 Acknowledgements

- [Ollama](https://ollama.com/) for local model inference.
- [Meta Llama](https://www.llama.com/) for the example open-weight language model family.
- The open-source developer community for tools, ideas, and inspiration.

---

**Made with 🌿 to help people spend less time scrolling and more time living.**

### Touch Grass AI

**Go outside. Be curious. Repeat.**
