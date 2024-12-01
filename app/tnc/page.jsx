"use client"; // For client-side rendering
import React from "react";
import Link from "next/link"; // Next.js routing
import styles from "./tnc.module.css";

export default function tnc() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <p className={styles.lastUpdated}>Last Updated: December 1, 2024</p>
      </header>

      <main className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <p className={styles.text}>
            By accessing FreeSplit, you confirm that you are at least 18 years
            old or have the consent of a legal guardian. If you do not agree to
            these Terms, you may not use the platform.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Service Overview</h2>
          <p className={styles.text}>
            FreeSplit is a platform for managing shared expenses and tracking
            balances. We reserve the right to modify or discontinue any
            features at any time without notice.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Account Responsibilities</h2>
          <p className={styles.text}>
            You are responsible for keeping your account details secure. FreeSplit
            will not be held liable for unauthorized access resulting from
            failure to safeguard your credentials.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Settling Payments</h2>
          <p className={styles.text}>
            FreeSplit only tracks expenses and balances. Users must arrange
            actual payments independently. Disputes regarding payments are
            outside the platform's scope.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Disclaimer</h2>
          <p className={styles.text}>
            FreeSplit is provided "as-is." We do not guarantee the accuracy or
            reliability of data entered by users and are not liable for any
            loss resulting from the use of the platform.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Updates to Terms</h2>
          <p className={styles.text}>
            These terms may be updated periodically. Continued use of FreeSplit
            after changes implies acceptance. Please check this page regularly.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>
          Have questions? Contact us at{" "}
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
