import ContactUs from './sections/ContactUs';
import Featured from './sections/Featured';
import Hero from './sections/Hero/Hero';
import SpinW from './sections/Spin-wheel/SpinW';
import Testimonial from './sections/Testimonial';
import WhyChooseUs from './sections/WhyChooseUs';

export default function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <WhyChooseUs />
      <SpinW />
      <ContactUs />
      <Testimonial />
    </div>
  );
}
