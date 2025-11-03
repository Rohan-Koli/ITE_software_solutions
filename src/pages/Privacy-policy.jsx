import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
          This Privacy Policy outlines how{" "}
          <strong>ITE Software Solutions</strong> ("we," "our," or "us")
          collects, uses, shares, and protects your personal information when
          you use our website{" "}
          <a
            href="https://www.itesoftwaresolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            itesoftwaresolutions.com
          </a>
          . By accessing or using our Website, you consent to the practices
          described in this Privacy Policy.
        </p>
      ),
    },
    {
      title: "2. Information We Collect",
      list: [
        "Your name, email address, phone number, and other contact information.",
        "Information about your use of the Website, such as browser type, IP address, access times, and approximate location.",
        "Information about your interactions with us, including inquiries, support requests, and feedback.",
      ],
    },
    {
      title: "3. How We Use Your Information",
      list: [
        "To provide, maintain, and improve our Website’s functionality and services.",
        "To respond to your inquiries, requests, or feedback.",
        "To send you updates, newsletters, or promotional materials if you have opted in.",
        "To monitor and analyze Website usage, trends, and user behavior.",
      ],
    },
    {
      title: "4. Sharing Your Information",
      list: [
        "With your consent when you have explicitly agreed to share your information.",
        "To comply with applicable laws, regulations, or legal processes.",
        "To protect our rights, privacy, safety, or property.",
        "In connection with a merger, acquisition, or sale of assets.",
      ],
    },
    {
      title: "5. Security",
      content: (
        <p>
          We take reasonable administrative, technical, and physical measures to
          protect your personal information from unauthorized access,
          disclosure, alteration, or destruction. However, please note that no
          method of internet transmission or electronic storage is 100% secure.
        </p>
      ),
    },
    {
      title: "6. Cookies",
      content: (
        <p>
          We use cookies and similar technologies to enhance your experience on
          our Website. Cookies help us understand how you use our website and
          improve our services. You can manage or disable cookies through your
          browser settings. By continuing to use our website, you consent to the
          use of cookies as described in this policy.
        </p>
      ),
    },
    {
      title: "7. Data Retention",
      content: (
        <p>
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy unless a longer
          retention period is required or permitted by law. When data is no
          longer needed, we will securely delete or anonymize it.
        </p>
      ),
    },
    {
      title: "8. Data Subject Rights",
      list: [
        "Access, correct, or update your data by contacting us.",
        "Opt-out of receiving marketing communications from us.",
        "Request deletion of your data from our systems, subject to legal requirements.",
      ],
    },
    {
      title: "9. Third-party Links",
      content: (
        <p>
          Our Website may contain links to third-party websites. Please note
          that this Privacy Policy applies only to{" "}
          <strong>itesoftwaresolutions.com</strong>. We are not responsible for
          the privacy practices or content of external sites. We encourage you
          to review their policies before providing any personal information.
        </p>
      ),
    },
    {
      title: "10. Legal Basis",
      list: [
        "Legitimate business interests.",
        "Your explicit consent.",
        "Performance of a contract.",
        "Compliance with legal obligations.",
      ],
    },
    {
      title: "11. Changes to This Privacy Policy",
      content: (
        <p>
          We reserve the right to modify this Privacy Policy at any time. When
          changes are made, we will update the{" "}
          <strong>“Effective Date”</strong> at the top of this page. Your
          continued use of the Website after any modifications constitutes your
          acceptance of the updated policy.
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-base">
            <strong>Effective Date:</strong> [Insert Date]
          </p>
        </motion.div>

        {/* Policy Sections */}
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

          {/* Contact Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={12}
            className="bg-blue-700 text-white rounded-2xl shadow-lg p-8 mt-10"
          >
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy, please contact us at:
            </p>
            <div className="space-y-2">
              <p>
                <strong>ITE Software Solutions</strong>
              </p>
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:[Insert Contact Email]"
                  className="underline hover:text-blue-200"
                >
                  [Insert Contact Email]
                </a>
              </p>
              <p>
                🌐 Website:{" "}
                <a
                  href="https://www.itesoftwaresolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-200"
                >
                  https://www.itesoftwaresolutions.com
                </a>
              </p>
              <p>📍 Address: [Insert Company Address]</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
