// Header.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { User } from 'lucide-react';
import { supabase } from '../supabaseClient';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setDropdownOpen(false);
    navigate('/');
  };

  return (
    <header className="bg-white shadow px-6 py-4 text-[#1A1A1A]">
      <div className="max-w-screen-xl mx-auto flex flex-col space-y-4 relative">
        {/* Top Row: Title and Account Icon */}
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold font-montserrat mx-auto">
            <Link to="/">Noz Cards</Link>
          </div>

          {/* Account Icon */}
          <div className="absolute right-6 top-0 flex items-center gap-4">
            <div className="relative">
              <button
                className="w-10 h-10 rounded-full bg-[#006400] flex items-center justify-center text-white"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <User size={20} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded z-50 text-sm overflow-hidden">
                  <Link
                    to="/account/home"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Account Home
                  </Link>
                  <Link
                    to="/account/pending"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Pending Cards
                  </Link>
                  <Link
                    to="/account/live"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Live Cards
                  </Link>
                  <Link
                    to="/account/consignments"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Consignments
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-md mx-auto flex">
          <input
            type="text"
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l text-lg bg-white text-black"
          />
          <button
            type="submit"
            className="bg-[#007BFF] text-white px-4 py-2 rounded-r text-lg font-semibold"
          >
            Search
          </button>
        </form>

        {/* Navigation */}
        <nav className="mx-auto space-x-6 text-lg">
          <Link to="/">Home</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/account/consignments">Consignments</Link>
          <Link to="/how-it-works">How It Works</Link>
        </nav>
      </div>
    </header>
  );
}
