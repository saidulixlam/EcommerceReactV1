import { Row, Container } from "react-bootstrap";
import ProductDisplay from "./ProductDisplay";
const PeoductList = () => {
    const productsArr = [

        {

            title: 'Album 1',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {

            title: 'Album 2',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {

            title: 'Album 3',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {

            title: 'Album 4',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        },
        {

            title: 'Album 5',

            price: 150,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ]
    const product = productsArr.map((item) => item)

    return (
        
            <Container >
                <h1 className="text-center my-4">Music</h1>
                <Row className="d-flex justify-content-space-evenly align-items-center gy-5">
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