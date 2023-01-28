import AppContext from 'context/AppContext';
import Link from 'next/link';
import { useContext } from 'react';
import styles from 'styles/Menu.module.scss';

const Menu = () => {
  const { toggleMenu }: any = useContext(AppContext);

  return (
    <div role="button" tabIndex={0} className={styles.Menu} onClick={() => toggleMenu()}>
      <ul>
        <li>
          <Link href="/orders" className={styles.title}>
            My orders
          </Link>
        </li>
        <li>
          <Link href="/account">My account</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
