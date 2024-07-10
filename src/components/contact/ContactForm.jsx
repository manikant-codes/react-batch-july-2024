import React from "react";

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: e.target["name"].value,
      email: e.target["email"].value,
      subject: e.target["subject"].value,
      message: e.target["message"].value,
    };

    console.log("data", data);
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
