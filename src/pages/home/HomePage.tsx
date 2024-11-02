import React from 'react';
import WelcomeCard from '../../components/cards/WelcomeCardOnMain.tsx';
import IntroduceFeatureCard from '../../components/cards/IntroduceFeature.tsx';
import ContactUsCard from '../../components/cards/ContactUsCard.tsx';
import Footer from '../../components/cards/Footer.tsx';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Posts Section */}
 
      {/* Welcome Section */}
      <section className="welcome-section">
          <WelcomeCard />
      </section>

      {/* Features Section */}
      <section className="features-section">
        <IntroduceFeatureCard />
      </section>

      

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <ContactUsCard />
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
