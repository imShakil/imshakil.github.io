export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-950">
      <div className="text-center">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400 animate-spin-slow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" opacity="0.25" />
          <path
            strokeLinecap="round"
            strokeWidth="2"
            d="M12 2a10 10 0 0 1 10 10"
            opacity="0.75"
          />
        </svg>
        <p className="text-gray-600 dark:text-gray-400 mt-4">Loading...</p>
      </div>
    </div>
  );
}
