import React, { useState } from 'react';

const FAQSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqData = [
  {
    id: 'collapseOne',
    headingId: 'headingOne',
    question: 'What types of software development services do you offer?',
    answer:
      'We provide end-to-end software development services, including web and mobile app development, UI/UX design, API integration, cloud solutions, and maintenance support.',
    delay: '.3s'
  },
  {
    id: 'collapseTwo',
    headingId: 'headingTwo',
    question: 'How long does it take to build a software project?',
    answer:
      'The timeline depends on project complexity and requirements. On average, small projects take 4–6 weeks, while larger, enterprise-level applications can take 3–6 months or more.',
    delay: '.5s'
  },
  {
    id: 'collapseThree',
    headingId: 'headingThree',
    question: 'Do you offer post-launch support and maintenance?',
    answer:
      'Yes, we provide ongoing maintenance, updates, and technical support to ensure your software remains secure, efficient, and up to date after launch.',
    delay: '.6s'
  },
  {
    id: 'collapseFour',
    headingId: 'headingFour',
    question: 'Can you work with existing systems or upgrade legacy software?',
    answer:
      'Absolutely. We specialize in modernizing legacy applications, integrating new features, and migrating systems to modern technologies without disrupting your existing operations.',
    delay: '.3s'
  },
  {
    id: 'collapseFive',
    headingId: 'headingFive',
    question: 'How do you ensure the quality of the software you deliver?',
    answer:
      'Our team follows agile development practices, code reviews, automated testing, and continuous integration to ensure high-quality, bug-free software that meets client requirements.',
    delay: '.5s'
  },
  {
    id: 'collapseSix',
    headingId: 'headingSix',
    question: 'What is your software development process?',
    answer:
      'Our process includes requirement analysis, UI/UX design, development, quality assurance, deployment, and post-launch support — all tailored to client needs.',
    delay: '.6s'
  },
  {
    id: 'collapseSeven',
    headingId: 'headingSeven',
    question: 'Do you sign an NDA for confidential projects?',
    answer:
      'Yes, we take data privacy seriously. We are open to signing NDAs to ensure your business ideas and project details remain completely confidential.',
    delay: '.7s'
  },
  {
    id: 'collapseEight',
    headingId: 'headingEight',
    question: 'What technologies do you use for software development?',
    answer:
      'We use modern technologies like React.js, Node.js, Express.js, MongoDB, MySQL, Next.js, and cloud platforms such as AWS and Firebase for scalable solutions.',
    delay: '.8s'
  }
];


  return (
    <section className="faq-section !py-4 md:!py-8 fix">
      <div className="container">
        <div className="section-title flex justify-between flex-col md:flex-row gap-4 md:gap-2 items-end mb-12">
          <div className="section-title">
            <h1 className="wow fadeInUp black !text-3xl md:!text-5xl !font-semibold visible-slowly-right" data-wow-delay=".3s">
              Some Question
            </h1>
          </div>
          <p className="fs-five wow fadeInLeft">
            IT Technology is a dynamic field implementation an <br /> support management IT Technology
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="custom-accordion accordion-style2" id="accordionExample">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3 md:gap-4">
                {faqData.slice(0, 4).map((faq) => (
                  <div key={faq.id} className="accordion-item rounded-5 bg-transparent wow fadeInUp" data-wow-delay={faq.delay}>
                    <h2 className="accordion-header" id={faq.headingId}>
                      <button 
                        className={`accordion-button tracking-normal bg-transparent ${openAccordion === faq.id ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        aria-expanded={openAccordion === faq.id}
                        aria-controls={faq.id}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div 
                      id={faq.id} 
                      className={`accordion-collapse ${openAccordion === faq.id ? 'show' : 'collapse'}`}
                      aria-labelledby={faq.headingId}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body pt-1">
                        <p className="fs-eight pra">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                {faqData.slice(4).map((faq) => (
                  <div key={faq.id} className="accordion-item rounded-5 bg-transparent wow fadeInUp" data-wow-delay={faq.delay}>
                    <h2 className="accordion-header" id={faq.headingId}>
                      <button 
                        className={`accordion-button tracking-normal bg-transparent ${openAccordion === faq.id ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        aria-expanded={openAccordion === faq.id}
                        aria-controls={faq.id}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div 
                      id={faq.id} 
                      className={`accordion-collapse ${openAccordion === faq.id ? 'show' : 'collapse'}`}
                      aria-labelledby={faq.headingId}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body pt-1">
                        <p className="fs-16">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
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

export default FAQSection;