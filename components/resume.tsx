import { GraduationCap, Briefcase } from "lucide-react"

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
]

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
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-[#2d2d2d]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Resume</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-[#ffc107]" size={32} />
              My Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg relative">
                  <div className="inline-block bg-[#ffc107] text-black text-xs font-bold px-3 py-1 rounded mb-3">
                    {item.period}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                  <p className="text-[#ffc107] mb-3">{item.institution}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-[#ffc107]" size={32} />
              My Experience
            </h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg relative">
                  <div className="inline-block bg-[#ffc107] text-black text-xs font-bold px-3 py-1 rounded mb-3">
                    {item.period}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.position}</h4>
                  <p className="text-[#ffc107] mb-3">{item.company}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
