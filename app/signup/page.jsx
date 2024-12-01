import styles from "./signup.module.css";

export default function SignUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create Your Account</h1>
      <form className={styles.form}>
        {/* Email Input */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email address</label>
          <div className={styles.inputContainer}>
            <input
              type="email"
              className={styles.input}
              placeholder="email@address.com"
              required
            />
          </div>
        </div>

        {/* OTP Input * CONDITIONALLY RENDERD THIS, */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>OTP</label>
          <div className={styles.inputContainer}>
            <input
              type="otp"
              className={styles.input}
              placeholder="Enter OTP"
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <div className={styles.inputContainer}>
            <input
              type="password"
              className={styles.input}
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className={styles.inputGroup}>
          <label className={styles.checkboxContainer}>
            <input type="checkbox" />
            Receive news, updates and deals
          </label>
        </div>

        {/* Submit Button */}
        <button className={styles.submitButton} type="submit">
          Create Account
        </button>

        {/* Footer */}
        <p className={styles.footerText}>
          By creating an account, you agree to the{" "}
          <a href="#" className={styles.link}>
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className={styles.link}>
            Privacy Policy
          </a>.
        </p>
        <p className={styles.footerText}>
          Already have an account?{" "}
          <a href="#" className={styles.createAccountLink}>
            Log in here
          </a>
        </p>
      </form>
    </div>
  );
}
