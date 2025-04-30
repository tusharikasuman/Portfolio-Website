import React from 'react';
import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl italic font-fancy text-violet-400 drop-shadow-sm">
  Contact</h1>

      <div className="flex flex-col items-center gap-6 text-neutral-400 text-lg">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Address:</span>
          <span>{CONTACT.address}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Phone:</span>
          <span>{CONTACT.phoneNo}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Email:</span>
          <span>{CONTACT.email}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
