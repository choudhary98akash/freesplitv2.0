"use client"
import { APP_CLIENT_INTERNALS } from "next/dist/shared/lib/constants";
import styles from "./login.module.css";
import Link from 'next/link';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { consumeDynamicAccess } from "next/dist/server/app-render/dynamic-rendering";
// import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
      alert('Please provide both email and password.');
      return;
    } else if (!emailRegex.test(email)) {
      alert('Invalid email format.');
      return;
    }else{
      router.push('/home');
    }

  }


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {/* <span className={styles.heading}>LOGIN</span> */}
        <img src="./logo.svg" alt="freesplit-logo" height={"80px"} />
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
              value={email}
              onChange={(e) => { setEmail(e.target.value); console.log(email); }}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <Link className={styles.forgotPassword} href="/forgotPassword">
          {/* <a className={styles.forgotPassword}>Forgot Password?</a> */}
          Forgot Password?
        </Link>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton} onClick={handleLogin}>
          Login
        </button>

        {/* Create Account Link */}
        <p className={styles.footerText}>
          Don’t have an account?{" "}
          <Link href="/signup" className={styles.createAccountLink}>
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}
