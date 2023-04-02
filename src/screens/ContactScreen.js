import { Form, Button } from 'react-bootstrap';

function ContactScreen() {
  return (
    <section>
      <h1>Contact Us</h1>
      <Form action="mailto:ezechukwuchibuikemoses@gmail.com" method="post" enctype="text/plain">
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" required />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter your phone number" required />
        </Form.Group>
        <Form.Group controlId="product">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" required />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </section>
  );
}

export default ContactScreen;
