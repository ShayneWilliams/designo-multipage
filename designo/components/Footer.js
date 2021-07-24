import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles['nav-container']}>
          <div className={styles['nav-container__logo']}>
            <a>
              <img src="/assets/shared/desktop/logo-light.png" />
            </a>
          </div>

          <div className={styles['nav-container__items']}>
            <Link href="/">
              <a>OUR COMPANY</a>
            </Link>
            <Link href="/">
              <a>LOCATIONS</a>
            </Link>
            <Link href="/">
              <a>CONTACT</a>
            </Link>
          </div>
        </div>

        <div className={styles['bottom']}>
          <div>
            <p>
              Designo Central Office
              <br />
              3886 Wellington Street
              <br />
              Toronto, Ontario M9C 3J5
            </p>
          </div>

          <div>
            <p>
              Contact Us (Central Office)
              <br />
              P : +1 253-863-8967 
              <br />
              M : contact@designo.co
            </p>
          </div>
          <div className={styles.social}>
              <img src ='/assets/shared/desktop/icon-facebook.svg'/>
              <img src ='/assets/shared/desktop/icon-youtube.svg'/>
              <img src ='/assets/shared/desktop/icon-twitter.svg'/>
              <img src ='/assets/shared/desktop/icon-pinterest.svg'/>
              <img src ='/assets/shared/desktop/icon-instagram.svg'/>
          </div>
        </div>

      </div>
    </div>
  );
}
