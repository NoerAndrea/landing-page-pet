import { Fragment } from 'react/jsx-runtime';
import { Banner } from '../components/styled-components/Banner';
import { NavBar } from '../components/styled-components/NavBar';
import { Container } from '../components/styled-components/Container';
import { Figure } from '../components/styled-components/Figure';

import image1 from '/growdev/landing-page-pet/image/photo-dog-sits-of-front-paws-isolated-on-white-background-61266.jpg';
import { Wrapper } from '../components/styled-components/Wrapper';
import { Row } from '../components/styled-components/Row';
import { Column } from '../components/styled-components/Column';
import { Card } from '../components/styled-components/Card';
import { IconFigure } from '../components/styled-components/IconFigure';

import image2 from '/growdev/landing-page-pet/image/01-domesticated-dog.jpg';
import image3 from '/growdev/landing-page-pet/image/reconhecer-raca-de-cao.jpg';
import image4 from '/growdev/landing-page-pet/image/blog-melhores_amigos-09-03-1-1024x576.png';
import { Footer } from '../components/styled-components/Footer';

export function Home() {
  return (
    <Fragment>
      <div>
        <NavBar>
          <ul>
            <li>About</li>
            <li>Our pets</li>
            <li>Contacts</li>
          </ul>
        </NavBar>
        <Banner>
          <div>
            <h1>Not only people need a house</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              quia architecto! Magnam explicabo sit quod suscipit quaerat rerum
              perspiciatis? Sequi, tenetur. Dolorem, accusamus. Molestiae, quas
              error quibusdam qui autem ducimus.
            </p>
          </div>
        </Banner>
      </div>

      <Container $display="flex" $direction="row" $alignItems="center">
        <Figure $imageUrl={image1} />
        <Wrapper>
          <h2>About the shelter "Cozy House"</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos tempore, ad minima debitis eum labore nemo neque
            voluptatem, magni explicabo doloremque. Facilis obcaecati nesciunt
            quibusdam voluptatum delectus velit, inventore ipsam!
          </p>
        </Wrapper>
      </Container>
      <Container
        $display="flex"
        $direction="column"
        $alignItems="center"
        $fluid
        $backgroundColor="#f2f2f2"
      >
        <Wrapper>
          <h2>Our friends who are looking for a house</h2>
        </Wrapper>
        <Row>
          <Column>
            <Card>
              <Figure $imageUrl={image2} $width="200px" $height="200px" />
              <h3>Woody</h3>
            </Card>
          </Column>
          <Column>
            <Card>
              <Figure $imageUrl={image3} $width="200px" $height="200px" />
              <h3>Walle</h3>
            </Card>
          </Column>
          <Column>
            <Card>
              <Figure $imageUrl={image4} $width="200px" $height="200px" />
              <h3>Olaf</h3>
            </Card>
          </Column>
        </Row>
      </Container>
      <Container $display="flex" $direction="column" $alignItems="center">
        <Wrapper>
          <h2>Than you can help our shelter</h2>
        </Wrapper>
        <Row>
        <Column>
          <IconFigure $iconUrl="https://fonts.gstatic.com/s/i/materialicons/toys/v9/24px.svg" />
        </Column>
        <Column>
          <IconFigure $iconUrl="https://fonts.gstatic.com/s/i/materialicons/local_hospital/v12/24px.svg" />
        </Column>        
        <Column>
          <IconFigure $iconUrl="https://fonts.gstatic.com/s/i/materialicons/search/v10/24px.svg" />
        </Column>
        <Column>
          <IconFigure $iconUrl="https://fonts.gstatic.com/s/i/materialicons/attach_money/v12/24px.svg" />
        </Column>
      </Row>
      </Container>
      <Footer>
        
      </Footer>
    </Fragment>
  );
}
