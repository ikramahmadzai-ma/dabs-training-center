import AboutSection from "../components/home/about/AboutSection"
import CoursesSection from "../components/home/courses/CoursesSection"
import EventsFAQSection from "../components/home/eventsFAQ/EventsFAQSection"
import FeaturesSection from "../components/home/feature/FeaturesSection"
import HeroSection from "../components/home/HeroSection"
import InstructorsSection from "../components/home/instructors/InstructorsSection"
import StatisticsSection from "../components/home/statistic/StatisticsSection"
import TestimonialsSection from "../components/home/testimonials/TestimonialsSection"

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CoursesSection />
      <StatisticsSection />
      <TestimonialsSection />
      <EventsFAQSection />
      <InstructorsSection />
    </>
  )
}

export default Home