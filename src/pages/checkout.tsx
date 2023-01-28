import OrderItem from 'components/OrderItem';
import { useContext } from 'react';
import AppContext from 'context/AppContext';
import styles from 'styles/Checkout.module.scss';

const Checkout = () => {
  const { state }: any = useContext(AppContext);
  const tiempoTranscurrido = Date.now();
  const hoy: Date = new Date(tiempoTranscurrido);
  // const router = useRouter();

  const sumTotal = () => {
    const reducer = (accumalator: any, currentValue: any) => accumalator + currentValue?.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };
  

  return (
    <section>
      <div className={`${styles.Checkout} ${state.orderIsOpen ? 'changeBg' : ''}`}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles.order}>
              <p>
                <span>{hoy.toLocaleDateString()}</span>
                <span>{state?.cart?.length} articles</span>
              </p>
              <p>${sumTotal()}</p>
            </div>
          </div>
          {state?.cart.map((product: any) => (
              <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Checkout;
