import React from "react";
import PageTitle from "../components/common/PageTitle";
import Address from "../components/contact/Address";
import ContactForm from "../components/contact/ContactForm";

function Contact() {
  return (
    <div className="p-8">
      <PageTitle title="Contact" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 mt-8">
        <Address />
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
