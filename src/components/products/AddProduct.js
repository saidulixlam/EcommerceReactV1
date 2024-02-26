import React, { useState } from 'react';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleProductImageChange = (e) => {
        const file = e.target.files[0];

        // Validate image file format
        if (file && !['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
            setErrorMessage('Invalid image format. Please select a valid image (PNG, JPEG, JPG).');
        } else {
            setErrorMessage('');
            setProductImage(file);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!productName || !productPrice || !productImage) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        // Process the form data (you can send it to the server or handle it as needed)
        console.log('Product Name:', productName);
        console.log('Product Price:', productPrice);
        console.log('Product Image:', productImage);

        // Reset the form after submission
        setProductName('');
        setProductPrice('');
        setProductImage('');
        setErrorMessage('');
    };

    return (
        <div className="container text-light">
            <h2>Add Products</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Product Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="productPrice"
                        placeholder="Enter product price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productImage" className="form-label">Product Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="productImage"
                        accept=".png, .jpg, .jpeg"
                        onChange={handleProductImageChange}
                    />
                    {errorMessage && <div className="text-danger">{errorMessage}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
