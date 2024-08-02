// const ContactForm = (props: any) => {
//   return (
//     <section id={props.id} className="py-48 px-10 lg:px-32 xl:px-64">
//         <h2 className="text-3xl md:text-4xl pb-12 font-bold">Contact Form</h2>

//     </section>
//   )
// }

// export default ContactForm
'use client';
import React, { useState } from 'react';
import Button from './Button';

const ContactForm = (props: any) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false,
    agreeToPromotions: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id={props.id} className="flex pb-48 px-10 lg:px-32 xl:px-64 text-white">
      <form className="w-full p-8 rounded-xl" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-semibold mb-8">Contact Form</h1>
        <div className="mb-4">
          <input
            className="w-full p-3 border border-orange rounded-full text-black focus:outline-none focus:border-orange-700"
            type="text"
            name="firstName"
            placeholder="First Name*"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-3 border border-orange rounded-full text-black focus:outline-none focus:border-orange-700"
            type="text"
            name="lastName"
            placeholder="Last Name*"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-3 border border-orange rounded-full text-black focus:outline-none focus:border-orange-700"
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full p-3 border border-orange rounded-full text-black focus:outline-none focus:border-orange-700"
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full p-3 border border-orange rounded-lg text-black focus:outline-none focus:border-orange-700"
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex items-start">
          <input
            className="mr-2"
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          <label htmlFor="agreeToTerms" className="text-sm">
            I agree to the terms of service, privacy policy, refund policy, subscription, terms, and cookie policy.
          </label>
        </div>
        <div className="mb-8 flex items-start">
          <input
            className="mr-2"
            type="checkbox"
            name="agreeToPromotions"
            checked={formData.agreeToPromotions}
            onChange={handleChange}
          />
          <label htmlFor="agreeToPromotions" className="text-sm">
            I agree to receiving recurring, automated promotional and personalized marketing emails/text messages.
          </label>
        </div>
        <div className='flex justify-center'>
            <Button 
            title='Submit' className="w-full py-3 bg-orange self-center rounded-full text-white font-semibold text-lg focus:outline-none hover:bg-orange"
            type="submit" />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
