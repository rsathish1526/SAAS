import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Testimonial from './components/Testimonial/Testimonial';
import Explore from './components/Explore/Explore';
import SocialTestimonial from './components/SocialTestimonial/SocialTestimonial';
import Footer from './components/Footer/Footer';

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((e) => io.observe(e));

    return () => io.disconnect();
  }, []);

  return (
    <div className="site">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <Explore />
        <SocialTestimonial />
      </main>
      <Footer />
    </div>
  );
}