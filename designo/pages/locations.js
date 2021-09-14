import React from 'react';
import Nav from '../components/Nav';
import PageBottom from '../components/PageBottom';
import styles from '../styles/Location.module.css';
export default function Locations() {
  return (
    <>
      <div className={styles['container']}>
        <Nav />
        <div className={styles.location}>
          <div className={styles['map-right']}>
            <div className={styles['map-right__content']}>
              <div className={styles['map-right__content__title']}>
                <h2>Canada</h2>
              </div>
              <div className={styles['map-right__content__description']}>
                <p>
                  <b>Designo Central Office</b>
                  <br />
                  3886 Wellington Street <br />
                  Toronto, Ontario M9C 3J5
                </p>
                <p>
                  <b>Contact</b> <br /> P : +1 253-863-8967
                  <br />M : contact@designo.co
                </p>
              </div>
            </div>

            <div>
              <img src="/assets/locations/desktop/image-map-canada.png" />
            </div>
          </div>


{/* ---------------------------------------------------------------------------------------------------------- */}
          <div className={styles['map-left']}>
          <div>
              <img src="/assets/locations/desktop/image-map-australia.png" />
            </div>
            <div className={styles['map-left__content']}>
              <div className={styles['map-left__content__title']}>
                <h2>Australia</h2>
              </div>
              <div className={styles['map-left__content__description']}>
                <p>
                  <b>Designo AU Office</b>
                  <br />
                  19 Balonne Street <br/>
                  New South Wales 2443
                </p>
                <p>
                  <b>Contact</b> <br /> P : +1 253-863-8967
                  <br />M : contact@designo.co
                </p>
              </div>
            </div>


          </div>


{/* ---------------------------------------------------------------------------------------------------------- */}
<div className={styles['map-right']}>
            <div className={styles['map-right__content']}>
              <div className={styles['map-right__content__title']}>
                <h2>United Kingdom</h2>
              </div>
              <div className={styles['map-right__content__description']}>
                <p>
                  <b>Designo UK Office</b>
                  <br />
                  13  Colorado Way <br />
                  Rhyd-y-fro SA8 9GA
                </p>
                <p>
                  <b>Contact</b> <br />P : 078 3115 1400
                  <br />M : contact@designo.uk
                </p>
              </div>
            </div>

            <div>
              <img src="/assets/locations/desktop/image-map-united-kingdom.png" />
            </div>
          </div>


        </div>
      </div>
      <PageBottom />
    </>
  );
}
