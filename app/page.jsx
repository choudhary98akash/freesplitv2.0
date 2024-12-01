"use client"
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h3 className={styles.smallTitle}>WELCOME TO</h3>
      <img src="/logo.svg" alt="Logo" className={styles.logo} />
      <h4 className={styles.tag}>Divide Smartly, Simplify Life, Conquer Expenses!</h4>
      <button onClick={() => router.push('/login')} className={styles.loginButton}>
        LOGIN
      </button>
      <button onClick={() => router.push('/signup')} className={styles.signupButton}>
        SIGNUP
      </button>
    </div>
  );
}