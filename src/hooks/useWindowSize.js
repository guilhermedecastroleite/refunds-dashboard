import {
  useState,
  useEffect,
} from 'react';

import chakraUiTheme from '../theme/chakraUiTheme';

// Hook
export const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

export const useSmLayout = () => {
  const windowSize = useWindowSize();
  const [isSmLayout, setisSmLayout] = useState(false);

  useEffect(() => {
    setisSmLayout(windowSize && windowSize.width < chakraUiTheme.breakpoints.md);
  }, [windowSize]);

  return isSmLayout;
};

export const useMdLayout = () => {
  const windowSize = useWindowSize();
  const [isMdLayout, setisMdLayout] = useState(false);

  useEffect(() => {
    setisMdLayout(windowSize && (
      windowSize.width > chakraUiTheme.breakpoints.md
      && windowSize.width < chakraUiTheme.breakpoints.lg
    ));
  }, [windowSize]);

  return isMdLayout;
};

export const useLgLayout = () => {
  const windowSize = useWindowSize();
  const [isLgLayout, setisLgLayout] = useState(false);

  useEffect(() => {
    setisLgLayout(windowSize && (
      windowSize.width > chakraUiTheme.breakpoints.lg
      && windowSize.width < chakraUiTheme.breakpoints.xl
    ));
  }, [windowSize]);

  return isLgLayout;
};

export const useXlLayout = () => {
  const windowSize = useWindowSize();
  const [isXlLayout, setisXlLayout] = useState(false);

  useEffect(() => {
    setisXlLayout(windowSize && windowSize.width > chakraUiTheme.breakpoints.xl);
  }, [windowSize]);

  return isXlLayout;
};
