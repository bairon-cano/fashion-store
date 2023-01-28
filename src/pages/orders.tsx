import OrderItem from 'components/OrderItem';
import AppContext from 'context/AppContext';
import { useContext } from 'react';
import styles from 'styles/Orders.module.scss';

const Orders = () => {
  const { state }: any = useContext(AppContext);

  return (
    <div className={`${styles.Orders} ${state.orderIsOpen ? 'changeBg' : ''}`}>
      <div className={styles['Orders-container']}>
        <h1 className={styles.title}>My orders</h1>
        {state.cart.map((product: any) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
