"use client";
import styles from "./home.module.css";
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const [showComponent, setShowComponent] = useState(false);

    const handleLogout = () => {
        alert("Logging out...");
        //implementation of apis
        router.push('/login');
    };

    const handleInvitePeople = () => {
        alert("Invite people functionality...");
        // Add invite functionality here
    };

    const handleAddExpense = () => {
        router.push('/home/addGroup');
        // Add logic for adding expenses
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>FreeSplit</h1>
                <div className={styles.icons}>
                    <button className={styles.iconButton} onClick={handleInvitePeople}>
                    <img src="/addPeople.svg" alt="add people icon" className={styles.addPeople} />
                    </button>
                    <button className={styles.iconButton} onClick={handleLogout}>
                        <img src="/logout.svg" alt="logout" className={styles.logout} />
                    </button>
                </div>
            </header>

            {/* Splits List */}
            <main className={styles.main}>
                <ul className={styles.splitsList}>
                    <li className={styles.splitItem}>Trip to Goa - ₹5000</li>
                    <li className={styles.splitItem}>Office Lunch - ₹2500</li>
                    <li className={styles.splitItem}>Birthday Party - ₹3000</li>
                    <li className={styles.splitItem}>Trip to Goa - ₹5000</li>
                    <li className={styles.splitItem}>Office Lunch - ₹2500</li>
                    <li className={styles.splitItem}>Birthday Party - ₹3000</li>
                    <li className={styles.splitItem}>Trip to Goa - ₹5000</li>
                    <li className={styles.splitItem}>Office Lunch - ₹2500</li>
                    <li className={styles.splitItem}>Birthday Party - ₹3000</li>
                    <li className={styles.splitItem}>Trip to Goa - ₹5000</li>
                    <li className={styles.splitItem}>Office Lunch - ₹2500</li>
                    <li className={styles.splitItem}>Birthday Party - ₹3000</li>
                    {/* Add more splits dynamically */}
                </ul>
            </main>

            {/* Floating Button */}
            <Link href="/home/addGroup">
            <button className={styles.floatingButton} onClick={handleAddExpense}>
                Add Expense
            </button>
            </Link>
        </div>
    );
}
