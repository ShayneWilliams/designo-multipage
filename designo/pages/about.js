import React from 'react';
import LocationCircles from '../components/LocationCircles';
import Nav from '../components/Nav';
import PageBottom from '../components/PageBottom';
import styles from '../styles/About.module.css';
import useMediaQuery from '../components/useMediaQuery'

export default function about() {


  const isTablet = useMediaQuery(1024)
  const isMobile = useMediaQuery(375)
  return (
    <>
    <div className={styles.container}>
      <Nav />
      <div className={styles['orange-card']}>
        <div className={styles['orange-card__content']}>
          <div className={styles['orange-card__content__text']}>
            <h1>About Us</h1>
            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>

        <div>
      {isMobile ?  <img src="/assets/about/mobile/image-about-hero.jpg"/> :  isTablet ?  <img src="/assets/about/tablet/image-about-hero.jpg"  /> : <img src="/assets/about/desktop/image-about-hero.jpg"  />}
          
        </div>
      </div>
      <div className={styles['peach-card-1']}>
      {/* {isTablet ?  <img src="/assets/about/tablet/image-world-class-talent.jpg" /> : <img src="/assets/about/desktop/image-world-class-talent.jpg" />} */}
      {isMobile ?  <img src="/assets/about/mobile/image-world-class-talent.jpg"/> :  isTablet ?  <img src="/assets/about/tablet/image-world-class-talent.jpg" /> : <img src="/assets/about/desktop/image-world-class-talent.jpg" />}


        {/* <img src="/assets/about/desktop/image-world-class-talent.jpg" /> */}
        <div className={styles['peach-card__content-1']}>
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
            <br />
            <br />
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>

        <LocationCircles/>

        <div className={styles['peach-card-2']}>
          <div className={styles['peach-card__content-2']}>
            <h2>The real deal</h2>
            <p>
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
              <br />
              <br />
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>

      {isMobile ?  <img src="/assets/about/mobile/image-real-deal.jpg" /> :  isTablet ?  <img src="/assets/about/tablet/image-real-deal.jpg" /> : <img src="/assets/about/desktop/image-real-deal.jpg" />}

          {/* {isTablet ?  <img src="/assets/about/tablet/image-real-deal.jpg" /> : <img src="/assets/about/desktop/image-real-deal.jpg" />} */}
          
        </div>
    </div>
      <PageBottom />
    </>
  );
}
