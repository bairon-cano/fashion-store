import AppContext from 'context/AppContext';
import { useContext, useRef, useState } from 'react';
import styles from 'styles/MyAccount.module.scss';

const MyAccount = () => {
  const [message, setMessage] = useState(false); //estado para el mensaje de error
  const form: any = useRef();
  const { state, register }: any = useContext(AppContext);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(form.current); //manejo del form para obtener la data
    const data = {
      name: formData.get('name'),
      email: state.user.email,
      password: formData.get('password'),
    };
    console.log(data);
    register(data.email, data);
    setMessage(true);
  };

  return (
    <div className={styles.MyAccount}>
      <div className={styles['MyAccount-container']}>
        {message && <span className={styles['message']}>Information Changed</span>}
        <h1 className={styles.title}>My account</h1>
        <form className={styles.form} ref={form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input 
              name='email'
              className={styles.value} 
              placeholder='example@gmail.com' 
              type='email' 
              disabled 
              value={state?.user?.email} 
            />
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input 
              name='name'
              className={styles.value} 
              placeholder={state?.user?.name} 
              type='text'
              required
              onChange={() => setMessage(false)}
            />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input 
              className={styles.value} 
              placeholder='contraseña' 
              type='password'
              name="password" 
              required
              minLength={8}
              onChange={() => setMessage(false)}
            />
          </div>
          <input type="submit" value="Edit" className={`secondary-button ${styles['login-button']}`} />
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
