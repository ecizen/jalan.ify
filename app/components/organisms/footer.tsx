export default function TravelFooter() {
  return (
    <footer className="hidden lg:block bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-4">jalan.ify</h2>
          <p className="text-sm">
            Explore the world with unbeatable travel deals, expert guides, and unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Destinations</a></li>
            <li><a href="#" className="hover:text-blue-600">Deals</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-md font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600">Customer Service</a></li>
            <li><a href="#" className="hover:text-blue-600">Travel Insurance</a></li>
            <li><a href="#" className="hover:text-blue-600">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-md font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-2">Subscribe for special deals and travel tips.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-lg border text-sm dark:bg-zinc-800 dark:border-zinc-700"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Jalan.ify. All rights reserved.
      </div>
    </footer>
  );
}
