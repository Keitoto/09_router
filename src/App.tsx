import { AppShell, Container } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';

import { HeaderSimple } from '@/components/Header';
import { AboutPage } from '@/pages/About';
import { ErrorPage } from '@/pages/Error';
import { HomePage } from '@/pages/Home';

const navLinks = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Users', link: '/users' },
  { label: 'Contact', link: '/contact' },
];

const App = () => {
  return (
    <AppShell header={<HeaderSimple links={navLinks} />}>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </main>
    </AppShell>
  );
};

export default App;
