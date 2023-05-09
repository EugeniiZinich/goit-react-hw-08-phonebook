// import { Container } from '@mui/material';
import { Home } from 'components/Home/Home';
import { HomeContainer } from './HomePage.styled';

export default function HomePage() {
  return (
    <section>
      <HomeContainer disableGutters maxWidth={false}>
        <Home />
      </HomeContainer>
    </section>
  );
}
