import { useSyncExternalStore } from 'react';

// subscribe 要 return 移除自己所作所為的函式(unsubscribe)
function subscribe(callback) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getWindowWidthSnapshot() {
  return window.innerWidth;
}

function getWindowHeightSnapshot() {
  return window.innerHeight;
}

// server side rendering 所需，若不是就不需要
// function getServerSnapshot() {
//   return 0;
// }

export function useWindowDimensions() {
  const width = useSyncExternalStore(subscribe, getWindowWidthSnapshot);

  const height = useSyncExternalStore(subscribe, getWindowHeightSnapshot);

  return { width, height };
}
