import { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What are the differences between a school management app and a Learning Management System (LMS)?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut vulputate nisi. Nulla viverra odio nec risus vehiculo luctus. Aliquam bibendum mi vel ipsum malesuada amare. Prosesiur procent dolor porttitor procent ineratum. Etiom pharetra varieratis felis, ut maximus nisl tringilla a. Fusce in eleifend sem, et mattis leo."
    },
    {
      question: "What are the key features that should be included in a school management app?",
      answer: "Key features include student information management, attendance tracking, grade management, timetable scheduling, fee management, communication tools, and reporting analytics."
    },
    {
      question: "How does a school management app help in organizing school administration?",
      answer: "It streamlines administrative tasks, automates processes, reduces paperwork, improves communication between staff, parents, and students, and provides real-time data access."
    },
    {
      question: "What are the benefits of using a school management app?",
      answer: "Benefits include increased efficiency, better organization, improved communication, data security, cost reduction, and enhanced parent engagement."
    },
    {
      question: "What is the process of implementing a school management app in our school?",
      answer: "The implementation process typically includes needs assessment, vendor selection, system customization, staff training, data migration, and gradual rollout with ongoing support."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container-wrapper container">
        
        {/* FAQ HEADER */}
        <div className="faq-header">
          <div className="faq-hamburger">
            <div className="hamburger-line"></div>
            <div className="hamburger-line short"></div>
          </div>
          <h2 className="faq-title">FAQ</h2>
        </div>

        {/* FAQ ITEMS */}
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              
              {/* QUESTION */}
              <div 
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-number-circle">{index + 1}</div>
                <span className="faq-question-text">{faq.question}</span>
                <span className={`faq-icon ${openIndex === index ? 'rotate' : ''}`}>
                  {openIndex === index ? '↑' : '↓'}
                </span>
              </div>

              {/* ANSWER */}
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}