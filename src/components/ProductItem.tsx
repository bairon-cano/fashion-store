import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from 'context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.png';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from 'styles/ProductItem.module.scss';
import { useRouter } from 'next/router';

const ProductItem = ({ product }: any) => {
  const { state, addToCart }: any = useContext(AppContext);
  const route = useRouter();

  const handleClick = (item: any) => {
    if(!state.isLogged) {
      route.push('/login');
      return;
    }
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  const validatedUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className={styles.ProductItem}>
      {validatedUrl(product?.images[0]) &&
        <>
          <Image src={product?.images[0]} alt={product?.title} width={240} height={240} />
          <div className={styles['product-info']}>
            <div>
              <p>${product?.price}</p>
              <p>{product?.title}</p>
            </div>
            <figure className={styles['more-clickable-area']}>
              {state.cart.includes(product) ? (
                <Image className={`${styles['add-to-cart-btn']}`} src={addedToCartImage} width={35} height={35} alt="added to cart" />
              ) : (
                <Image className={`${styles['add-to-cart-btn']} pointer`} width={35} height={35} src={addToCartImage} alt="add to cart" onClick={() => handleClick(product)} />
              )}
            </figure>
          </div>
        </>
      }
    </div>
  );
};

export default ProductItem;
