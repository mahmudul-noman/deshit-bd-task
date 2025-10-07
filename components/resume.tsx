"use client";
import { GraduationCap, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const education = [
  {
    degree: "Computer Science",
    institution: "International University",
    period: "2006 - 2008",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
  {
    degree: "Bachelor Degree",
    institution: "University of California",
    period: "2008 - 2012",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
  {
    degree: "Master Degree",
    institution: "Harvard University",
    period: "2012 - 2016",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
];

const experience = [
  {
    position: "Sr. Font Designer",
    company: "Apple Inc.",
    period: "2016 - Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
  {
    position: "Jr. Font Designer",
    company: "Google Inc.",
    period: "2014 - 2016",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
  {
    position: "HTML Developer",
    company: "Adobe Inc.",
    period: "2012 - 2014",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
];

export default function Resume() {
  const [isEducationVisible, setIsEducationVisible] = useState(false);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const educationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsEducationVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const experienceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsExperienceVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      educationObserver.observe(educationRef.current);
    }
    if (experienceRef.current) {
      experienceObserver.observe(experienceRef.current);
    }

    return () => {
      if (educationRef.current) {
        educationObserver.unobserve(educationRef.current);
      }
      if (experienceRef.current) {
        experienceObserver.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="resume" className="py-20 bg-[#2d2d2d]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Resume
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Education Cards */}
        <div ref={educationRef}>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <GraduationCap className="text-[#ffc107]" size={32} />
            My Education
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <div
                key={index}
                className={`bg-[#1a1a1a] p-6 rounded-lg relative shadow-md shadow-blue-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-100 ${
                  isEducationVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-block bg-[#ffc107] text-black text-xs font-bold px-3 py-1 rounded-2xl mb-3">
                  {item.period}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.degree}
                </h4>
                <p className="text-[#ffc107] mb-3">{item.institution}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Cards */}
        <div ref={experienceRef} className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <Briefcase className="text-[#ffc107]" size={32} />
            My Experience
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`bg-[#1a1a1a] p-6 shadow-blue-50 rounded-lg relative shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-100 ${
                  isExperienceVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="inline-block bg-[#ffc107] text-black text-xs font-bold px-3 py-1 rounded-2xl mb-3">
                  {item.period}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.position}
                </h4>
                <p className="text-[#ffc107] mb-3">{item.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
