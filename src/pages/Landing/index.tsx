import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/common/PageTemplate';
import First from '../../components/landing/First';
import Second from '../../components/landing/Second';
import Third from '../../components/landing/Third';
import 화살표 from '../../components/svg/화살표';

function Landing() {
  const [type, setType] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout: { current: null | NodeJS.Timeout } = {
      current: null,
    };

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        if (e.deltaY === 0) {
          return;
        }

        const isUpScroll = e.deltaY < 0;

        if (isUpScroll) {
          setType(prev => (prev === 0 ? 0 : prev - 1));
          return;
        }

        setType(prev => (prev === 2 ? 2 : prev + 1));
      }, 60);
    };
    scrollRef.current?.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      scrollRef.current?.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: window.innerHeight * type, behavior: 'smooth' });
  }, [type]);

  return (
    <PageTemplate>
      <Container
        onScroll={e => {
          e.preventDefault();
        }}
        ref={scrollRef}
      >
        {<First type={type} />}
        {<Second type={type} />}
        {<Third type={type} />}
      </Container>
    </PageTemplate>
  );
}

const Container = styled.div`
  color: ${({ theme }) => theme.brandColor_1};

  overflow-y: scroll;
  overflow-x: scroll;

  width: 100%;

  position: relative;
`;

export const Down = styled.div`
  position: absolute;

  bottom: 10px;
  left: 50%;

  animation: animeDown ease-in 1s infinite;
  animation-direction: alternate;

  @keyframes animeDown {
    from {
      transform: translate(-50%, 0);
    }

    to {
      transform: translate(-50%, 5px);
    }
  }

  & svg {
    animation: fade-in 1 ease-in 1s;
    @keyframes fade-in {
      from {
        opacity: 0;
      }

      to {
        opacity: 0.99;
      }
    }
  }
`;

export const Up = styled.div`
  position: absolute;

  bottom: 10px;
  left: 50%;

  animation: animeUp ease-in 1s infinite;
  animation-direction: alternate;

  @keyframes animeUp {
    from {
      transform: rotate(180deg) translate(50%, 0);
    }

    to {
      transform: rotate(180deg) translate(50%, 5px);
    }
  }

  & svg {
    animation: fade-in 1 ease-in 1s;
    @keyframes fade-in {
      from {
        opacity: 0;
      }

      to {
        opacity: 0.99;
      }
    }
  }
`;

export default Landing;
