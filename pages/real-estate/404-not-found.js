import { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import lottie from 'lottie-web/build/player/lottie_light'

const NotFoundPage = () => {

  const animationContainer = useRef(null)

  useEffect(() => {
    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animation/real-estate-404.json'
      })

      return () => animation.destroy()
    }
  }, [])

  return (
    <>
      {/* Custom page title attribute */}
      <Head>
        <title>Finder | Real Estate | 404 Not Found</title>
      </Head>

      {/* Page content */}
      <main className='page-wrapper'>
        <section className='d-flex align-items-lg-center align-items-end position-relative min-vh-100 py-lg-5 py-0'>
          <span className='position-absolute top-0 start-0 d-lg-block d-none w-100 h-100 zindex-1 bg-dark rounded-4 rounded-start-0' style={{maxWidth: '43.6vw'}}></span>
          <Container className='position-relative zindex-5'>
            <Row className='gy-4 align-items-md-center'>
              <Col xs={{order: 'last'}} lg={{span: 4, order: 'first'}} className='position-relative py-lg-0 py-5 text-lg-start text-center'>
                <span className='position-absolute top-0 start-0 d-lg-none d-block w-100 h-100 zindex-1 bg-dark rounded-bottom-0 rounded-4'></span>
                <div className='position-relative zindex-5'>
                  <h1 className='display-3 text-light'>Page Not Found.</h1>
                  <p className='mx-auto mb-lg-4 mb-3 pb-lg-3 fs-lg text-light opacity-70' style={{maxWidth: '576px'}}>Sorry, we can&apos;t find the page you are looking for. We suggest you go to homepage while we are fixing the problem.</p>
                  <svg className='d-lg-block d-none mb-4' xmlns='http://www.w3.org/2000/svg' width='80' height='80' fill='none'>
                    <g clipPath='url(#A)'>
                      <path d='M47.528 78.373l2.641-20.003c.184-1.252-1.518-2.086-2.26-1.01l-4.593 5.777c-.174-2.527.866-4.482 2.265-6.703.52-.977.941-2.176.224-3.184-1.083-1.589-3.847-1.469-5.558-1.607-4.352-.339-8.728-.136-13.056-1.017-4.97-1.126-2.991-3.713.035-5.864 3.163-2.319 6.913-4.157 10.556-5.521 6.4-2.332 13.358-4.488 18.447-9.158 2.827-2.594 4.961-8.281 1.13-11.14-4.67-3.546-12.626-4.453-18.315-3.502-3.054.303-22.941 5.054-17.949-2.922 3.662-5.839 13.323-8.726 19.502-10.959.817-.312.459-1.588-.373-1.428-6.575 1.347-13.373 4.335-18.744 8.493-2.857 2.289-6.13 8.166-1.206 10.376 5.732 2.593 13.172-.151 19.082-1.201 3.704-.753 8.017-.025 11.636.696 7.711 1.548 6.706 7.74 1.374 11.508-6.562 4.585-14.833 5.945-21.875 9.575-2.49 1.327-11.014 5.566-9.116 9.928 2.195 5.026 11.153 4.368 15.558 4.47-.237-.054 7.17-.018 6.803.944s-1.124 1.885-1.643 2.862c-.971 1.87-1.331 3.68-1.065 5.581-1.526-1.391-3.19-2.614-4.991-3.669-.977-.52-2.093.67-1.765 1.64 2.584 6.607 7.406 11.68 11.082 17.639.48.955 2.061.566 2.177-.602zM41.97 66.663c.504.413 1.015.13 1.207-.274.389.038.764-.076 1.039-.412l2.751-3.358-1.498 12.102c-2.433-3.537-5.157-6.891-7.147-10.626l3.648 2.568z' fill='#fff'></path>
                    </g>
                    <defs>
                      <clipPath id='A'>
                        <path fill='#fff' d='M0 0h80v80H0z'></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div className='d-flex flex-sm-row flex-column justify-content-lg-start justify-content-sm-center ms-n4'>
                    <Link href='/real-estate' passHref>
                      <Button size='lg' variant='primary mt-3 ms-4'>Go to homepage</Button>
                    </Link>
                    <Link href='/real-estate/help-center' passHref>
                      <Button size='lg' variant='outline-light mt-3 ms-4'>Visit help center</Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xs={{order: 'first'}} lg={{span: 6, order: 'last', offset: 2}}>
                <div className='ratio ratio-1x1 mx-auto' style={{maxWidth: '636px'}}>
                  <div ref={animationContainer}></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  )
}

export default NotFoundPage
