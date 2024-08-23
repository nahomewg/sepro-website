'use client';
import React, { useState } from 'react';
import Button from './Button';
import Loading from '@/app/loading';

const ContactForm = (props: any) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false,
    agreeToPromotions: true,
  });
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data : Record<string, string> = {
        'First Name': formData.firstName,
        'Last Name': formData.lastName,
        'Email': formData.email,
        'Phone': formData.phone,
        'Message': formData.message,
        'Agree To Terms': formData.agreeToTerms ? 'Yes' : 'No',
        'Agree To Promotions': formData.agreeToPromotions ? 'Yes' : 'No',
      }

      const body = JSON.stringify(data);
      const res = await fetch('api/emails', { method: 'POST',
        body: JSON.stringify({
          emailType: 'contact',
          body,
        }),
      });
      setLoading(false);
      if (res.ok) {
        alert('Your submission has been accepted');
      } else {
        alert('Your submission has failed, try again.');
      }
    } catch (error) {
      setLoading(false);
      alert('Your submission has failed, try again.');
    }
  };

  return (
    <section id={props.id} className="flex pb-24 px-10 lg:px-32 xl:px-64 text-white">
      {loading ? (
        <div className='flex justify-center w-full'>
          <Loading />
        </div>
        ) : (
          <>
            <form className="w-full p-8 rounded-xl" onSubmit={handleSubmit}>
              <h1 className="text-4xl font-semibold mb-8">Contact Form</h1>
              <div className="mb-4">
                <input
                  className="w-full p-3 border border-orange rounded-full text-black focus:outline-none focus:border-orange-700"
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  required={true}
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
                  required={true}
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
                  required={true}
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
                  required={true}
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
          </>
        )
      }
    </section>
  );
};

export default ContactForm;
