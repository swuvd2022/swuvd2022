import { IframeHTMLAttributes } from 'react';
import styled from 'styled-components';

interface CroppedVideoProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  src: string;
  width?: string;
  ratio?: string;
  height?: string;
}

const CroppedVideo = ({ src, width, ratio, height, ...props }: CroppedVideoProps) => {
  return (
    <StyledImageWrapper width={width} ratio={ratio} height={height}>
      <StyledImage src={src} {...props} />
    </StyledImageWrapper>
  );
};

export default CroppedVideo;

const StyledImageWrapper = styled.div<Pick<CroppedVideoProps, 'width' | 'ratio' | 'height'>>`
  position: relative;
  width: ${({ width }) => width || '100%'};
  height: 0;
  padding-bottom: ${({ ratio, height }) => (ratio ? ratio : height)};
  overflow: hidden;
`;

const StyledImage = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
