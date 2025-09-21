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

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_vcftogg";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_r5aonzn";
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "kEDaNeziEhGdo2ygL";

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

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg(err?.text || err?.message || "Send failed");
      setStatus("error");
    }
  };

  return (
    <center>
      <div className="form">
        <h2 className="section-title">
          {t("sendEmail")}
        </h2>

        <form ref={formRef} className="contact-card" onSubmit={onSubmit} noValidate>
          <input type="hidden" name="contact_number" value={Date.now()} />

          <label htmlFor="name">{t("name")}</label>
          <input id="name" type="text" name="user_name" required minLength={2} />

          <label htmlFor="email">{t("email")}</label>
          <input id="email" type="email" name="user_email" required />

          <label htmlFor="message">{t("message")}</label>
          <textarea id="message" name="message" required minLength={5} />

          <div className="container-send">
            <button className="primary-btn" id="btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? t("sending") : t("submit")}
            </button>
          </div>

          <div aria-live="polite" className="form-status">
            {status === "success" && <p className="success">{t("success")}</p>}
            {status === "error" && <p className="error">{t("error", { error: errorMsg })}</p>}
          </div>
        </form>
      </div>
    </center>
  );
}
