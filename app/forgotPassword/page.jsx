"use client";
import { useState } from "react";
import styles from "./forgotpassword.module.css";
import Link from 'next/link';

export default function ForgotPassword() {
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Logic for sending OTP goes here
    setOtpSent(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Logic for resetting the password goes here
    alert("Password reset successfully!");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Forgot Password</h1>
      <form className={styles.form} onSubmit={otpSent ? handleResetPassword : handleSendOtp}>
        {/* Email Input */}
        {!otpSent && (
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
        )}

        {/* OTP Sent: New Password and Confirm Password Fields */}
        {otpSent && (
          <>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Enter OTP</label>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Enter OTP"
                  required
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>New Password</label>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  className={styles.input}
                  placeholder="Enter new password"
                  required
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Confirm Password</label>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  className={styles.input}
                  placeholder="Confirm new password"
                  required
                />
              </div>
            </div>
          </>
        )}

        {/* Submit Button */}
        <button className={styles.submitButton} type="submit">
          {otpSent ? "Reset Password" : "Send OTP"}
        </button>

        {/* Footer */}
        <p className={styles.footerText}>
          Remembered your password?{" "}
          <Link href="/login" className={styles.createAccountLink}>
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
}
