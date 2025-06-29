import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useAuth } from '../../contexts/AuthContext';

export default function PendingCardsPage() {
  const { user } = useAuth();
  const [pendingCards, setPendingCards] = useState([]);
  const [priceInputs, setPriceInputs] = useState({});

  useEffect(() => {
    const fetchPendingCards = async () => {
      if (!user) {
        console.log('No user logged in');
        return;
      }

      console.log('Logged in user ID:', user.id);

      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('status', 'pending')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching pending cards:', error.message);
      } else {
        console.log('Fetched pending cards:', data);
        setPendingCards(data);
      }
    };

    fetchPendingCards();
  }, [user]);

  const handlePriceChange = (cardId, value) => {
    setPriceInputs((prev) => ({ ...prev, [cardId]: value }));
  };

  const handleAddToCart = (cardId) => {
    const price = priceInputs[cardId];
    console.log('Adding to cart:', { cardId, price });
    // TODO: Implement cart logic later
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pending Cards</h2>
      {pendingCards.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pendingCards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-4 rounded shadow flex flex-col items-center"
            >
              <img
                src={card.image_url}
                alt={card.title}
                className="w-full h-48 object-contain mb-2"
              />
              <h3 className="text-md font-semibold text-center mb-2">
                {card.title}
              </h3>
              <input
                type="number"
                placeholder="Set Price (£)"
                className="w-full px-2 py-1 border rounded mb-2"
                value={priceInputs[card.id] || ''}
                onChange={(e) => handlePriceChange(card.id, e.target.value)}
              />
              <button
                onClick={() => handleAddToCart(card.id)}
                className="w-full bg-[#006400] text-white py-2 px-4 rounded text-sm"
              >
                Confirm
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No pending cards found.</p>
      )}
    </div>
  );
}
