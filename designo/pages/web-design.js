import React from 'react';
import TopOrangeCard from '../components/TopOrangeCard';
import styles from '../styles/Design.module.css';
import Nav from '../components/Nav';
import PageBottom from '../components/PageBottom';
import DesignCard from '../components/DesignCard';
import CardCollection from '../components/CardCollection';
import GrayCard from '../components/GrayCard';
import GrayCardCollection from '../components/GrayCardCollection';
import Link from 'next/link';
export default function WebDesign() {
  return (
    <>
      <div className={styles['gray-shape__left__container']}>
        <div className={styles['gray-shape__left__container__content']} />
      </div>
      <div className={styles['container']}>
        <Nav />
        <TopOrangeCard
          title="WEB DESIGN"
          description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        />

        <CardCollection>
          <DesignCard
            title="EXPRESS"
            description="A multi-carrier shipping website for ecommerce businesses"
            pic="/assets/web-design/desktop/image-express.jpg"
          />
          <DesignCard
            title="TRANSFER"
            description="Site for low-cost money transfers and sending money within seconds"
            pic="/assets/web-design/desktop/image-transfer.jpg"
          />
          <DesignCard
            title="PHOTON"
            description="A state-of-the-art music player with high-resolution audio and DSP effects"
            pic="/assets/web-design/desktop/image-photon.jpg"
          />
          <DesignCard
            title="BUILDER"
            description="Connects users with local contractors based on their location"
            pic="/assets/web-design/desktop/image-builder.jpg"
          />
          <DesignCard
            title="BLOGR"
            description="Blogr is a platform for creating an online blog or publication"
            pic="/assets/web-design/desktop/image-blogr.jpg"
          />
          <DesignCard
            title="CAMP"
            description="Get expert training in coding, data, design, and digital marketing"
            pic="/assets/web-design/desktop/image-camp.jpg"
          />
        </CardCollection>

        <GrayCardCollection>
          <GrayCard
            title="APP DESIGN"
            description="VIEW PROJECTS"
            desktopPic="/assets/home/desktop/image-app-design-small.jpg"
            tabletPic="/assets/home/tablet/image-app-design.jpg"
            mobilePic="/assets/home/mobile/image-app-design.jpg"
            page="/app-design"
          />
          <GrayCard
            title="GRAPHIC DESIGN"
            description="VIEW PROJECTS"
            desktopPic="/assets/home/desktop/image-graphic-design.jpg"
            tabletPic="/assets/home/tablet/image-graphic-design.jpg"
            mobilePic="/assets/home/mobile/image-graphic-design.jpg"
            page="/graphic-design"
          />
        </GrayCardCollection>
      </div>
      <PageBottom />
    </>
  );
}
