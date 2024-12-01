"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./signup.module.css";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendOtp = (event) => {
    event.preventDefault();
    if (emailRegex.test(email)) {
      // Simulate OTP sending logic (call API to send OTP)
      alert("OTP sent successfully to your email!");
      setIsOtpSent(true); // Show the password fields after OTP is sent
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate registration logic (e.g., API call to register the user)
    alert("Account created successfully!");
    // Redirect user to login page or dashboard
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {isOtpSent ? "Set Your Password" : "Create Your Account"}
      </h1>
      <form className={styles.form} onSubmit={isOtpSent ? handleRegister : handleSendOtp}>
        {/* Email Input */}
        {!isOtpSent && (
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <div className={styles.inputContainer}>
              <input
                type="email"
                className={styles.input}
                placeholder="email@address.com"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
        )}

        {/* Password Fields (only show after OTP is sent) */}
        {isOtpSent && (
          <>
            <div className={styles.inputGroup}>
              <label className={styles.label}>New Password</label>
              <div className={styles.inputContainer}>
                <input
                  type="password"
                  className={styles.input}
                  placeholder="Enter new password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        {/* Submit Button */}
        <button className={styles.submitButton} type="submit">
          {isOtpSent ? "Register" : "Send OTP"}
        </button>

        {/* Footer */}
        <p className={styles.footerText}>
          Already have an account?{" "}
          <Link href="/login" className={styles.createAccountLink}>
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
}
