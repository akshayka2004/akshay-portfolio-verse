import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-section-bg">
      <div className="container-portfolio">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Personal Bio</h3>
              <p className="text-lg text-text-light leading-relaxed">
                I'm a 4th year student pursuing my MCA (Integrated) at Saintgits College of Engineering, 
                Pathamuttom, Kottayam, expected to graduate in 2027. I'm passionate about exploring new 
                technologies, coding backend systems, and connecting with people through discussions and debates.
              </p>
              <p className="text-lg text-text-light leading-relaxed">
                I value simplicity and groundedness in both life and work. My approach to problem-solving 
                combines technical expertise with a deep understanding of user needs and business requirements.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">What Drives Me</h3>
              <ul className="space-y-2 text-lg text-text-light">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Building scalable backend systems that power great user experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Exploring data science and machine learning applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Connecting with fellow developers and tech enthusiasts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Continuously learning and adapting to new technologies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-portfolio">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    MCA (Integrated)
                  </h4>
                  <div className="space-y-2 text-text-light">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <span>Saintgits College of Engineering, Pathamuttom, Kottayam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>Expected Graduation: 2027</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-portfolio">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Backend Development',
                  'Data Science',
                  'Machine Learning',
                  'API Development',
                  'Database Design',
                  'System Architecture'
                ].map((interest) => (
                  <div
                    key={interest}
                    className="bg-primary/5 rounded-lg p-3 text-center text-primary font-medium"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;