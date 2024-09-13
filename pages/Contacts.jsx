import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Batman from '../models/Batman'; // Ensure the path is correct

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const dialogRef = useRef(null);

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setShowForm(false); // Hide the form
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        );
        setForm({ name: '', email: '', message: '' });
        setShowSuccessDialog(true);
      } catch (error) {
        console.log('Error sending email:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCloseDialog = () => {
    setShowSuccessDialog(false);
    setShowForm(true); // Show the form again
  };

  return (
    <section className="contact-page-container flex flex-col lg:flex-row max-w-4xl mx-auto p-6 lg:gap-12 mt-24 relative">
      {/* Contact Form */}
      {showForm && (
        <div className="flex-1 lg:w-1/2 mt-12 lg:mt-0 flex items-center justify-center">
          <div className="contact-form-container bg-gradient-to-r from-purple-600 to-indigo-500 p-6 lg:p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br max-w-md w-full">
            <form ref={formRef} className="w-full flex flex-col gap-6 lg:gap-8" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="block text-lg lg:text-xl font-semibold text-white mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-field w-full px-4 py-3 border rounded-lg shadow-sm bg-white text-gray-800"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
              </div>

              <div className="form-group">
                <label className="block text-lg lg:text-xl font-semibold text-white mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-field w-full px-4 py-3 border rounded-lg shadow-sm bg-white text-gray-800"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
              </div>

              <div className="form-group">
                <label className="block text-lg lg:text-xl font-semibold text-white mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="input-field w-full px-4 py-3 border rounded-lg shadow-sm bg-white text-gray-800"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 mt-1 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="submit-btn bg-blue-500 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3D Batman Model and Success Dialog */}
      {showSuccessDialog && (
        <div className="flex-1 lg:w-1/2 flex items-center justify-center relative">
          <div className="relative w-full h-80 lg:h-[600px]">
            <Canvas
              style={{ width: '100%', height: '100%' }}
              camera={{ position: [0, 2, 5], fov: 50 }}
            >
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} />
              <Batman form={form} />
            </Canvas>

            {/* Success Dialog */}
            <div
              ref={dialogRef}
              className="success-dialog absolute bg-white p-4 rounded-lg shadow-lg max-w-sm w-full"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                margin: '20px', // Add margin to create space around the popup
                padding: '20px',
              }}
            >
              <p className="text-lg font-semibold">Thanks! I'll get back to you soon.</p>
              <button
                onClick={handleCloseDialog}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
