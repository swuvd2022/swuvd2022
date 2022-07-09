import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import { GlobalStyle } from './styles/GlobalStyles';
import theme from './styles/Theme';

// if (process.env.NODE_ENV === 'development') {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const { worker } = require('./mocks/browser');

//   worker.start();
// }

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
