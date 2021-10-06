import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';
import PageBottom from '../components/PageBottom';
import Link from 'next/link';
import useMediaQuery from '../components/useMediaQuery';



export default function Home() {


  const tablet = useMediaQuery(768);
  const mobile = useMediaQuery(375);


  let projects = (
    <div className={styles.projects}>
    <div className={styles['projects__item-1']}>
      <img src="/assets/home/desktop/image-web-design-large.jpg" />
      <Link href="/web-design">
        <div className={styles['projects__item-1__content']}>
          <h2>WEB DESIGN</h2>
          <p>
            VIEW PROJECTS{' '}
            <span>
              <svg
                width="5"
                height="10"
                viewBox="0 0 5 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#E7816B"
                  stroke-width="2"
                />
              </svg>
            </span>
          </p>
        </div>
      </Link>
    </div>
    <div className={styles['projects__item-2']}>
      <div className={styles['projects__item-2__top']}>
        <img src="/assets/home/desktop/image-app-design.jpg" />
        <Link href="/app-design">
          <div className={styles['projects__item-2__top__content']}>
            <h2>APP DESIGN</h2>
            <p>
              VIEW PROJECTS
              <span>
                <svg
                  width="5"
                  height="10"
                  viewBox="0 0 5 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#E7816B"
                    stroke-width="2"
                  />
                </svg>
              </span>
            </p>
          </div>
        </Link>
      </div>

      {/* project 2 bottom */}

      <div className={styles['projects__item-2__bottom']}>
        <img src="/assets/home/desktop/image-graphic-design.jpg" />
        <Link href="/graphic-design">
          <div className={styles['projects__item-2__bottom__content']}>
            <h2>GRAPHIC DESIGN</h2>
            <p>
              VIEW PROJECTS
              <span>
                <svg
                  width="5"
                  height="10"
                  viewBox="0 0 5 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#E7816B"
                    stroke-width="2"
                  />
                </svg>
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  </div>
  )


  if(tablet){
    projects = (
      <div className={styles['mobile-projects']}>


{/* item 1 */}
      <Link href="/web-design">
        <div className={styles['mobile-projects__item']}>

      {mobile ? <img src="/assets/home/mobile/image-web-design.jpg" /> : <img src="/assets/home/tablet/image-web-design.jpg" />}
      <div className={styles['mobile-projects__item__background']}/>

        <div>
          <h2>WEB DESIGN</h2>
          <p>
            VIEW PROJECTS{' '}
            <span>
              <svg
                width="5"
                height="10"
                viewBox="0 0 5 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
                  stroke="#E7816B"
                  stroke-width="2"
                />
              </svg>
            </span>
          </p>
        </div>
        </div>
      </Link>




{/* item 2 */}

        <Link href="/app-design">
      <div className={styles['mobile-projects__item']}>
      {mobile ? <img src="/assets/home/mobile/image-app-design.jpg" /> : <img src="/assets/home/tablet/image-app-design.jpg" />}

        <div className={styles['mobile-projects__item__background']}/>
          <div >
            <h2>APP DESIGN</h2>
            <p>
              VIEW PROJECTS
              <span>
                <svg
                  width="5"
                  height="10"
                  viewBox="0 0 5 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#E7816B"
                    stroke-width="2"
                  />
                </svg>
              </span>
            </p>
          </div>
      </div>
        </Link>

      {/* project 3 bottom */}

        <Link href="/graphic-design">
      <div className={styles['mobile-projects__item']}>
      {mobile ? <img src="/assets/home/mobile/image-graphic-design.jpg" /> : <img src="/assets/home/tablet/image-graphic-design.jpg" />}

      <div className={styles['mobile-projects__item__background']}/>

          <div >
            <h2>GRAPHIC DESIGN</h2>
            <p>
              VIEW PROJECTS
              <span>
                <svg
                  width="5"
                  height="10"
                  viewBox="0 0 5 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#E7816B"
                    stroke-width="2"
                  />
                </svg>
              </span>
            </p>
          </div>
      </div>
        </Link>
  </div>
    )
  }

  return (
    <>
          <Nav />
      <div className={styles['gray-shape__left__container']}>
        <div className={styles['gray-shape__left__container__content']} />
      </div>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com/" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className={styles.hero}>
          <div className={styles['hero__circle']}>
            <img src="/assets/home/desktop/bg-pattern-hero-home.svg" />
          </div>

          <div className={styles['hero__content']}>
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <Link href="/">
              <a>LEARN MORE</a>
            </Link>
          </div>

          <div className={styles['hero__phone']}>
            <img src="assets/home/desktop/image-hero-phone.png" />
          </div>
        </div>

        {projects}

        <div className={styles['three-circle-cards']}>
          <div className={styles['three-circle-cards__single']}>
            <div>
              <img src="/assets/home/desktop/illustration-passionate.svg" />
            </div>

            <div>
              <h3>PASSIONATE</h3>
              <p>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>

          <div className={styles['three-circle-cards__single']}>
            <img src="/assets/home/desktop/illustration-resourceful.svg" />

            <div>
              <h3>RESOURCEFUL</h3>
              <p>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer collaboration.
                It guarantees superior results that fulfill our clients’ needs.
              </p>
            </div>
          </div>

          <div className={styles['three-circle-cards__single']}>
            <img src="/assets/home/desktop/illustration-friendly.svg" />

            <div>

              <h3>FRIENDLY</h3>
              <p>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to give
                them the best experience a company can provide.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['gray-shape__right__container']}>
        <div className={styles['gray-shape__right__container__content']} />
      </div>
      <PageBottom />
    </>
  );
}
