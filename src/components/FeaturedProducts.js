// FeaturedProducts.js

import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import '../css/FeaturedProducts.css'; // Import the styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$29.99',
      imageUrl: '/images/born1.jpg',
      images: [
        '/images/born2.jpg',
        '/images/born3.jpg',
        '/images/born4.jpg',
      ],
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$29.99',
      imageUrl: '../images/laura1.jpg',
      images: [
            '../images/laura2.jpg',
            '../images/laura3.jpg',
            '../images/laura4.jpg',
          ],
    },
    // Repeat for other products
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
  console.log('Opening modal for:', product.name);
  setSelectedProduct(product);
  setModalIsOpen((prevModalIsOpen) => {
    console.log('Modal opened - modalIsOpen:', prevModalIsOpen, 'selectedProduct:', product);
    return true;
  });
};

const closeModal = () => {
  console.log('Closing modal');
  setModalIsOpen((prevModalIsOpen) => {
    console.log('Modal closed - modalIsOpen:', prevModalIsOpen, 'selectedProduct:', selectedProduct);
    return false;
  });
  setSelectedProduct(null);
};

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="featuredProducts" id='products'>
      <div className="featuredProductsContainer">
        <h2>Featured Products</h2>
        <div className="productList">
          {products.map(product => (
            <div key={product.id} className="productCard" onClick={() => openModal(product)}>
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterOpen={() => {
          console.log('Modal opened');
          document.body.style.overflow = 'hidden'; // Disable body scroll
        }}
        onAfterClose={() => {
          console.log('Modal closed');
          document.body.style.overflow = 'auto'; // Enable body scroll
        }}
        contentLabel="Product Modal"
        ariaHideApp={false} // Fix for React Modal warnings
        className="productModal"
        overlayClassName="productOverlay"
      >
        {selectedProduct && (
          <div>
            <Slider {...sliderSettings}>
              {selectedProduct.images.map((image, index) => (
                <div key={index} className="modalImage">
                  <img src={image} alt={`${selectedProduct.name} - Image ${index + 1}`} />
                </div>
              ))}
            </Slider>
            <p>Slider rendered</p>
          </div>
        )}

        <button className="closeButton" onClick={closeModal}>Close</button>
      </Modal>
    </section>
  );
}

export default FeaturedProducts;