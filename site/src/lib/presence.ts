export type TerminalPresence = {
  isOnline: boolean;
  label: 'Terminal online' | 'Terminal offline';
};

const WEEKEND_ACTIVE_WINDOW = {
  start: 7,
  end: 23,
} as const;

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

const getDhakaDay = (date = new Date()): number => {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Dhaka',
    weekday: 'short',
  }).formatToParts(date);

  const weekday = parts.find((part) => part.type === 'weekday')?.value;
  return ['Sat', 'Sun'].includes(weekday ?? '') ? 6 : 1;
};

export const getTerminalPresence = (date = new Date()): TerminalPresence => {
  const dhakaHour = getDhakaHour(date);
  const dhakaDay = getDhakaDay(date);

  if (dhakaDay === 6) {
    const isWeekendActive = dhakaHour >= WEEKEND_ACTIVE_WINDOW.start && dhakaHour < WEEKEND_ACTIVE_WINDOW.end;

    return {
      isOnline: isWeekendActive,
      label: isWeekendActive ? 'Terminal online' : 'Terminal offline',
    };
  }

  const isOffline = OFFLINE_WINDOWS.some((window) => dhakaHour >= window.start && dhakaHour < window.end);

  return {
    isOnline: !isOffline,
    label: isOffline ? 'Terminal offline' : 'Terminal online',
  };
};