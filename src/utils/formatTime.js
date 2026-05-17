export function formatTime(ms, { showMs = true } = {}) {
  const total = Math.max(0, Math.floor(ms));
  const hours = Math.floor(total / 3600000);
  const minutes = Math.floor((total % 3600000) / 60000);
  const seconds = Math.floor((total % 60000) / 1000);
  const centiseconds = Math.floor((total % 1000) / 10);

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  const cs = String(centiseconds).padStart(2, '0');

  if (hours > 0) {
    return showMs ? `${hh}:${mm}:${ss}.${cs}` : `${hh}:${mm}:${ss}`;
  }
  return showMs ? `${mm}:${ss}.${cs}` : `${mm}:${ss}`;
}

export function parseTimeInput(hours, minutes, seconds) {
  const h = Math.max(0, parseInt(hours, 10) || 0);
  const m = Math.max(0, Math.min(59, parseInt(minutes, 10) || 0));
  const s = Math.max(0, Math.min(59, parseInt(seconds, 10) || 0));
  return (h * 3600 + m * 60 + s) * 1000;
}
