import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    brandColor_1: string;
    brandColor_2: string;
    brandColor_3: string;

    tablet: string;

    minWidth: string;
  }

  export interface StyleProps {
    width: string;
    height: string;
    backgroundColor: string;
    fontColor: string;
    fontSize: string;
    padding: string;
    border: string;
    aspectRatio: string;

    position: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
  }
}
