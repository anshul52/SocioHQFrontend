"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  website: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setStatus("success");
      setFeedback("Thanks, your message has been queued and we will reach out soon.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please email us directly at info@socio.ae.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="field">
        <span>Name *</span>
        <input
          required
          type="text"
          value={values.name}
          onChange={(event) =>
            setValues((current) => ({ ...current, name: event.target.value }))
          }
          placeholder="Jane Smith"
        />
      </label>
      <label className="field">
        <span>Email *</span>
        <input
          required
          type="email"
          value={values.email}
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
          placeholder="jane@company.com"
        />
      </label>
      <label className="field">
        <span>Phone *</span>
        <input
          required
          type="tel"
          value={values.phone}
          onChange={(event) =>
            setValues((current) => ({ ...current, phone: event.target.value }))
          }
          placeholder="+971 54 525 5889"
        />
      </label>
      <label className="field">
        <span>Website</span>
        <input
          type="url"
          value={values.website}
          onChange={(event) =>
            setValues((current) => ({ ...current, website: event.target.value }))
          }
          placeholder="https://yourbrand.com"
        />
      </label>
      <label className="field field-full">
        <span>Message</span>
        <textarea
          rows={5}
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          placeholder="Tell us about your project"
        />
      </label>
      <button className="submit-button" disabled={status === "submitting"} type="submit">
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
      {feedback ? <p className={`form-feedback is-${status}`}>{feedback}</p> : null}
    </form>
  );
}
