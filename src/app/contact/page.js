// app/contact/page.js
"use client";

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Contact.module.css';

export default function Contact() {
  // State to control the visibility of content
  const [showContent, setShowContent] = useState(false);

  // Toggle function
  const handleButtonClick = () => {
    setShowContent(!showContent); // Toggle the visibility of content
  };

  return (
    <div>
      <Header />
      <section id="contact" className={styles.container}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.paragraph}>
        I&apos;d love to hear from you. Whether you have a question, a project idea, or just want to connect, feel free to reach out.
        </p>

        {/* Button to toggle content */}
        <button onClick={handleButtonClick} className={styles.ctaButton}>
          Get in Touch
        </button>

        {/* Conditional content display */}
        {showContent && (
          <div className={styles.additionalContent}>
            <p>Thank you for your interest! You can reach me directly via email or connect with me on LinkedIn and Facebook.</p>
            <p>Email: <a href="mailto:rubabarifa@gmail.com">rubabarifa@gmail.com</a></p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/rubab-ayub-1072b6302/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61560016007475"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Facebook
              </a>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
