import Head from 'next/head'; 
import Layout from 'layout/';
import Portfolio from 'components/Portfolio';

function Index() {
  return (
    <Layout>
    <Head>
      <title>@josheytee | Home </title>
      <link rel="stylesheet" href="/css/modal.css" />
   </Head>

      <section className="benefit">
        <div className="container d-flex">
          <section >
            {/* <small>Hi, I am Oluwatobi Agbeja.</small> */}
            <h1>Transform your business with seamless digital efforts.</h1>
            <p>I help businesses reach more audience and generate feasible revenue via strategic digital presence.</p>
            <div className="cta-box">
              <a href="/portfolio" className="btn btn-cta">Portfolio</a>
              <a href="/#contact" className="btn btn-cta2">Hire Me!</a>
            </div>
          </section>
          <section >
            <img src="/illustration.png" alt="An illustration of people trying to build a web page on a browser" />
          </section>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Specializing in</h2>
          <div className="services-wrapper">
            <section className="service">
              <div className="img-circle">
                <img src="./icons/adaptive-layout.svg" alt="web design" />
              </div>
              <h3>UI/UX</h3>
              <p>
                I create Amazing User Interface and User Experience for your proposed application
              </p>
            </section>
            <section className="service">
              <div className="img-circle">
                <img src="./icons/ui.svg" alt="Front End Development" />
              </div>
              <h3>Front End Development</h3>
              <p>I write clean code that converts your designs into a website using HTML, CSS and Javascript</p>
            </section>
            <section className="service">
              <div className="img-circle">
                <img src="./icons/website.svg" alt="Back End Development" />
              </div>
              <h3>Back End Development</h3>
              <p>I build web application using the latest Technology stack available handling security, database, sessions and lots more</p>
            </section>
            <section className="service">
              <div className="img-circle">
                <img src="./icons/api.svg" alt="api development" />
              </div>
              <h3>API</h3>
              <p>I write well documented API that your applications can easily integrate with</p>
            </section>
            {/* <section className="service">
              <div className="img-circle">
                <img src="./icons/market.svg"/>
              </div>
              <h3>Digital Marketing</h3>
            </section>               */}
          </div>
        </div>
      </section>
      <h2 className="container title" style={{marginTop:'2rem'}}>Portfolio</h2>

      <Portfolio type="ui" />
      <Portfolio type="frontend" />
      <Portfolio type="backend" />

      <div className="container" style={{marginTop: '3rem'}}>

        {/* <section>
          <h2>Testimonials</h2>
          <Slideshow />
        </section> */}
          <h2 className="title">My Technolgy Stack</h2>
        <section className="stack">
          <img src="/stack/figma.png" alt="figma"/>
          <img src="/stack/web.png" style={{width: "15rem"}} alt="HTML 5, CSS 3, JS"/>
          <img src="/stack/java.png" alt="java"/>
          <img src="/stack/mysql.png" alt="mysql"/>
          <img src="/stack/vue.png" alt="vue"/>
          <img src="/stack/laravel.png" alt="laravel"/>
        </section>
        <section className="about">
          <div className=" d-flex">
            <section className="picture">
              <a name="about" href=" "> <img src="me.jpg" alt="olwatobiloba agbeja" /></a>
            </section>

            <section>
              <h2 className="title">About Me</h2>
              <p>
                Oluwatobiloba Agbeja is a passionate, hard working, autodidactic Software Engineer with focus on Web development and flair for creating elegant solutions using beautiful software architecture and design patterns.
              </p>
              <p>
                Also, a Computer Science and Engineering graduate of Ladoke Akintola University of Technology, Ogbomoso. Nigeria.
              </p>
              <p>
                I enjoy guiding, supporting, and learning from other great minds. 
              </p>
            </section>
          </div>
        </section>

        <section className="contact">
          <a name="contact" href=" ">&nbsp;</a>
          <h2 className="title">Contact</h2>
          <div className="d-flex">
            <section>
              <span className="watermark">Get in Touch</span>
              <div className="phone">Phone: <a href="tel:+2348038110422">+2348038110422</a></div>
              <div className="email"><a href="mailto:tobiagbeja4@gmail.com">Email:tobiagbeja4@gmail.com</a></div>
            </section>
            {/* <div>OR</div> */}
            <section>
              {/* <form method="post" action="https://formspree.io/xqkydond" data-netlify="true"> */}
              <form name="contact" action="/success" method="POST" data-netlify="true">
                <section className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" />
                </section>
                <section className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="_replyto" required />
                </section>
                <section className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea row="20" name="message"></textarea>
                </section>
                <section> <button type="submit">Send</button></section>
              </form>
            </section>
          </div>
        </section>

      </div>
      </Layout>
  );
}

export default Index;
  