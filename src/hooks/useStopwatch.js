import { useCallback, useEffect, useRef, useState } from 'react';

export function useStopwatch() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startRef = useRef(0);
  const accumulatedRef = useRef(0);

  useEffect(() => {
    if (!isRunning) return;

    startRef.current = performance.now();

    const tick = () => {
      setElapsed(accumulatedRef.current + performance.now() - startRef.current);
    };

    tick();
    const id = setInterval(tick, 10);
    return () => clearInterval(id);
  }, [isRunning]);

  const start = useCallback(() => {
    if (isRunning) return;
    startRef.current = performance.now();
    setIsRunning(true);
  }, [isRunning]);

  const pause = useCallback(() => {
    if (!isRunning) return;
    accumulatedRef.current += performance.now() - startRef.current;
    setElapsed(accumulatedRef.current);
    setIsRunning(false);
  }, [isRunning]);

  const reset = useCallback(() => {
    accumulatedRef.current = 0;
    startRef.current = performance.now();
    setElapsed(0);
    setIsRunning(false);
  }, []);

  return { elapsed, isRunning, start, pause, reset };
}
