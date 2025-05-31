import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Lottie from "lottie-react";
import feedbackAnimation from "../../assets/FeedbackAnimation.json"; 

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
  };

  return (
    <section className="bg-[#1a1c2c] text-white w-full py-16 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
      {/* Left Animation Column */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Lottie
          animationData={feedbackAnimation}
          loop={true}
          className="w-full h-auto md:h-[400px]"
        />
      </div>
  
      {/* Right Form Column */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-400 mb-8 text-center md:text-left">
          We’d love your feedback ✨
        </h2>
  
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
  
          {/* Rating */}
          <div>
            <label className="block mb-3 text-sm font-medium">Rate your experience</label>
            <div className="flex space-x-2">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={ratingValue}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      className="hidden"
                    />
                    <FaStar
                      size={28}
                      className={`cursor-pointer transition ${
                        ratingValue <= (hover || rating)
                          ? "text-yellow-400"
                          : "text-gray-500"
                      }`}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
  
          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium">Your Feedback</label>
            <textarea
              required
              rows="4"
              placeholder="Share your thoughts..."
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
  
          {/* Submit */}
          <div className="text-center md:text-left">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium transition duration-200 shadow-md"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>  
  );
}
