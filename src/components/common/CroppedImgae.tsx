import styled from 'styled-components';

interface CroppedImageProps {
  src: string;
  alt: string;
  width?: string;
  ratio: string;
}

const CroppedImage = ({ src, width, ratio, alt }: CroppedImageProps) => {
  return (
    <StyledImageWrapper width={width} ratio={ratio}>
      <StyledImage src={src} alt={alt} />
    </StyledImageWrapper>
  );
};

export default CroppedImage;

const StyledImageWrapper = styled.div<Pick<CroppedImageProps, 'width' | 'ratio'>>`
  position: relative;
  width: ${({ width }) => width || '100%'};
  height: 0;
  padding-bottom: ${({ ratio }) => ratio};
  overflow: hidden;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
