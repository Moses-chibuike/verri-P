import { Card } from 'react-bootstrap';

function AboutScreen() {
  return (
    <section>
      <h1>About Us</h1>
      <Card>
        <Card.Body>
          <Card.Title>Who we are</Card.Title>
          <Card.Text>
            VerriP is a sachet pure water company committed to providing clean and refreshing drinking water to our customers. We use state-of-the-art water treatment technology to ensure that our water is safe and of the highest quality. Our goal is to make clean drinking water accessible and affordable to everyone.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Title>Our Mission</Card.Title>
          <Card.Text>
            Our mission is to provide clean and refreshing drinking water to our customers while maintaining the highest standards of quality and service. We strive to be a company that our customers can trust and rely on for their hydration needs.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}

export default AboutScreen;
