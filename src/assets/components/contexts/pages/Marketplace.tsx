import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useLocation } from 'react-router-dom';
import CardPreview from '../components/CardPreview';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Marketplace() {
  const query = useQuery();
  const searchTerm = query.get('search')?.toLowerCase() || '';
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    team: [],
    year: [],
    set: [],
  });
  const [sortBy, setSortBy] = useState('');

  const priceRanges = [
    { label: '0 - 5', min: 0, max: 5 },
    { label: '5 - 10', min: 5, max: 10 },
    { label: '10 - 25', min: 10, max: 25 },
    { label: '25 - 50', min: 25, max: 50 },
    { label: '50 - 100', min: 50, max: 100 },
    { label: '100+', min: 100, max: Infinity },
  ];

  useEffect(() => {
    const fetchCards = async () => {
      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('status', 'live');

      if (error) {
        console.error('Error fetching cards:', error.message);
      } else {
        setCards(data);
      }
    };

    fetchCards();
  }, []);

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const exists =
        type === 'price'
          ? prev[type].some((r) => r.label === value.label)
          : prev[type].includes(value);

      const newValues = exists
        ? type === 'price'
          ? prev[type].filter((r) => r.label !== value.label)
          : prev[type].filter((v) => v !== value)
        : [...prev[type], value];

      return { ...prev, [type]: newValues };
    });
  };

  const resetFilters = () => {
    setFilters({ category: [], price: [], team: [], year: [], set: [] });
    setSortBy('');
  };

  const filteredCards = cards
    .filter((card) => card.title.toLowerCase().includes(searchTerm))
    .filter((card) =>
      filters.category.length ? filters.category.includes(card.category) : true
    )
    .filter((card) =>
      filters.team.length ? filters.team.includes(card.team) : true
    )
    .filter((card) =>
      filters.year.length ? filters.year.includes(card.year) : true
    )
    .filter((card) =>
      filters.set.length ? filters.set.includes(card.set) : true
    )
    .filter((card) => {
      if (!filters.price.length) return true;
      return filters.price.some(
        (range) => card.price >= range.min && card.price < range.max
      );
    });

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'date')
      return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    return 0;
  });

  const uniqueValues = (key) =>
    [...new Set(cards.map((card) => card[key]).filter(Boolean))].sort();

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        Marketplace ({filteredCards.length} cards)
      </h2>
      <div className="flex">
        {/* Filters */}
        <aside className="w-64 p-4 border-r space-y-4">
          {/* Sort By */}
          <div>
            <label className="block font-semibold mb-1">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border rounded p-1"
            >
              <option value="">Default</option>
              <option value="price">Price: Low to High</option>
              <option value="date">Listing: Oldest to Newest</option>
            </select>
          </div>

          {/* Dynamic Filters */}
          {['category', 'team', 'year', 'set'].map((type) => (
            <div key={type}>
              <h4 className="font-semibold capitalize mb-1">{type}</h4>
              {uniqueValues(type).map((val) => (
                <label key={val} className="block text-sm">
                  <input
                    type="checkbox"
                    checked={filters[type].includes(val)}
                    onChange={() => toggleFilter(type, val)}
                    className="mr-2"
                  />
                  {val}
                </label>
              ))}
            </div>
          ))}

          {/* Price Filter */}
          <div>
            <h4 className="font-semibold mb-1">Price</h4>
            {priceRanges.map((range) => (
              <label key={range.label} className="block text-sm">
                <input
                  type="checkbox"
                  checked={filters.price.some((r) => r.label === range.label)}
                  onChange={() => toggleFilter('price', range)}
                  className="mr-2"
                />
                {range.label}
              </label>
            ))}
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="mt-4 bg-[#007BFF] text-white px-3 py-1 rounded"
          >
            Reset Filters
          </button>
        </aside>

        {/* Cards Grid */}
        <div className="flex-grow p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {sortedCards.length > 0 ? (
            sortedCards.map((card) => (
              <CardPreview
                key={card.id}
                id={card.id}
                title={card.title}
                price={card.price}
                image={card.image_url}
                small
              />
            ))
          ) : (
            <p className="text-gray-500">No cards found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
