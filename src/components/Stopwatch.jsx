import { useStopwatch } from '../hooks/useStopwatch';
import TimeDisplay from './TimeDisplay';
import Controls from './Controls';

export default function Stopwatch() {
  const { elapsed, isRunning, start, pause, reset } = useStopwatch();

  return (
    <section className="panel" aria-label="Stopwatch">
      <TimeDisplay ms={elapsed} showMs variant="stopwatch" />

      <Controls
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
      />
    </section>
  );
}
