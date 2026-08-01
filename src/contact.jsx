// components/ContactEmailJS.jsx
"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { useTranslation } from "react-i18next";

export default function ContactEmailJS() {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [fallbackHref, setFallbackHref] = useState("");

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_rerf15g";
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_r5aonzn";
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "kEDaNeziEhGdo2ygL";

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (status === "sending") return;

    setStatus("sending");
    setErrorMsg("");
    setFallbackHref("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      const providerError = err?.text || err?.message || "Send failed";
      const formData = new FormData(form);
      const senderName = formData.get("user_name") || "";
      const senderEmail = formData.get("user_email") || "";
      const message = formData.get("message") || "";
      const subject = encodeURIComponent(`Portfolio message from ${senderName}`);
      const body = encodeURIComponent(`Name: ${senderName}\nEmail: ${senderEmail}\n\n${message}`);
      setFallbackHref(`mailto:sibbianass@gmail.com?subject=${subject}&body=${body}`);
      setErrorMsg(/invalid grant|gmail_api/i.test(providerError) ? t("contact.serviceUnavailable") : t("contact.sendFailed"));
      setStatus("error");
    }
  };

  return (
    <section className="form" id="contact">
        <div className="opportunity-cta">
          <div><span className="eyebrow">Germany</span><h2>{t("opportunity.title")}</h2><p>{t("opportunity.text")}</p></div>
          <div className="opportunity-actions"><a href="mailto:sibbianass@gmail.com" className="primary-btn">{t("opportunity.email")}</a><a href={`${process.env.PUBLIC_URL}/weg.pdf`} download className="outline-btn"><i className="fa-solid fa-download" aria-hidden="true"></i> {t("opportunity.cv")}</a></div>
        </div>
        <h2 className="section-title">{t("contact.title")} <span>{t("contact.titleSpan")}</span></h2>
        <p className="contact-intro">{t("contact.intro")}</p>
        <div className="contact-layout">
          <aside className="contact-details" aria-label="Direct contact details">
            <a href="mailto:sibbianass@gmail.com"><i className="fa-solid fa-envelope" aria-hidden="true"></i><span><small>Email</small>sibbianass@gmail.com</span></a>
            <a href="https://www.linkedin.com/in/anass-sibbi-75778b347/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i><span><small>LinkedIn</small>Anass Sibbi</span></a>
            <a href="https://github.com/ANASS133" target="_blank" rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true"></i><span><small>GitHub</small>ANASS133</span></a>
            <div><i className="fa-solid fa-location-dot" aria-hidden="true"></i><span><small>Location</small>{t("contact.location")}</span></div>
          </aside>

        <form ref={formRef} className="contact-card" onSubmit={onSubmit} noValidate>
          <h3>{t("sendEmail")}</h3>
          <input type="hidden" name="contact_number" value={Date.now()} />

          <label htmlFor="name">{t("name")}</label>
          <input id="name" type="text" name="user_name" required minLength={2} />

          <label htmlFor="email">{t("email")}</label>
          <input id="email" type="email" name="user_email" required />

          <label htmlFor="message">{t("message")}</label>
          <textarea id="message" name="message" required minLength={5} />

          <div className="container-send">
            <button className={`primary-btn ${status === "success" ? "success-active" : ""}`} id="btn" type="submit" disabled={status === "sending"}>
              <span className="button-label">{status === "sending" ? t("sending") : status === "success" ? t("sent") : t("submit")}</span>
              <svg className="success-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" /></svg>
            </button>
          </div>

          <div aria-live="polite" className="form-status">
            {status === "success" && <p className="success">{t("success")}</p>}
            {status === "error" && <p className="error">{errorMsg} {fallbackHref && <a href={fallbackHref}>{t("contact.emailFallback")}</a>}</p>}
          </div>
          <p className="privacy-note"><i className="fa-solid fa-shield-halved" aria-hidden="true"></i>{t("privacy")}</p>
        </form>
        </div>
    </section>
  );
}
