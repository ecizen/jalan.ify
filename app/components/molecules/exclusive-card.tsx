'use client'
import { useState } from "react";
import { Mail } from "lucide-react";

export default function TravelPromoCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <div className="flex justify-center items-center px-4 lg:py-10 lg:mb-0 mb-20">
      <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700">
        <div className="flex items-center mb-4 space-x-2">
          <Mail className="text-blue-600 w-5 h-5" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            ✈️ Save up to <span className="text-blue-600 font-bold">50%</span> on travel!
          </h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Subscribe to receive exclusive travel deals, insider tips, and updates!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 dark:bg-zinc-800 dark:border-zinc-600 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
