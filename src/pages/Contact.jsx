import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

function Contact() {
  return (
    <div className="p-[32px]">
      <h1 className="text-4xl text-indigo-700 font-bold mb-8 text-center">
        Contact
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
