import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PageTemplate from '../../components/common/PageTemplate';
import First from '../../components/landing/First';
import Second from '../../components/landing/Second';
import Third from '../../components/landing/Third';

function Landing() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const ref = useRef({ timeout: null, isScrolling: false });

  const type = useRef(0);

  const wheelHandler = useCallback((e: WheelEvent) => {
    if (e.deltaY === 0) {
      return;
    }

    e.preventDefault();

    if (ref.current.isScrolling) {
      return;
    }

    if (e.deltaY === 0) {
      return;
    }

    const isUpScroll = e.deltaY < 0;

    ref.current.isScrolling = true;

    if (isUpScroll) {
      if (type.current === 0) {
        ref.current.isScrolling = false;

        return;
      }

      type.current = type.current === 0 ? 0 : type.current - 1;

      scrollRef.current?.scrollTo({
        top: window.innerHeight * type.current,
        behavior: 'smooth',
      });

      return;
    }

    if (type.current === 2) {
      ref.current.isScrolling = false;

      return;
    }

    type.current = type.current === 2 ? 2 : type.current + 1;
    scrollRef.current?.scrollTo({
      top: window.innerHeight * type.current,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    scrollRef.current?.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      scrollRef.current?.removeEventListener('wheel', wheelHandler);
    };
  }, [wheelHandler]);

  return (
    <PageTemplate>
      <Container
        onScroll={e => {
          e.preventDefault();

          if (ref.current.timeout) {
            clearTimeout(ref.current.timeout);
          }

          ref.current.timeout = setTimeout(() => {
            ref.current.isScrolling = false;
          }, 500);
        }}
        ref={scrollRef}
      >
        {<First />}
        {<Second />}
        {<Third />}
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
