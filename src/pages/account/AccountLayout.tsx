import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../supabaseClient';

export default function AccountLayout() {
  const { user } = useAuth();
  const [pendingCount, setPendingCount] = useState(0);
  const [liveCount, setLiveCount] = useState(0);
  const [boughtCount, setBoughtCount] = useState(0);

  useEffect(() => {
    if (!user) return;

    const fetchCardCounts = async () => {
      const fetchCount = async (status: string, column = 'status') => {
        const { count, error } = await supabase
          .from('cards')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .eq(column, status);

        if (error) {
          console.error(`Error fetching ${status} cards:`, error.message);
          return 0;
        }

        return count || 0;
      };

      const [pending, live] = await Promise.all([
        fetchCount('pending'),
        fetchCount('live'),
      ]);

      // Bought cards = cards in 'orders' table with buyer_id = user.id
      const { count: bought, error: boughtError } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })
        .eq('buyer_id', user.id);

      if (boughtError) {
        console.error('Error fetching bought cards:', boughtError.message);
      }

      setPendingCount(pending);
      setLiveCount(live);
      setBoughtCount(bought || 0);
    };

    fetchCardCounts();
  }, [user]);

  return (
    <>
      <Header />

      <div className="flex min-h-screen max-w-screen-xl mx-auto">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r p-6 space-y-4">
          <h2 className="text-xl font-bold text-[#006400]">My Account</h2>
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive ? 'text-[#006400] font-semibold' : 'text-gray-700'
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="pending"
              className={({ isActive }) =>
                isActive ? 'text-[#006400] font-semibold' : 'text-gray-700'
              }
            >
              Pending Cards <span className="text-sm text-gray-500">({pendingCount})</span>
            </NavLink>
            <NavLink
              to="live"
              className={({ isActive }) =>
                isActive ? 'text-[#006400] font-semibold' : 'text-gray-700'
              }
            >
              Live Cards <span className="text-sm text-gray-500">({liveCount})</span>
            </NavLink>
            <NavLink
              to="bought"
              className={({ isActive }) =>
                isActive ? 'text-[#006400] font-semibold' : 'text-gray-700'
              }
            >
              Bought Cards <span className="text-sm text-gray-500">({boughtCount})</span>
            </NavLink>
            <NavLink
              to="credit"
              className={({ isActive }) =>
                isActive ? 'text-[#006400] font-semibold' : 'text-gray-700'
              }
            >
              Store Credit
            </NavLink>
            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive ? 'text-[#006400] font-semibold' : 'text-gray-700'
              }
            >
              Account Settings
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-[#F5F5F5]">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}
