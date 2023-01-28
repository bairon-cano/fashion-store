import React, { useContext, useEffect, useState } from 'react';
import ProductItem from 'components/ProductItem';
import useGetProducts from 'hooks/useGetProducts';
import AppContext from 'context/AppContext';
import styles from 'styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);
  const [productsList, setProductsList] = useState(products);
  const { changeProducts, state }: any = useContext(AppContext);
  
  useEffect(() => {
    setProductsList(changeProducts(products));
  }, [changeProducts, products]);
  

  return (
    <section className={`${styles['main-container']} ${state.orderIsOpen ? 'changeBg' : ''}`}>
      <div className={styles.ProductList}>
        {productsList.map((product: any) => (
          <ProductItem product={product} key={product?.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
