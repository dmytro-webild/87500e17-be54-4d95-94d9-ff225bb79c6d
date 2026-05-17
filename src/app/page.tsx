"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { CheckCircle, ShieldCheck, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="large"
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Clean Zone PH"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Pristine Spaces, Peaceful Living"
      description="Experience professional-grade cleaning tailored to your lifestyle. Clean Zone PH ensures every corner shines."
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "h1",
          imageSrc: "http://img.b2bpic.net/free-photo/mid-century-interior-design_23-2151902071.jpg",
          imageAlt: "Luxurious clean living room",
        },
        {
          id: "h2",
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-couple-love-doing-chores-attractive-male-embracing-his-wife-who-is-looking-dirty-brush-with-aversion-team-work-family-working-about-house-handsome-man-woman-washing-furniture_273609-7829.jpg",
          imageAlt: "Professional cleaning crew",
        },
        {
          id: "h3",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-woman-making-salad-kitchen_1163-2246.jpg",
          imageAlt: "Sparkling kitchen surfaces",
        },
        {
          id: "h4",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-eco-friendly-cleaning-products-with-brushes-baking-soda_23-2148818454.jpg",
          imageAlt: "Eco-friendly cleaning supplies",
        },
        {
          id: "h5",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-housekeeper-leaning-kitchen-counter-holding-feather-duster-looking-camera_23-2148222229.jpg",
          imageAlt: "Professional housekeeping service",
        },
        {
          id: "h6",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-interior-details-living-room-decor_169016-6008.jpg",
          imageAlt: "Clean bedroom interior",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Mission"
      title="Why Clean Zone PH?"
      description="We don't just clean; we transform your space into a sanctuary. Our team is fully trained to handle every detail with care and precision."
      subdescription="Dedicated to excellence in residential and office cleaning."
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-man-home-cleaning_23-2148514832.jpg"
      mediaAnimation="slide-up"
      icon={ShieldCheck}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Comprehensive Cleaning Services"
      description="From deep cleaning to regular maintenance, we provide everything you need to keep your space spotless."
      accordionItems={[
        {
          id: "f1",
          title: "Deep Cleaning",
          content: "Our deep cleaning service targets hard-to-reach areas and stubborn stains.",
        },
        {
          id: "f2",
          title: "Regular Maintenance",
          content: "Weekly or bi-weekly visits to ensure your home stays consistently clean.",
        },
        {
          id: "f3",
          title: "Move-In / Move-Out",
          content: "Moving is stressful. Let us handle the cleaning so you can focus on settling in.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-woman-cleaning-home_23-2150453299.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "Essential",
          price: "₱1,999",
          subtitle: "Perfect for studio & small condos",
          buttons: [
            {
              text: "Choose",
              href: "#contact",
            },
          ],
          features: [
            "Kitchen cleaning",
            "Bathroom sanitize",
            "Dusting surfaces",
          ],
        },
        {
          id: "p2",
          badge: "Premium",
          price: "₱3,499",
          subtitle: "For spacious family homes",
          buttons: [
            {
              text: "Choose",
              href: "#contact",
            },
          ],
          features: [
            "All Essential features",
            "Window cleaning",
            "Floor mopping",
          ],
        },
      ]}
      title="Simple Pricing for Clean Homes"
      description="Transparent rates with no hidden costs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "1000+",
          title: "Homes Cleaned",
          description: "Happy households served.",
          icon: CheckCircle,
        },
        {
          id: "m2",
          value: "98%",
          title: "Satisfaction",
          description: "Clients recommend us.",
          icon: Star,
        },
        {
          id: "m3",
          value: "50+",
          title: "Professional Team",
          description: "Trained cleaning experts.",
          icon: Users,
        },
      ]}
      title="Trusted by Families"
      description="Our numbers speak for the quality of service we provide every single day."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Maria Santos",
          handle: "@mariasantos",
          testimonial: "Excellent service! My home was spotless.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-female-with-wavy-hair-park_23-2147911448.jpg",
        },
        {
          id: "t2",
          name: "Juan Dela Cruz",
          handle: "@juan.dc",
          testimonial: "Very professional and friendly staff.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-woman-receiving-groceries_23-2149663651.jpg",
        },
        {
          id: "t3",
          name: "Elena Reyes",
          handle: "@elena.r",
          testimonial: "Highly recommended for condo cleaning.",
          imageSrc: "http://img.b2bpic.net/free-photo/blonde-woman-with-big-smile-before-starting-run_23-2147562226.jpg",
        },
        {
          id: "t4",
          name: "Sarah Lee",
          handle: "@sarahlee",
          testimonial: "The best cleaning service in the city.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-hispanic-girl-textured-wall_1187-5169.jpg",
        },
        {
          id: "t5",
          name: "Miguel Gomez",
          handle: "@miguelg",
          testimonial: "Fast, reliable, and clean work.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-working-together-donation-facility_23-2148687355.jpg",
        },
      ]}
      title="What Our Clients Say"
      description="Hear directly from those who trust us with their homes."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Book Your Service"
      description="Fill out the form below and our team will contact you shortly."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/people-taking-care-office-cleaning_23-2149374435.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Clean Zone PH"
      copyrightText="© 2025 Clean Zone PH. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
