import { useEffect, useState } from 'react';

interface IWindowSize {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({ width: 0, height: 0 });

  const isMobile: boolean = windowSize.width <= 768;
  const isTablet: boolean = windowSize.width <= 1024 && windowSize.width > 768;
  const isDesktop: boolean = windowSize.width > 1024;
  const isNoDesktop: boolean = isTablet || isMobile;

  useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handler();

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    isNoDesktop,
  };
};

export { useWindowSize };
