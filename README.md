# Timekeeper — Stopwatch & Timer

A polished stopwatch and countdown timer built with React and Vite. Switch between modes with tabs, set a custom timer duration, and use start, pause, and reset controls on each.

**Live demo:** [https://stopwatch-timer-sandy.vercel.app/](https://stopwatch-timer-sandy.vercel.app/)

## Features

### Stopwatch
- **Count up** — tracks elapsed time with centisecond precision
- **Start / Pause / Reset** — full control over the stopwatch
- **Clear display** — `MM:SS.CS` format (adds hours when needed)

### Timer
- **Custom duration** — set hours, minutes, and seconds before starting
- **Countdown** — visual progress bar as time runs down
- **Start / Pause / Reset** — pause mid-countdown and reset to the set duration
- **Time's up** — message when the countdown reaches zero

### UI & UX
- Tab navigation between Stopwatch and Timer
- Dark theme with responsive layout
- Accessible controls and live time updates

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## How to use

### Stopwatch
1. Open the **Stopwatch** tab.
2. Click **Start** to begin counting.
3. Click **Pause** to stop temporarily, or **Reset** to clear back to zero.

### Timer
1. Open the **Timer** tab.
2. Enter hours, minutes, and seconds (default is 5 minutes).
3. Click **Start** to begin the countdown.
4. Click **Pause** to hold the remaining time, or **Reset** to restore the set duration.

## Project structure

```
src/
├── App.jsx                  # Tab navigation and layout
├── App.css                  # App styling
├── components/
│   ├── Stopwatch.jsx        # Stopwatch panel
│   ├── Timer.jsx            # Timer panel with inputs
│   ├── TimeDisplay.jsx      # Formatted time display
│   └── Controls.jsx         # Start, pause, reset buttons
├── hooks/
│   ├── useStopwatch.js      # Stopwatch state and timing logic
│   └── useTimer.js          # Timer state and countdown logic
└── utils/
    └── formatTime.js        # Format and parse time values
```

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
