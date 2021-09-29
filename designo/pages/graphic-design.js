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
export default function GraphicDesign() {
  return (
    <>
      <div className={styles['gray-shape__left__container']}>
        <div className={styles['gray-shape__left__container__content']} />
      </div>
      <div className={styles['container']}>
        <Nav />
        <TopOrangeCard
          title="GRAPHIC DESIGN"
          description="We deliver eye-catching branding materials that are 
          tailored to meet your business objectives.
          1"
        />

        <CardCollection>
          <DesignCard
            title="TIM BROWN"
            description="A book cover designed for Tim Brown’s new release, ‘Change’"
            pic="/assets/graphic-design/desktop/image-change.jpg"
          />
          <DesignCard
            title="BOXED WATER"
            description="A simple packaging concept made for Boxed Water"
            pic="/assets/graphic-design/desktop/image-boxed-water.jpg"
          />
          <DesignCard
            title="SCIENCE"
            description="A poster made in collaboration with the Federal Art Project"
            pic="/assets/graphic-design/desktop/image-science.jpg"
          />
          <DesignCard
            title="LOOPSTUDIOS"
            description="A VR experience app made for Loopstudios"
            pic="/assets/app-design/desktop/image-loopstudios.jpg"
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
