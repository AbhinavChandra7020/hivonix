import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    university: '',
    message: '',
  });

  const { name, email, phone, role, university, message } = data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwSwUOSIMzGRUbYMgcV2AS_ybtp-4veqYf8bjq-WUprI1bppZCFW3_pdhAEVu8khyM/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // NOTE: This will avoid CORS preflight error but also gives you no response object to inspect.
          mode: 'no-cors',
          body: JSON.stringify({ name, email, phone, role, university, message }),
        }
      );

      // Since no-cors mode doesn’t give you a real response, we optimistically assume success
      alert('Message sent successfully!');
      setData({
        name: '',
        email: '',
        phone: '',
        role: '',
        university: '',
        message: '',
      });
    } catch (err) {
      console.log(err);
      alert('Something went wrong while sending your message.');
    }
  };

  return (
    <section className="mt-24 mb-16">
      <div className="bg-black p-8 rounded-lg shadow-md border border-blue-900 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white text-opacity-80 mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border-2 border-blue-900 focus:outline-none focus:border-blue-500 bg-black text-white"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-white text-opacity-80 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-md border-2 border-blue-900 focus:outline-none focus:border-blue-500 bg-black text-white"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-white text-opacity-80 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="123-456-7890"
              className="w-full px-4 py-2 rounded-md border-2 border-blue-900 focus:outline-none focus:border-blue-500 bg-black text-white"
              value={phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-white text-opacity-80 mb-2">Role</label>
            <select
              name="role"
              className="w-full px-4 py-2 rounded-md border-2 border-blue-900 focus:outline-none focus:border-blue-500 bg-black text-white"
              value={role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <div>
            <label className="block text-white text-opacity-80 mb-2">University Name</label>
            <input
              type="text"
              name="university"
              placeholder="Your University"
              className="w-full px-4 py-2 rounded-md border-2 border-blue-900 focus:outline-none focus:border-blue-500 bg-black text-white"
              value={university}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-white text-opacity-80 mb-2">
              Additional Requests / Message
            </label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows={4}
              className="w-full px-4 py-2 rounded-md border-2 border-blue-900 focus:outline-none focus:border-blue-500 bg-black text-white"
              value={message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
