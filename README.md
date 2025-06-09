# 🧠 React Quiz Application

An intelligent, real-time **Quiz Application** built with **React**, **TailwindCSS**, and **LLaMA-powered GenAI**, offering an interactive quiz experience with countdown timer, AI-generated hints, and visual feedback mechanisms.

---

## 🚀 Features

- ⏱️ **Timer-Based Quizzes**
  - Each question is timed for **1 minute**.
  - A **countdown timer** appears at the top in a **navbar-style** layout.
  - Quiz auto-submits when time is up.

- 🔔 **Final Minute Alert**
  - When only 1 minute remains:
    - A **notification sound** is played.
    - A **modal popup** appears with a warning.
    - The sound loops until the popup is dismissed.

- 🤖 **AI-Powered Hints (LLaMA Integration)**
  - When the user clicks the **"Hint"** button:
    - A request is sent to a backend using **Meta’s LLaMA model** via GenAI.
    - The model returns a smart, context-aware hint for that question.
    - The hint is displayed in a modal.
  - This shows practical use of **LLMs (Large Language Models)** to enhance learning and interactivity.

- 💡 **Popup Modal System**
  - Hint and alert modals are cleanly styled and animated.
  - Popups do not block timer or quiz flow.

- ✅ **Answer Tracking and Manual Submission**
  - All user selections are recorded in state.
  - A **Submit** button is shown at the bottom to allow manual submission.

- 🎨 **Professional UI (TailwindCSS)**
  - Clean layout with modern **dark/light contrast**.
  - Cream-colored timer section and responsive components.
  - Components organized for maintainability and reusability.

- 🧰 **React Hooks**
  - `useEffect`, `useRef`, `useState` for lifecycle control, timer, and state.
  - Efficient handling of timeouts and resource cleanup.

---

## 🛠️ Tech Stack

| Frontend        | Backend / AI         |
|-----------------|----------------------|
| React           | Node.js              |
| TailwindCSS     | GenAI with **LLaMA** |
| Lottie          | REST APIs            |
| HTML5 Audio API |                      |

---

## ⚙️ How It Works

### 🕒 Timer Initialization

- Total time = `number of questions × 60 seconds`
- Timer tracked using `setInterval` and updated via `useState`

### 🔔 Final Minute Detection

- When `timeLeft === 60`:
  - **Notification sound** plays
  - **Popup alert** appears
  - Sound loops until modal is dismissed

### 💡 Hint Generation (GenAI + LLaMA)

- On clicking **"Hint"**:
  - Current question sent to backend
  - **LLaMA model** generates a contextual hint
  - Hint stored in state and displayed in modal

### ⏳ Auto-Submit

- When timer reaches `0`:
  - The quiz auto-submits via `onTimeUp()`

---

## 🧪 Setup Instructions (Frontend + Backend)

This project contains both the **React frontend** and **Node.js backend** inside a single repository:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/flashcard-quiz-app.git
cd flashcard-quiz-app
```

### 2. Install Frontend Dependencies 

```bash
npm install
```
### 3. 3. Install Backend Dependencies

```bash
cd backend
npm install
cd ..

```
### 4. Configure Environment Variables

- Create `.env` files as needed:

  - **Frontend `.env`** (at the project root)

  - **Backend `.env`** (inside the `backend/` folder)

```bash
npm run dev
```



## 👩‍💻 Author

**Anjana Kumari**  
MCA | Full Stack Developer | Passionate about AI and Full Stack Development

📧 anjanasingh1257@gmail.com  

💼 [LinkedIn](https://linkedin.com/in/anjana732)  

🐙 [GitHub](https://github.com/anjana732)

