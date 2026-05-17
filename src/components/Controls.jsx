export default function Controls({
  isRunning,
  onStart,
  onPause,
  onReset,
  canStart = true,
  startLabel = 'Start',
}) {
  return (
    <div className="controls">
      {!isRunning ? (
        <button
          type="button"
          className="controls__btn controls__btn--primary"
          onClick={onStart}
          disabled={!canStart}
        >
          {startLabel}
        </button>
      ) : (
        <button type="button" className="controls__btn controls__btn--primary" onClick={onPause}>
          Pause
        </button>
      )}
      <button type="button" className="controls__btn controls__btn--secondary" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
