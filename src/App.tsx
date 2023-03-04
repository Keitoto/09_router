import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
} from '@mantine/core';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HeaderSimple } from '@/components/Header';
import { AboutPage } from '@/pages/About';
import { ContactPage } from '@/pages/Contact';
import { ErrorPage } from '@/pages/Error';
import { HomePage } from '@/pages/Home';
import { UserDetailPage } from '@/pages/UserDetail';
import { UserListPage } from '@/pages/UserList';

const navLinks = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Users', link: '/users' },
  { label: 'Contact', link: '/contact' },
];

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <AppShell header={<HeaderSimple links={navLinks} />}>
            <main>
              <Container>
                <Routes>
                  <Route index element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/users" element={<UserListPage />} />
                  <Route path="/users/:id" element={<UserDetailPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </Container>
            </main>
          </AppShell>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
