"use client";
import React from "react";
import Link from "next/link"; // Next.js routing
import styles from "./policy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: December 1, 2024</p>
      </header>


      <main className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Introduction</h2>
          <p className={styles.text}>
            Welcome to FreeSplit. Your privacy is of utmost importance to us.
            This policy outlines how we collect, use, and protect your data
            while you use our platform.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Data Collection</h2>
          <p className={styles.text}>
            We collect data you provide, including your name, email address, and
            other details necessary to use the platform. Usage data, such as
            interactions and device information, is collected automatically.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Data Usage</h2>
          <p className={styles.text}>
            Your data is used to improve FreeSplit’s functionality, including:
          </p>
          <ul className={styles.list}>
            <li>Tracking and managing your expenses</li>
            <li>Providing personalized recommendations</li>
            <li>Sending important updates or notifications</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Data Sharing</h2>
          <p className={styles.text}>
            We do not sell your data. However, we may share your information
            with:
          </p>
          <ul className={styles.list}>
            <li>Trusted third-party services for analytics and security</li>
            <li>Authorities when required by law</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Security</h2>
          <p className={styles.text}>
            We implement industry-standard security measures to protect your
            data. Despite this, no method of transmission or storage is 100%
            secure. Use FreeSplit at your own risk.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. User Rights</h2>
          <p className={styles.text}>
            You have the right to:
          </p>
          <ul className={styles.list}>
            <li>Access the data we store about you</li>
            <li>Request corrections or deletions of your data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Changes to the Policy</h2>
          <p className={styles.text}>
            We may update this policy periodically. Continued use of FreeSplit
            indicates acceptance of the updated policy. Check this page for the
            latest version.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          For further inquiries, contact us at{" "}
          <Link href="mailto:freesplitcare@gmail.com" className={styles.link}>
            freesplitcare@gmail.com
          </Link> 
        </p>
        <p>
          Return to{" "}
          <Link href="/signup" className={styles.link}>
            Back
          </Link>
        </p>
      </footer>
    </div>
  );
}
