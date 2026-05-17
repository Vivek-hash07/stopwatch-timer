import { useCallback, useEffect, useRef, useState } from 'react';
import { parseTimeInput } from '../utils/formatTime';

const DEFAULT_INPUT = { hours: '0', minutes: '5', seconds: '0' };
const DEFAULT_MS = parseTimeInput(
  DEFAULT_INPUT.hours,
  DEFAULT_INPUT.minutes,
  DEFAULT_INPUT.seconds,
);

export function useTimer() {
  const [timeLeft, setTimeLeft] = useState(DEFAULT_MS);
  const [totalTime, setTotalTime] = useState(DEFAULT_MS);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [input, setInput] = useState(DEFAULT_INPUT);

  const endRef = useRef(0);

  useEffect(() => {
    if (!isRunning) return;

    const tick = () => {
      const remaining = Math.max(0, endRef.current - performance.now());
      setTimeLeft(remaining);
      if (remaining <= 0) {
        setIsRunning(false);
        setIsFinished(true);
      }
    };

    tick();
    const id = setInterval(tick, 10);
    return () => clearInterval(id);
  }, [isRunning]);

  const setDuration = useCallback((hours, minutes, seconds) => {
    const ms = parseTimeInput(hours, minutes, seconds);
    setTotalTime(ms);
    setTimeLeft(ms);
    setIsFinished(false);
    return ms;
  }, []);

  const updateInput = useCallback((field, value) => {
    setInput((prev) => ({ ...prev, [field]: value }));
  }, []);

  const applyInput = useCallback(() => {
    if (isRunning) return 0;
    return setDuration(input.hours, input.minutes, input.seconds);
  }, [input, isRunning, setDuration]);

  const start = useCallback(() => {
    if (isRunning) return;

    let duration = timeLeft;
    if (duration <= 0) {
      duration = setDuration(input.hours, input.minutes, input.seconds);
      if (duration <= 0) return;
    }

    endRef.current = performance.now() + duration;
    setIsFinished(false);
    setIsRunning(true);
  }, [isRunning, timeLeft, input, setDuration]);

  const pause = useCallback(() => {
    if (!isRunning) return;
    const remaining = Math.max(0, endRef.current - performance.now());
    setTimeLeft(remaining);
    setIsRunning(false);
  }, [isRunning]);

  const reset = useCallback(() => {
    setIsRunning(false);
    setIsFinished(false);
    setDuration(input.hours, input.minutes, input.seconds);
  }, [input, setDuration]);

  return {
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
  };
}
