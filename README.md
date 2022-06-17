### useResponsive Hook
- `Arguments` : none
- `Return` : isDesktop (뷰포트 너비가 데스크탑 사이즈인지 아닌지를 반환한다)
- `Where to use` : 데스크탑 뷰와 태블릿(모바일 포함)뷰가 다른 경우 
- `Source & Example`

```jsx

const checkIsDesktop = () => {
  const {
    visualViewport: { width: vw },
  } = window;

  if (vw > size.tablet) {
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

```

```jsx
// UnknownComponent

const Component = () =>{
  const isDesktop = useResponsive():
  return isDesktop ? <DesktopView /> : <TabletOrMobileView />
}
```


### styled-component theme.isNotDesktop

- `Source & Example`

```jsx
const theme: DefaultTheme = {
  brandColor_1: '#5A5FE8',
  brandColor_2: '#E0E0E0',
  brandColor_3: '#FBFDFF',

  isNotDesktop: `@media (max-width: ${size.tablet}px)`,

  minWidth: '360px',
};
```

```jsx
const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;

  ${props => props.theme.isNotDesktop} {
    background-color: blue;
  }
`;
```
