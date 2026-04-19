export type TerminalPresence = {
  isOnline: boolean;
  label: 'Terminal online' | 'Terminal offline';
};

const OFFLINE_WINDOWS = [
  { start: 1, end: 7 },
  { start: 14, end: 20 },
] as const;

const getDhakaHour = (date = new Date()): number => {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Dhaka',
    hour: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const hour = parts.find((part) => part.type === 'hour')?.value;
  return Number(hour ?? '0');
};

export const getTerminalPresence = (date = new Date()): TerminalPresence => {
  const dhakaHour = getDhakaHour(date);

  const isOffline = OFFLINE_WINDOWS.some((window) => dhakaHour >= window.start && dhakaHour < window.end);

  return {
    isOnline: !isOffline,
    label: isOffline ? 'Terminal offline' : 'Terminal online',
  };
};