// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/projects" className={styles.link}>Projects</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/arifa-rubab-bb54122b5/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            LinkedIn
          </a>
          <a href="https://www.facebook.com/in/rubabayub413" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            Facebook
          </a>
            </div>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
