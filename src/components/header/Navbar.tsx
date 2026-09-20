import { Link } from "react-router";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-2 bg-amber-300">
      
      {/* Logo */}
      <div className="flex items">
        <Link to='/'>
        <img src="/logo.png" alt="" className="size-15"/>
        </Link>
      </div>

      {/* Search */}
      <div className="flex-1 flex justify-center px-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md rounded-lg border px-4 py-2 outline-none bg-white"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-5">
        <a href="/contact">Contact</a>

        <button
          type="button"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Send Enquiry
        </button>
      </div>

    </nav>
  );
}