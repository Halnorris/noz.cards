import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useAuth } from '../../contexts/AuthContext';

export default function LiveCardsPage() {
  const { user } = useAuth();
  const [liveCards, setLiveCards] = useState([]);
  const [priceUpdates, setPriceUpdates] = useState({});

  useEffect(() => {
    const fetchLiveCards = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('status', 'live')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching live cards:', error.message);
      } else {
        setLiveCards(data);
        const initialPrices = {};
        data.forEach((card) => {
          initialPrices[card.id] = card.price;
        });
        setPriceUpdates(initialPrices);
      }
    };

    fetchLiveCards();
  }, [user]);

  const handlePriceChange = (cardId, newPrice) => {
    setPriceUpdates((prev) => ({ ...prev, [cardId]: newPrice }));
  };

  const handleUpdatePrice = async (cardId) => {
    const newPrice = priceUpdates[cardId];
    const { error } = await supabase
      .from('cards')
      .update({ price: newPrice })
      .eq('id', cardId);

    if (error) {
      console.error('Failed to update price:', error.message);
    } else {
      alert('Price updated!');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Live Cards</h2>
      {liveCards.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {liveCards.map((card) => (
            <div key={card.id} className="bg-white rounded shadow p-4 relative">
              <img
                src={card.image_url}
                alt={card.title}
                className="w-full h-48 object-contain rounded"
              />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <input
                type="number"
                value={priceUpdates[card.id] || ''}
                onChange={(e) => handlePriceChange(card.id, e.target.value)}
                className="border p-1 w-full my-2 text-black"
              />
              <button
                onClick={() => handleUpdatePrice(card.id)}
                className="bg-[#006400] text-white w-full py-1 rounded mb-2"
              >
                Update Price
              </button>
              <button
                className="absolute top-2 right-2 text-sm bg-red-600 text-white px-2 py-1 rounded"
              >
                Request Back
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No live cards found.</p>
      )}
    </div>
  );
}
