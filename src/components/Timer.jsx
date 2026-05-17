import { useTimer } from '../hooks/useTimer';
import TimeDisplay from './TimeDisplay';
import Controls from './Controls';

export default function Timer() {
  const {
    timeLeft,
    totalTime,
    isRunning,
    isFinished,
    input,
    updateInput,
    applyInput,
    start,
    pause,
    reset,
  } = useTimer();

  const progress = totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0;
  const canStart = timeLeft > 0 || parseInt(input.hours, 10) > 0 || parseInt(input.minutes, 10) > 0 || parseInt(input.seconds, 10) > 0;

  function handleInputChange(field, value) {
    if (isRunning) return;
    const maxLen = field === 'hours' ? 3 : 2;
    const digits = value.replace(/\D/g, '').slice(0, maxLen);
    updateInput(field, digits);
  }

  function handleInputBlur() {
    if (isRunning) return;
    applyInput();
  }

  return (
    <section className="panel" aria-label="Timer">
      <div className="timer-progress" aria-hidden="true">
        <div className="timer-progress__bar" style={{ width: `${progress}%` }} />
      </div>

      <TimeDisplay
        ms={timeLeft}
        showMs={false}
        variant="timer"
        finished={isFinished}
      />

      {isFinished && (
        <p className="timer-message" role="status">
          Time&apos;s up!
        </p>
      )}

      <fieldset className="time-input" disabled={isRunning}>
        <legend className="sr-only">Set timer duration</legend>
        <div className="time-input__group">
          <label htmlFor="timer-hours">
            <span className="time-input__label">Hours</span>
            <input
              id="timer-hours"
              type="text"
              inputMode="numeric"
              value={input.hours}
              onChange={(e) => handleInputChange('hours', e.target.value)}
              onBlur={handleInputBlur}
              placeholder="0"
            />
          </label>
          <span className="time-input__sep">:</span>
          <label htmlFor="timer-minutes">
            <span className="time-input__label">Minutes</span>
            <input
              id="timer-minutes"
              type="text"
              inputMode="numeric"
              value={input.minutes}
              onChange={(e) => handleInputChange('minutes', e.target.value)}
              onBlur={handleInputBlur}
              placeholder="0"
            />
          </label>
          <span className="time-input__sep">:</span>
          <label htmlFor="timer-seconds">
            <span className="time-input__label">Seconds</span>
            <input
              id="timer-seconds"
              type="text"
              inputMode="numeric"
              value={input.seconds}
              onChange={(e) => handleInputChange('seconds', e.target.value)}
              onBlur={handleInputBlur}
              placeholder="0"
            />
          </label>
        </div>
      </fieldset>

      <Controls
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
        canStart={canStart && !isFinished}
        startLabel={timeLeft <= 0 && !isRunning ? 'Set & Start' : 'Start'}
      />
    </section>
  );
}
