import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [subscriberEmailError, setSubscriberEmailError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error as user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
    if (name === "subscriberEmail") {
      setSubscriberEmailError("");
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Please enter your first name";
    } else if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name should contain only alphabets";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Please enter your last name";
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name should contain only alphabets";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Please enter your contact number";
    } else if (!/^[0-9]+$/.test(formData.contact)) {
      newErrors.contact = "Contact number should contain only numbers";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    } else if (!formData.email.includes("@gmail.com")) {
      newErrors.email = "Only Gmail addresses are allowed";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Please enter your company name";
    } else if (!/^[a-zA-Z0-9\s.,!?&'-]+$/.test(formData.company)) {
      newErrors.company = "Company name should contain only words and common punctuation";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject";
    } else if (!/^[a-zA-Z0-9\s.,!?&'-]+$/.test(formData.subject)) {
      newErrors.subject = "Subject should contain only words and common punctuation";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    } else if (!/^[a-zA-Z0-9\s.,!?&'-]+$/.test(formData.message)) {
      newErrors.message = "Message should contain only words and common punctuation";
    }

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
      const firstErrorField = document.querySelector(".error");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleNewsletterSubmit = () => {
    if (!formData.subscriberEmail.trim()) {
      setSubscriberEmailError("Please enter your email");
    } else if (!/\S+@\S+\.\S+/.test(formData.subscriberEmail)) {
      setSubscriberEmailError("Email is invalid");
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.subscriberEmail)) {
      setSubscriberEmailError("Only Gmail addresses are allowed");
    }
    else {
      console.log("Newsletter subscribed:", formData.subscriberEmail);
      alert("Newsletter subscribed successfully!");
      setFormData((prev) => ({ ...prev, subscriberEmail: "" }));
      setSubscriberEmailError("");
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
      >
        <div className="absolute inset-0 opacity-20 bg-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative text-center z-10">
          <h1 className="text-7xl font-bold text-lime-300 italic">
            Contact
          </h1>
          <p className="anton-font text-5xl font-bold text-white mt-2">
            LET'S TALK
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white px-4 md:px-8 py-16">
        {/* Yellow Banner */}
        <div className="bg-yellow-300 rounded-lg p-4 mb-12 flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-sm font-bold text-black anton-font">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
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
                disabled={!Object.keys(errors).every(key => !errors[key]) && !formData.email.includes("@gmail.com")}
                className={`bg-lime-400 text-black font-bold px-8 py-3 rounded-full transition anton-font ${
                  !Object.keys(errors).every(key => !errors[key]) && !formData.email.includes("@gmail.com")
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-lime-500"
                }`}
              >
                SUBMIT NOW
              </button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <a 
                href="tel:044-42735893"
                className="bg-yellow-300 rounded-full p-3 flex-shrink-0 cursor-pointer hover:bg-yellow-400 transition"
              >
                <Phone className="w-6 h-6 text-black" />
              </a>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-black anton-font">PHONE</p>
                <p className="text-sm text-gray-600 anton-font break-words">044-42735893</p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-start gap-4">
              <a 
                href="mailto:hr@srayssolutions.in"
                className="bg-yellow-300 rounded-full p-3 flex-shrink-0 cursor-pointer hover:bg-yellow-400 transition"
              >
                <Mail className="w-6 h-6 text-black" />
              </a>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-black anton-font">MAIL</p>
                <p className="text-sm text-gray-600 anton-font break-words">
                  hr@srayssolutions.in
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <a 
                href="https://maps.app.goo.gl/WWe5QbaddefFKW8D8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-300 rounded-full p-3 flex-shrink-0 cursor-pointer hover:bg-yellow-400 transition"
              >
                <MapPin className="w-6 h-6 text-black" />
              </a>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-black anton-font">ADDRESS</p>
                <p className="text-sm text-gray-600 anton-font break-words">
                  7, Sairam street, Jalladampet, Chennai-600100
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white px-4 md:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
            {/* Left Column */}
            <div></div>
            <div></div>
            <div></div>
            
            {/* Right Column */}
            <div>
              <div className="flex items-center gap-4 mb-4"></div>
            </div>
          </div>

          {/* CTA Button with Hover Animation */}
          <div 
            onClick={() => window.location.href = 'mailto:hr@srayssolutions.in'}
            className="bg-lime-400 rounded-full py-6 px-8 text-center mb-8 flex items-center justify-center gap-3 cursor-pointer transition-all duration-300 group overflow-hidden"
          >
            <MessageSquare className="w-6 h-6 text-black transition-transform duration-300 group-hover:rotate-12 flex-shrink-0" />
            <div className="relative w-full md:w-[230px] text-xl md:text-2xl font-bold text-black anton-font h-8 flex items-center justify-center">
              {/* Default text */}
              <span className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                LET'S TALK
              </span>
              {/* Hover text */}
              <span className="absolute opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-sm md:text-2xl">
                hr@srayssolutions.in
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-8">
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
                  name="subscriberEmail"
                  placeholder="ENTER YOUR EMAIL"
                  value={formData.subscriberEmail}
                  onChange={handleChange}
                  className={`flex-1 border-b-2 border-black bg-white px-2 py-1 text-xs outline-none anton-font ${
                    subscriberEmailError ? "border-red-500" : ""
                  }`}
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="text-black font-bold text-xs anton-font px-4 py-2 bg-lime-400 rounded-full hover:bg-lime-500 transition"
                >
                  Submit
                </button>
              </div>
              {subscriberEmailError && (
                <p className="text-red-500 text-xs mt-1">
                  {subscriberEmailError}
                </p>
              )}
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
              className="text-xs text-gray-600 text-left md:text-right anton-font cursor-pointer"
            >
              <p className="text-xs text-gray-600 anton-font">
                CLICK TO GO UP →<br />
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
