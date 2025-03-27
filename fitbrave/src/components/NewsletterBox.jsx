import React from 'react';

function NewsletterBox() {
    const onSubmitHandler = () =>{
        const onSubmitHandler = (event) =>{
            event.preventDefault();
        }
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-black mb-3">Subscribe now and get 20% off</p>
      <p className="text-gray-400 mt-3">Stay updated with our latest news and offers.</p>

      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input type="email" className="w-full sm:flex-1 outline-none p-2" placeholder="Enter your email" required />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4 rounded-l-2xl shadow-red-900">SUBSCRIBE</button>
        
      </form>
    </div>
  );
}

export default NewsletterBox;
