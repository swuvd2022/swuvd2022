import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const StyledImage = styled.img<{ isLoad: boolean; aspectRatio: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;

  ${({ isLoad, aspectRatio }) => css`
    aspect-ratio: ${aspectRatio};
    display: ${isLoad ? 'block' : 'none'};
  `}
`;

const StyledPlaceholder = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  aspect-ratio: ${({ aspectRatio }: { aspectRatio: string }) => aspectRatio};
`;

interface ImagePropsType {
  src: string;
  alt: string;
  aspectRatio?: string;
}

function Image({ src, alt, aspectRatio = '16/9' }: ImagePropsType) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const onImageLoaded = () => {
    setIsLoaded(true);
  };

  const onImageError = () => {
    setIsError(true);
  };

  useEffect(() => {
    setIsError(false);
  }, [src]);

  return isError ? (
    <StyledPlaceholder aspectRatio={aspectRatio} />
  ) : (
    <StyledImage
      src={src}
      alt={alt}
      isLoad={isLoaded}
      onLoad={onImageLoaded}
      onError={onImageError}
      aspectRatio={aspectRatio}
    />
  );
}

export default Image;
