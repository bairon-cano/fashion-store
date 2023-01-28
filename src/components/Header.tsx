import React, { useContext } from 'react';
import Link from 'next/link';
import Menu from 'components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from 'context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import Image from 'next/image';
import MyOrder from 'containers/MyOrder';
import styles from 'styles/Header.module.scss';

const Header = () => {
  const { state, toggleOrder, toggleMenu, changeFilter }: any = useContext(AppContext);

  return (
    <>
      <nav className={styles.Nav}>
        <div className={styles.iconContainer}>
          <Image src={menu} alt="Mostrar menú de búsqueda" width={30} height={30} className={styles.menu} />
        </div>
        <div className={styles['navbar-left']}>
          <Link href="/" className={styles['nav-logo']}>
            <Image src={logo} alt="logo" />
          </Link>
          <ul>
            <li>
              <Link href='/' onClick={() => changeFilter('All')}>All</Link>
            </li>
            <li>
              <Link href='/' onClick={() => changeFilter('Clothes')} >Clothes</Link>
            </li>
            <li>
              <Link href='/' onClick={() => changeFilter('Electronics')}>Electronics</Link>
            </li>
            <li>
              <Link href='/' onClick={() => changeFilter('Shoes')}>Shoes</Link>
            </li>
            <li>
              <Link href='/' onClick={() => changeFilter('Furniture')}>Furniture</Link>
            </li>
            <li>
              <Link href='/' onClick={() => changeFilter('Others')}>Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            {!state?.isLogged ? 
              <Link href='login' className={`${styles['navbar-login']} pointer`}>
                Login
              </Link>  :
              <div role='button' tabIndex={0} className={`${styles['more-clickable-area']} ${styles['navbar-email']} pointer`} onClick={() => toggleMenu()}>
                {state?.user?.name}
              </div>
            }
            <div role='button' tabIndex={0} className={styles['navbar-shopping-cart']} onClick={() => toggleOrder()}>
              <Image className={`${styles['more-clickable-area']} pointer`} src={shoppingCart} alt="shopping cart" />
              {state?.cart.length > 0 ? <div>{state?.cart.length}</div> : null}
            </div>
          </ul>
        </div>
        {state?.menuIsOpen && <Menu />}
      </nav>
      {state?.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
