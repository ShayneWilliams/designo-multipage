import React from 'react';
import TopOrangeCard from '../components/TopOrangeCard';
import styles from '../styles/Design.module.css';
import Nav from '../components/Nav';
import PageBottom from '../components/PageBottom';
import DesignCard from '../components/DesignCard';
import CardCollection from '../components/CardCollection';
import GrayCard from '../components/GrayCard';
import GrayCardCollection from '../components/GrayCardCollection';
export default function appDesign() {
  return (
    <>
      <div className={styles['gray-shape__left__container']}>
        <div className={styles['gray-shape__left__container__content']} />
      </div>
      <div className={styles['container']}>
        <Nav />
        <TopOrangeCard
          title="APP DESIGN"
          description="We build appsites that serve as powerful marketing tools and bring memorable brand experiences."
        />

        <CardCollection>
          <DesignCard
            title="AIRFILTER"
            description="Solving the problem of poor indoor air quality by filtering the air"
            pic="/assets/app-design/desktop/image-airfilter.jpg"
          />
          <DesignCard
            title="EYECAM"
            description="Product that lets you edit your favorite photos and videos at any time"
            pic="/assets/app-design/desktop/image-eyecam.jpg"
          />
          <DesignCard
            title="FACEIT"
            description="Get to meet your favorite internet superstar with the faceit app"
            pic="/assets/app-design/desktop/image-faceit.jpg"
          />
          <DesignCard
            title="TODO"
            description="A todo app that features cloud sync with light and dark mode"
            pic="/assets/app-design/desktop/image-todo.jpg"
          />
          <DesignCard
            title="LOOPSTUDIOS"
            description="A VR experience app made for Loopstudios"
            pic="/assets/app-design/desktop/image-loopstudios.jpg"
          />

        </CardCollection>

        <GrayCardCollection>

              <GrayCard
                title="WEB DESIGN"
                description="VIEW PROJECTS"
                desktopPic="/assets/home/desktop/image-web-design-small.jpg"
                tabletPic = "/assets/home/tablet/image-web-design.jpg"
                mobilePic = "/assets/home/mobile/image-web-design.jpg"
                page="/web-design"
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
