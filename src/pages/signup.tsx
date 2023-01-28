import AppContext from 'context/AppContext';
import { useRouter } from 'next/router';
import { useContext, useRef } from 'react';
import styles from 'styles/CreateAccount.module.scss';

const CreateAccount = () => {
  const form: any = useRef();
  const { register }: any = useContext(AppContext);
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(form.current); //manejo del form para obtener la data
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    register(data.email, data);
    router.push('/login');
    console.log(data);
  };

  return (
    <div className={styles.CreateAccount}>
      <div className={styles['CreateAccount-container']}>
        <h1 className={styles.title}>My Account</h1>
        <form className={styles.form} ref={form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input 
              type="text" 
              name="name" 
              placeholder="Juan Perez" 
              required
              className={`${styles.input} ${styles['input-name']}`}
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input 
              type="email"
              name="email"
              required 
              placeholder="example@gmail.com" 
              className={`${styles.input} ${styles['input-email']}`} 
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input 
              type="password" 
              name="password" 
              placeholder="contraseña" 
              required
              minLength={8}
              className={`${styles.input} ${styles['input-password']}`}
            />
          </div>
          <input type="submit" value="Create" className={`primary-button ${styles['login-button']}`} />
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
