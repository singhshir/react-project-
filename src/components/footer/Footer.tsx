import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className="border-t bg-gray-800 text-white">
        
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          
          <p className="text-sm text-gray-300">
          All rights reserved.
          </p>

          {/* Social / Contact Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your-email@example.com"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
          <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-6 py-4">
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="text-gray-600">|</span>

            <Link
              to="/terms-and-conditions"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </footer>
      ```
    </>
  );
}
