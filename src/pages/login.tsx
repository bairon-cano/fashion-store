import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppContext from 'context/AppContext';
import { useContext, useEffect, useRef, useState } from 'react';
import logo from '@logos/logo_yard_sale.svg';
import styles from 'styles/Login.module.scss';

const Login = () => {
  const [messageError, setMessageError] = useState(false); //estado para el mensaje de error
  const form: any = useRef();
  const { state, login }: any = useContext(AppContext);
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(form.current); //manejo del form para obtener la data
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    login(data.email, data.password);
  };

  useEffect(() => {
    if(state.isLogged === false) {
      setMessageError(true);
      return;
    };
    if(state.isLogged) router.push('/');
  }, [state.isLogged, router]);
  

  return (
    <div className={styles.Login}>
      <div className={styles['Login-container']}>
        {messageError && <span className={styles['message-error']}>Unregistered user</span>}
        <Image src={logo} alt="logo" className={styles.logo} width={150} />
        <form className={styles.form} ref={form} onSubmit={handleSubmit}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input 
            type="email" 
            required
            name="email" 
            placeholder="example@gmail.com" 
            className={`${styles.input} ${styles['input-email']}`}
            onChange={() => setMessageError(false)}
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input 
            type="password" 
            name="password"
            minLength={8}
            required
            placeholder="contraseña" 
            className={`${styles.input} ${styles['input-password']}`} 
            onChange={() => setMessageError(false)}
          />
          <button type='submit' className={`primary-button ${styles['login-button']}`}>
            Log in
          </button>
          <Link href="/password-recovery">Forgot my password</Link>
        </form>
        <Link href='/signup' className={`secondary-button ${styles['signup-button']}`}>Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
