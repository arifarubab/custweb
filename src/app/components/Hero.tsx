"use client";

// src/components/Hero.tsx
import React, { useState } from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';



const Hero: React.FC = () => {
  // State to manage visibility of contact details
  const [showContactDetails, setShowContactDetails] = useState(false);

  // Toggle the visibility of contact details
  const handleButtonClick = () => {
    setShowContactDetails(!showContactDetails);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Section: Introduction */}
        <div className={styles.leftSection}>
          <h1 className={styles.title}>Hi, It&apos;s Rubab Ayub</h1>
          <p className={styles.description}>
            I&apos;m a passionate Web Developer, who creates beautiful, user friendly web experiences.
          </p>
          <button className={styles.ctaButton} onClick={handleButtonClick}>
            Get in Touch
          </button>
        </div>

        {/* Right Section: Profile Image */}
        <div className={styles.rightSection}>
          <Image
            src="/mypic.jpeg"
            alt="Your Profile"
            width={200} // specify width as per your design
            height={200} // specify height as per your design
            className={styles.profileImage}
            />
        </div>
      </div>

      {/* Conditional rendering of contact details */}
      {showContactDetails && (
        <div className={styles.contactDetails}>
          <p>
            Thank you for reaching out. You can contact me via email or connect with me on LinkedIn and Facebook.
          </p>
          <p>Email: <a href="mailto:rubabarifa@gmail.com">rubabarifa@gmail.com</a></p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/arifa-rubab-bb54122b5"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/in/rubabayub413"
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
  );
};

export default Hero;
