"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./signup.module.css";
import { useRouter } from "next/navigation";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
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
    else{
      alert("Account created successfully!");
      router.push('/login');
    }

    // Simulate registration logic (e.g., API call to register the user)
    
    
    // Redirect user to login page or dashboard
  };

  return (
    <div className={styles.container}>
      <span className={styles.headLogo}>
        <img src="./logo.svg" alt="freesplit-logo" height={"80px"} />
      </span>
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
              <label className={styles.label}>Enter OTP</label>
              <div className={styles.inputContainer}>
                <input
                  type="otp"
                  className={styles.input}
                  placeholder="Enter OTP"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Enter Password</label>
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
          By creating an account, you agree to the{" "}
          <Link href="/tnc" className={styles.link}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <a href="/policy" className={styles.link}>
            Privacy Policy
          </a>.
        </p>
        <p className={styles.footerText}>
          Already have an account?{" "}
          <Link href="/login" className={styles.createAccountLink}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
