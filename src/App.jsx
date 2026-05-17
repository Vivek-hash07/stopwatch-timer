import { useState } from 'react';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import './App.css';

const MODES = [
  { id: 'stopwatch', label: 'Stopwatch' },
  { id: 'timer', label: 'Timer' },
];

export default function App() {
  const [mode, setMode] = useState('stopwatch');

  return (
    <main className="app">
      <header className="app__header">
        <h1>Timekeeper</h1>
        <p className="app__subtitle">Stopwatch &amp; countdown timer</p>
      </header>

      <nav className="mode-tabs" role="tablist" aria-label="Mode">
        {MODES.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={mode === id}
            aria-controls={`panel-${id}`}
            id={`tab-${id}`}
            className={`mode-tabs__btn ${mode === id ? 'mode-tabs__btn--active' : ''}`}
            onClick={() => setMode(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div
        id={`panel-${mode}`}
        role="tabpanel"
        aria-labelledby={`tab-${mode}`}
        className="app__panel"
      >
        {mode === 'stopwatch' ? <Stopwatch /> : <Timer />}
      </div>
    </main>
  );
}
