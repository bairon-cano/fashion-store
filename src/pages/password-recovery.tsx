import { useRouter } from 'next/router';
import { useContext, useRef, useState } from 'react';
import AppContext from 'context/AppContext';
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import styles from 'styles/PasswordRecovery.module.scss';

const PasswordRecovery = () => {
  const [incorrectEmail, setIncorrectEmail] = useState(false); //estado para el mensaje de error 
  const form: any = useRef();
  const { changePassword, register }: any = useContext(AppContext);
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(form.current); //manejo del form para obtener la data
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    const response = changePassword(data.email);
    if(response.userExist){
      setIncorrectEmail(true);
      data.password && register(data.email, {...response.user, password: data.password});
      data.password && router.push('/login');
    } else {
      setIncorrectEmail(false);
    }
  };

  return (
    <div className={styles.PasswordRecovery}>
      <div className={styles['PasswordRecovery-container']}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Password recovery</h1>
        <p className={styles.subtitle}>Inform the email address used to create your account</p>
        <form action="/" className={styles.form} ref={form} onSubmit={handleSubmit}>
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <input 
            type="text" 
            name="email" 
            required 
            className={`${styles.input} ${styles['input-email']}`} 
            onChange={() => setIncorrectEmail(true)} 
          />
          <label htmlFor="password" className={styles.label}>
            New Password
          </label>
          <input type="password" name="password" minLength={8} required className={`${styles.input} ${styles['input-email']}`} />
          {!incorrectEmail && 
            <span className={styles['message-error']}>Este usuario no existe</span>}
          <input type="submit" value="Confirm" className={`primary-button ${styles['login-button']}`} />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
