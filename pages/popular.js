import React from 'react';
import Layout from '../components/layout/Layout';
import ProductDetails from '../components/products/ProductDetails';
import useProduct from '../hooks/useProduct';

const Popular = () => {
  const { products } = useProduct('votes');

  return (
    <Layout title="Popular">
      <div>
        <ul>
          {products.map((product) => (
            <ProductDetails key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Popular;
