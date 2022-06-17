import { useCallback, useEffect, useState } from 'react';
import { size } from '../styles/Theme';
const checkIsTablet = () => {
  const {
    visualViewport: { width: vw },
  } = window;

  if (vw > size.tablet) {
    return false;
  }

  return true;
};

// desktop인지 아닌지만 확인하면 된다.
export default function useResponsive() {
  const [isTablet, setIsTablet] = useState(() => checkIsTablet());

  const updateWindowWidth = useCallback(() => {
    const isDesktop = checkIsTablet();
    setIsTablet(isDesktop);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return isTablet;
}
