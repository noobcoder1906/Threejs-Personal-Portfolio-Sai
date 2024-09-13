import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ThreeAnimation from '../Components/ThreeAnimation'; // Ensure the path is correct
import ScrollPercentage from '../Components/ScrollPercentage'; // Ensure the path is correct

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const [showContactForm, setShowContactForm] = useState(false); // State to show contact form
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const validateForm = () => {
    let formErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!form.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!form.email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!form.message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setShowPopup(true); // Show popup when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: 'Sai',
            from_email: form.email,
            to_email: 'saisabarish.h2004@gmail.com',
            message: form.message
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        );
        alert('Form submitted successfully');
        setForm({ name: '', email: '', message: '' });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollTotal = docHeight - winHeight;
      const scrollPercent = (scrollTop / scrollTotal) * 100;

      setScrollPercentage(Math.min(Math.max(scrollPercent, 0), 100));

      if (scrollPercent >= 100) {
        setShowContactForm(true); // Show the contact form when user scrolls to the bottom
      }
    };

    window.addEventListener('scroll', updateScrollPercentage);

    return () => window.removeEventListener('scroll', updateScrollPercentage);
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row max-w-4xl mx-auto p-6 lg:gap-12 mt-24">
      {/* Scroll Percentage component */}
      <ScrollPercentage />

      {/* Heading positioned above the form */}
      <div className="w-full text-center mb-12">
        {showPopup && (
          <div className="fixed bottom-4 right-4 bg-yellow-300 text-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-center font-semibold">
              Thanks for reaching out, continue to fill your details
            </p>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-[50%] mt-12 lg:mt-0">
        <div className={`bg-gradient-to-r from-purple-600 to-indigo-500 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br ${showContactForm ? 'block' : 'hidden'}`}>
          {/* Scrollable form container */}
          <div className="max-h-[500px] overflow-y-auto p-2">
            <form className="w-full flex flex-col gap-8" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="block text-lg font-semibold text-white mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label className="block text-lg font-semibold text-white mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label className="block text-lg font-semibold text-white mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg shadow-sm bg-white text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg shadow-lg text-white font-bold tracking-wide text-lg transform transition-transform ${
                  isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
                } ${isLoading ? '' : 'hover:-translate-y-1 active:translate-y-0 active:shadow-sm'}`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:h-[auto] md:h-[550px] h-[350px] mt-12 lg:mt-0">
        <ThreeAnimation form={form} />
      </div>
    </section>
  );
};

export default Contact;
