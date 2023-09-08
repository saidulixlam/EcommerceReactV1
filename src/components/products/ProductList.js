import { Row, Container } from "react-bootstrap";
import ProductDisplay from "./ProductDisplay";
import { productArray } from "./ProductArray";
const PeoductList = () => {
    const productsArr = productArray;
    const product = productsArr.map((item) => item)

    return (
        
            <Container >
                <h1 className="text-center my-4">Music</h1>
                <Row className="d-flex justify-content-space-evenly align-items-center gy-5 ">
                    {product.map((item, index) => (
                        
                        <ProductDisplay
                            key={index}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            price={item.price}
                        />
                        
                    ))}
                </Row>
            </Container>
        
    );
}

export default PeoductList;