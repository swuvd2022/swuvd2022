import { useCallback, useEffect, useState } from 'react';
import { size } from '../styles/Theme';
const checkIsDesktop = () => {
  const { innerWidth } = window;

  if (innerWidth > size.tablet) {
    return true;
  }

  return false;
};

// desktop인지 아닌지만 확인하면 된다.
export default function useResponsive() {
  const [isDesktop, setIsDesktop] = useState(() => checkIsDesktop());

  const updateWindowWidth = useCallback(() => {
    const isDesktop = checkIsDesktop();
    setIsDesktop(isDesktop);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return isDesktop;
}
