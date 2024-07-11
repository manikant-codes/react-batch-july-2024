import React from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(() => {
        alert("SUCCESS!");
        e.target.reset();
      })
      .catch((error) => {
        alert("FAILED...", error.text);
      });
  }

  return (
    <form
      className="flex flex-col gap-4 shadow-md p-4 rounded-lg border border-indigo-200 border-t-4 border-t-indigo-500"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-4 w-full">
        <div className="flex flex-col grow-[1]">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            className="border border-indigo-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col grow-[1]">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            className="border border-indigo-300 rounded p-2"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          className="border border-indigo-300 rounded p-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="border border-indigo-300 rounded p-2"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
