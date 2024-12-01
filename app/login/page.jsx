import styles from "./login.module.css";
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.heading}>LOGIN</span>
      </div>
      <form className={styles.form}>
        {/* Email Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <div className={styles.inputContainer}>
            <input
              type="email"
              id="email"
              placeholder="email@address.com"
              className={styles.input}
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <div className={styles.inputContainer}>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={styles.input}
              required
            />
          </div>
        </div>
      
        <Link className={styles.forgotPassword} href="/forgotPassword">
          {/* <a className={styles.forgotPassword}>Forgot Password?</a> */}
          Forgot Password?
        </Link>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Login
        </button>

        {/* Create Account Link */}
        <p className={styles.footerText}>
          Don’t have an account?{" "}
          <a href="/signup" className={styles.createAccountLink}>
            Create one
          </a>
        </p>
      </form>
    </div>
  );
}
