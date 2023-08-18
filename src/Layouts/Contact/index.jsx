import React from "react";
import Button from "../../Components/Button";

const Contact = () => {
  const sendMail = () => {
    window.open("mailto:amusfq@gmail.com", "mail");
  };

  return (
    <div
      id="contact"
      className="max-w-7xl mx-auto flex justify-center py-28"
      data-aos="fade-up"
    >
      <div className="px-0 md:px-32 space-y-6 text-center">
        <h1 className="whitespace-nowrap text-xl md:text-3xl font-bold text-center">
          Get In Touch
        </h1>
        <p className="text-gray-400 text-center max-w-xl">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <Button onClick={sendMail}>Leave Message</Button>
      </div>
    </div>
  );
};

export default Contact;
