// app/about/page.js

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './About.module.css';

export default function About() {
  return (
    <div>
      <Header />
      <section id="about" className={styles.container}>
        <h2 className={styles.heading}>Hello, I am Rubab Ayub</h2>
        <p className={styles.paragraph}>
          I am a passionate web developer with experience in creating responsive, user friendly websites and applications.
          I specialize in technologies like Next.js, React, and Tailwind CSS to build beautiful and functional web experiences.
        </p>

        <div className={styles.buttonContainer}>
          <a
            href="https://www.linkedin.com/in/rubab-ayub-1072b6302/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button} ${styles.linkedin}`}
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61560016007475"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button} ${styles.facebook}`}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/rubabayub413"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button} ${styles.instagram}`}
          >
            Instagram
          </a>
        </div>

        <p className={styles.footerText}>
          Feel free to connect with me on LinkedIn or Facebook to discuss projects or collaborations.
          Let&apos;s bring your ideas to life.
        </p>
      </section>
      <Footer />
    </div>
  );
}
