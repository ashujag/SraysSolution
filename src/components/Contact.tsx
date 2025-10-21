import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import bgImage from "../assets/6847119f22b5391772dbf625_684efaff0f6e64c09d96d807_freepik__animate-this-with-8k-loop__54302-poster-00001.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    subscriberEmail: "",
  });

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error as user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "Please enter your first name";
    if (!formData.lastName.trim())
      newErrors.lastName = "Please enter your last name";
    if (!formData.contact.trim())
      newErrors.contact = "Please enter your contact number";
    if (!formData.email.trim()) newErrors.email = "Please enter your email";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.company.trim())
      newErrors.company = "Please enter your company name";
    if (!formData.subject.trim()) newErrors.subject = "Please enter a subject";
    if (!formData.message.trim())
      newErrors.message = "Please enter your message";

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      // Reset form if needed
      setFormData({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        subscriberEmail: "",
      });
    } else {
      // Scroll to first error
      const firstErrorField = document.querySelector<
        HTMLInputElement | HTMLTextAreaElement
      >(".error");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-white"
      style={{ fontFamily: "Anton, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sacramento&family=Anton&display=swap');
        .sacramento-font {
          font-family: 'Sacramento', cursive;
        }
        .anton-font {
          font-family: 'Anton', sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <div
        className="relative h-96 bg-black overflow-hidden flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 opacity-20 bg-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative text-center z-10">
          <h1 className="Anto-font text-7xl font-bold text-lime-300 italic">
            Contact
          </h1>
          <p className="anton-font text-5xl font-bold text-white mt-2">
            LETS TALK
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white px-8 py-16">
        {/* Yellow Banner */}
        <div className="bg-yellow-300 rounded-lg p-4 mb-12 flex justify-center gap-8 text-sm font-bold text-black anton-font">
          <div className="flex items-center gap-2">
            <span>●</span>
            <span>Quick response within 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <span>●</span>
            <span>Clear project updates</span>
          </div>
          <div className="flex items-center gap-2">
            <span>●</span>
            <span>Available across time zones</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div>
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <label className="text-sm font-bold text-black mb-2 block anton-font">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full border-2 p-3 rounded anton-font ${
                    errors.firstName
                      ? "border-red-500 error"
                      : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-bold text-black mb-2 block anton-font">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full border-2 p-3 rounded anton-font ${
                    errors.lastName ? "border-red-500 error" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <label className="text-sm font-bold text-black mb-2 block anton-font">
                  CONTACT
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`w-full border-2 p-3 rounded anton-font ${
                    errors.contact ? "border-red-500 error" : "border-gray-300"
                  }`}
                />
                {errors.contact && (
                  <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-bold text-black mb-2 block anton-font">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border-2 p-3 rounded anton-font ${
                    errors.email ? "border-red-500 error" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Company Row */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <label className="text-sm font-bold text-black mb-2 block anton-font">
                  COMPANY
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full border-2 p-3 rounded anton-font ${
                    errors.company ? "border-red-500 error" : "border-gray-300"
                  }`}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-bold text-black mb-2 block anton-font">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full border-2 p-3 rounded anton-font ${
                    errors.subject ? "border-red-500 error" : "border-gray-300"
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="text-sm font-bold text-black mb-2 block anton-font">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border-2 p-3 rounded h-40 resize-none anton-font ${
                  errors.message ? "border-red-500 error" : "border-gray-300"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mb-16">
              <button
                onClick={handleSubmit}
                className="bg-lime-400 text-black font-bold px-8 py-3 rounded-full hover:bg-lime-500 transition anton-font"
              >
                SUBMIT NOW
              </button>
            </div>
          </div>

          {/* Info Cards (unchanged) */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-yellow-300 rounded-full p-3">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="font-bold text-black anton-font">PHONE</p>
                <p className="text-sm text-gray-600 anton-font">044-42735893</p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-center gap-4">
              <div className="bg-yellow-300 rounded-full p-3">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="font-bold text-black anton-font">MAIL</p>
                <p className="text-sm text-gray-600 anton-font">
                  hr@srayssolutions.in
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="bg-yellow-300 rounded-full p-3">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="font-bold text-black anton-font">ADDRESS</p>
                <p className="text-sm text-gray-600 anton-font">
                  7, Sairam street, Jalladampet, Chennai-600100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-gray-200 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-12 mb-16">
            {/* Left Column */}
            <div>
              <p className="text-xs font-bold text-gray-600 mb-2 anton-font">
                SOURCE
              </p>
              <p className="text-xs text-gray-600 mb-4 anton-font">
                THINKING YOUR DREAMS WITH HUM IDEAS
              </p>
              <p className="text-xs font-bold text-black anton-font">© CLICK</p>
            </div>

            {/* Company Column */}
            <div>
              <p className="text-xs font-bold text-black mb-4 anton-font">
                COMPANY
              </p>
              <div className="space-y-2">
                <p className="text-xs text-gray-600 anton-font">HOME</p>
                <p className="text-xs text-gray-600 anton-font">ABOUT US</p>
                <p className="text-xs text-gray-600 anton-font">BLOG</p>
              </div>
            </div>

            {/* Other Pages Column */}
            <div>
              <p className="text-xs font-bold text-black mb-4 anton-font">
                OTHER PAGES
              </p>
              <div className="space-y-2">
                <p className="text-xs text-gray-600 anton-font">PROJECTS</p>
                <p className="text-xs text-gray-600 anton-font">CAREER</p>
                <p className="text-xs text-gray-600 anton-font">CONTACT US</p>
                <p className="text-xs text-gray-600 anton-font">LICENSE</p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-900"></div>
                <div>
                  <p className="text-xs font-bold text-black anton-font">
                    RICH JOHNSON
                  </p>
                  <p className="text-xs font-bold text-orange-500 anton-font">
                    LEAD DESIGNER & DIRECTION
                  </p>
                </div>
              </div>
              <p className="text-xs font-bold text-black anton-font">
                LETS WORK TOGETHER.
              </p>
            </div>
          </div>

          {/* CTA Button with Hover Animation */}
          <div className="bg-lime-400 rounded-full py-6 px-8 text-center mb-16 flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 group overflow-hidden">
            <MessageSquare className="w-6 h-6 text-black transition-transform duration-300 group-hover:rotate-12" />
            <div className="relative w-[230px] text-2xl font-bold text-black anton-font h-8 flex items-center justify-center">
              {/* Default text */}
              <span className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                LET'S TALK
              </span>
              {/* Hover text */}
              <span className="absolute opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                hr@srayssolutions.in
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="grid grid-cols-2 gap-12 border-t border-gray-200 pt-8">
            <div>
              <p className="text-xs font-bold text-black mb-2 anton-font">
                SUBSCRIBE TO OUR NEWSLETTER
              </p>
              <p className="text-xs text-gray-600 mb-4 anton-font">
                Subscribe to our exclusive news updates!
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  value={formData.subscriberEmail}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subscriberEmail: e.target.value,
                    }))
                  }
                  className="flex-1 border-b-2 border-black bg-white px-2 py-1 text-xs outline-none anton-font"
                />
                <button className="text-black font-bold text-xs anton-font">
                  ↑
                </button>
              </div>
            </div>

            {/* Scroll to Top Button */}
            <div
              onClick={() => {
                const homeSection = document.getElementById("home");
                if (homeSection) {
                  homeSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="text-xs text-gray-600 text-right anton-font"
            >
              <p className="text-xs text-gray-600 text-right anton-font">
                CLICK TO GO UP ↑<br />
                <span className="text-black font-bold">
                  SRays Solutions. All rights reserved.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
