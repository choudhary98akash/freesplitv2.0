import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h3 className={styles.smallTitle}>Welcome To </h3>
      <img src="/logo.svg" alt="Logo" className={styles.logo} />
      <button className={styles.loginButton}>LOGIN</button>
      <button className={styles.signupButton}>SIGNUP</button>
    </div>
  );
}
