import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/common/PageTemplate';
import First from '../../components/landing/First';
import Second from '../../components/landing/Second';
import Third from '../../components/landing/Third';
import 화살표 from '../../components/svg/화살표';

function Landing() {
  const [type, setType] = useState(0);

  const scrollRef = useRef();

  useEffect(() => {
    const timeout = {
      current: null,
    };

    const wheelHandler = e => {
      e.preventDefault();

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        const isUpScroll = e.deltaY < 0;

        if (isUpScroll) {
          setType(prev => (prev === 0 ? 0 : prev - 1));
          return;
        }

        setType(prev => (prev === 2 ? 2 : prev + 1));
      }, 50);
    };
    (scrollRef.current as HTMLDivElement).addEventListener('wheel', wheelHandler);

    return () => {
      (scrollRef?.current as HTMLDivElement)?.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <PageTemplate>
      <Container
        onScroll={e => {
          console.log('hi');
          e.preventDefault();
        }}
        ref={scrollRef}
      >
        {type === 0 && <First />}
        {type === 1 && <Second />}
        {type === 2 && <Third />}

        {type !== 2 ? (
          <Down>
            <화살표 />
          </Down>
        ) : (
          <Up>
            <화살표 />
          </Up>
        )}
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

const Down = styled.div`
  position: absolute;

  bottom: 10px;
  left: 50%;

  animation: animeDown ease-in 1s infinite;
  animation-direction: alternate;

  @keyframes animeDown {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(5px);
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

const Up = styled.div`
  position: absolute;

  bottom: 10px;
  left: 50%;

  animation: animeUp ease-in 1s infinite;
  animation-direction: alternate;

  @keyframes animeUp {
    from {
      transform: rotate(180deg) translateY(0);
    }

    to {
      transform: rotate(180deg) translateY(5px);
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
