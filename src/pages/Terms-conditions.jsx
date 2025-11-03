import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const sections = [
    {
      title: "1. Introduction",
      content: (
        <p>
          Welcome to <strong>ITE Software Solutions</strong> ("we," "our," or
          "us"). These Terms and Conditions ("Terms") govern your use of our
          website{" "}
          <a
            href="https://www.itesoftwaresolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            itesoftwaresolutions.com
          </a>{" "}
          and any related services provided by us. By accessing or using our
          website, you agree to comply with these Terms. If you do not agree,
          please discontinue using our site immediately.
        </p>
      ),
    },
    {
      title: "2. Use of Our Services",
      list: [
        "You agree to use our website and services only for lawful purposes.",
        "You must not use our website in any way that causes harm to the website, our systems, or other users.",
        "You are responsible for maintaining the confidentiality of your account information (if applicable).",
      ],
    },
    {
      title: "3. Intellectual Property",
      content: (
        <p>
          All content on this website, including text, graphics, logos, images,
          and software, is the property of <strong>ITE Software Solutions</strong>{" "}
          or its licensors and is protected by applicable copyright, trademark,
          and intellectual property laws. You may not copy, modify, distribute,
          or reproduce any material without our prior written consent.
        </p>
      ),
    },
    {
      title: "4. Third-Party Services and Links",
      content: (
        <p>
          Our website may include links to third-party websites or services that
          are not operated by us. We are not responsible for the content,
          privacy policies, or practices of any third-party websites. Accessing
          such sites is at your own risk, and we encourage you to review their
          respective terms and privacy policies.
        </p>
      ),
    },
    {
      title: "5. Disclaimer of Warranties",
      content: (
        <p>
          Our website and services are provided on an "as-is" and "as available"
          basis. We make no warranties, express or implied, regarding the
          accuracy, reliability, or availability of our website or content.{" "}
          <strong>ITE Software Solutions</strong> disclaims all warranties to
          the fullest extent permitted by law.
        </p>
      ),
    },
    {
      title: "6. Limitation of Liability",
      content: (
        <p>
          To the maximum extent permitted by law,{" "}
          <strong>ITE Software Solutions</strong> shall not be liable for any
          direct, indirect, incidental, or consequential damages arising out of
          your use or inability to use our website or services, even if we have
          been advised of the possibility of such damages.
        </p>
      ),
    },
    {
      title: "7. Indemnification",
      content: (
        <p>
          You agree to indemnify and hold harmless{" "}
          <strong>ITE Software Solutions</strong>, its employees, affiliates,
          and partners from any claims, damages, or expenses arising from your
          use of our website or violation of these Terms.
        </p>
      ),
    },
    {
      title: "8. Termination",
      content: (
        <p>
          We reserve the right to suspend or terminate your access to our
          website or services at any time, without notice, for conduct that we
          believe violates these Terms or is harmful to other users or our
          business interests.
        </p>
      ),
    },
    {
      title: "9. Governing Law",
      content: (
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of India, without regard to its conflict of law principles. Any
          disputes arising under or in connection with these Terms shall be
          subject to the exclusive jurisdiction of the courts located in Pune,
          Maharashtra, India.
        </p>
      ),
    },
    {
      title: "10. Changes to These Terms",
      content: (
        <p>
          We reserve the right to modify or update these Terms at any time
          without prior notice. Any changes will be effective immediately upon
          posting on this page. Your continued use of the website after any
          modifications indicates your acceptance of the revised Terms.
        </p>
      ),
    },
    {
      title: "11. Contact Us",
      content: (
        <p>
          If you have any questions or concerns about these Terms, please
          contact us at:
          <br />
          <strong>ITE Software Solutions</strong>
          <br />
          📧 Email:{" "}
          <a
            href="mailto:[Insert Contact Email]"
            className="underline hover:text-blue-600"
          >
            [Insert Contact Email]
          </a>
          <br />
          🌐 Website:{" "}
          <a
            href="https://www.itesoftwaresolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            https://www.itesoftwaresolutions.com
          </a>
          <br />
          📍 Address: [Insert Company Address]
        </p>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white text-gray-800 py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-base">
            <strong>Effective Date:</strong> [Insert Date]
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 1}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                {section.title}
              </h2>

              {section.content ? (
                <div className="text-gray-700 leading-relaxed">
                  {section.content}
                </div>
              ) : (
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
