import { Card, Button } from 'react-bootstrap';

const products = [
  {
    name: '10 Bags',
    price: 200,
  },
  {
    name: '20 Bags',
    price: 400,
  },
  {
    name: '50 Bags',
    price: 1000,
  },
];

function ProductsScreen() {
  return (
    <section>
      <h1>Products</h1>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.price} Naira
                </Card.Text>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsScreen;
