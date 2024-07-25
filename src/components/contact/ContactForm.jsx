import React from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_sdnjiwd", "template_36650l3", e.target, {
        publicKey: "TjoexUyjiq0KEvI2Z",
      })
      .then(() => {
        alert("SUCCESS!");
        e.target.reset();
      })
      .catch(() => {
        alert("FAILED!");
      });
  }

  return (
    <div className="shadow border-t-[3px] border-b-[3px] border-t-indigo-500 border-b-indigo-500 p-4">
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name-field" className="pb-2">
              Your Name
            </label>
            <input
              id="name-field"
              type="text"
              name="name"
              className="border border-slate-400 px-2 py-1 rounded"
            />
          </div>
          <div className="flex flex-col">
            <label for="email-field" className="">
              Your Email
            </label>
            <input
              id="email-field"
              type="email"
              className="border border-slate-400 px-2 py-1 rounded"
              name="email"
            />
          </div>
          <div className="flex flex-col">
            <label for="subject-field" className="">
              Subject
            </label>
            <input
              id=""
              type="text"
              className="border border-slate-400 px-2 py-1 rounded"
              name="subject"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message-field" className="">
              Message
            </label>
            <textarea
              id="message-field"
              className="border border-slate-400 px-2 py-1 rounded"
              name="message"
              rows="5"
            ></textarea>
          </div>
          <div className="">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 px-4 py-2 rounded text-white"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
