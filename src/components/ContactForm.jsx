"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    subject: "BES (Bireysel Emeklilik Sistemi)",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, surname, phone, subject, message } = formData;
    
    const emailBody = `Ad Soyad: ${name} ${surname}%0A`
                    + `Telefon: ${phone}%0A`
                    + `Konu: ${subject}%0A%0A`
                    + `Mesaj: %0A${message}`;
    
    // Redirecting to mail app with pre-filled content
    const mailtoLink = `mailto:basvuru@cumbasigorta.com?subject=İletişim Formu: ${subject} - ${name} ${surname}&body=${emailBody}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2 font-heading">Adınız</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
            placeholder="Adınız"
          />
        </div>
        <div>
          <label htmlFor="surname" className="block text-sm font-semibold text-navy-900 mb-2 font-heading">Soyadınız</label>
          <input
            type="text"
            id="surname"
            name="surname"
            required
            value={formData.surname}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
            placeholder="Soyadınız"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy-900 mb-2 font-heading">Telefon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
            placeholder="05XX XXX XX XX"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-navy-900 mb-2 font-heading">İlgilendiğiniz Konu</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-cream-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-white"
          >
            <option value="BES (Bireysel Emeklilik Sistemi)">BES (Bireysel Emeklilik)</option>
            <option value="Hayat Sigortasi">Hayat Sigortası</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2 font-heading">Mesajınız</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-cream-200 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
          placeholder="Size nasıl yardımcı olabiliriz?"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-4 px-6 bg-gold-500 hover:bg-gold-600 text-navy-900 font-heading font-bold text-lg rounded-lg shadow-lg shadow-gold-500/30 transition-all duration-300 hover:-translate-y-1"
      >
        Gönder
      </button>
    </form>
  );
}
