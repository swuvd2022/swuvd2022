import 'styled-components';
import theme from './Theme';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}

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
