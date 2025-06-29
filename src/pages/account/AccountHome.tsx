import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { useAuth } from '../../contexts/AuthContext';

export default function DashboardPage() {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState({
    name: 'Loading...',
    email: '',
    address: '',
  });

  const [cardStats, setCardStats] = useState({
    pending: 0,
    live: 0,
    bought: 0,
    sold: 0,
    lastSold: {
      title: 'N/A',
      price: 0,
    },
  });

  useEffect(() => {
    const fetchStats = async () => {
      if (!user) return;

      // ✅ 1. Fetch name and address from the users table
      const { data: userRow, error: userError } = await supabase
        .from('users')
        .select('name, address')
        .eq('user_id', user.id)
        .single();

      if (userError) {
        console.error('Error fetching user info:', userError.message);
      }

      // ✅ 2. Set user info
      setUserInfo({
        name: userRow?.name || 'No Name',
        email: user.email,
        address: userRow?.address || 'No Address Provided',
      });

      // ✅ 3. Count cards by status
      const fetchCount = async (status: string) => {
        const { count, error } = await supabase
          .from('cards')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .eq('status', status);

        if (error) {
          console.error(`Error fetching ${status} count:`, error.message);
          return 0;
        }

        return count || 0;
      };

      const [pending, live] = await Promise.all([
        fetchCount('pending'),
        fetchCount('live'),
      ]);

      // ✅ 4. Count bought cards from orders table
      const { count: boughtCount } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })
        .eq('buyer_id', user.id);

      // ✅ 5. Fetch sold cards
      const { data: soldCards, error: soldError } = await supabase
        .from('orders')
        .select('*, cards!inner(title, price, user_id)')
        .eq('cards.user_id', user.id);

      if (soldError) {
        console.error('Error fetching sold cards:', soldError.message);
      }

      const sold = soldCards?.length || 0;
      const lastSold = soldCards?.[0]?.cards || { title: 'N/A', price: 0 };

      setCardStats({
        pending,
        live,
        bought: boughtCount || 0,
        sold,
        lastSold,
      });
    };

    fetchStats();
  }, [user]);

  return (
    <div className="space-y-8">
      {/* User Info */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Welcome back, {userInfo.name}!</h2>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Address:</strong> {userInfo.address}</p>
      </section>

      {/* Card Summary */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold text-[#006400]">Pending Cards</h3>
          <p className="text-3xl font-bold mt-2">{cardStats.pending}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold text-[#006400]">Live Cards</h3>
          <p className="text-3xl font-bold mt-2">{cardStats.live}</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold text-[#006400]">Bought Cards</h3>
          <p className="text-3xl font-bold mt-2">{cardStats.bought}</p>
        </div>
      </section>

      {/* Sales Stats */}
      <section className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Sales Summary</h3>
        <p><strong>Total Cards Sold:</strong> {cardStats.sold}</p>
        <p><strong>Last Card Sold:</strong> {cardStats.lastSold.title} for £{cardStats.lastSold.price?.toFixed(2)}</p>
      </section>

      {/* CTA Buttons */}
      <section className="flex gap-4">
        <Link to="/account/submit">
          <button className="bg-[#006400] text-white px-6 py-3 rounded font-semibold">
            Submit New Cards
          </button>
        </Link>
        <Link to="/account/credit">
          <button className="bg-[#E1B80D] text-black px-6 py-3 rounded font-semibold">
            Add Credit
          </button>
        </Link>
      </section>
    </div>
  );
}
