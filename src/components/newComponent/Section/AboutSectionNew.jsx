import { testimonials } from "../../../data/links";
import { AnimatedTestimonials } from "../Component/About/AnimatedAboutSection";

export default function AboutSection() {
  return (
    <section className=" pt-20 pb-32" id="about">
      <h1 className="text-4xl text-white text-center font-bold">About Me</h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
