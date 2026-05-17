import { formatTime } from '../utils/formatTime';

export default function TimeDisplay({ ms, showMs = true, variant = 'default', finished = false }) {
  return (
    <div className={`time-display time-display--${variant} ${finished ? 'time-display--finished' : ''}`}>
      <span className="time-display__value" aria-live="polite" aria-atomic="true">
        {formatTime(ms, { showMs })}
      </span>
    </div>
  );
}
