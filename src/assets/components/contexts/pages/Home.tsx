import { useEffect, useRef, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import CardPreview from '../components/CardPreview';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Home() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [recentCards, setRecentCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const scrollRefFeatured = useRef(null);
  const scrollRefRecent = useRef(null);

  useEffect(() => {
    const fetchFeaturedCards = async () => {
      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('status', 'live')
        .eq('featured', true);

      if (error) console.error('Error fetching featured cards:', error.message);
      else setFeaturedCards(data);
    };

    const fetchRecentCards = async () => {
      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('status', 'live')
        .order('created_at', { ascending: false })
        .limit(15);

      if (error) console.error('Error fetching recent cards:', error.message);
      else setRecentCards(data);
    };

    fetchFeaturedCards();
    fetchRecentCards();
  }, []);

  const scrollLeft = (ref) => ref.current?.scrollBy({ left: -300, behavior: 'smooth' });
  const scrollRight = (ref) => ref.current?.scrollBy({ left: 300, behavior: 'smooth' });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/marketplace?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <>
      {/* Slogan Section at the Top */}
      <section className="text-center p-10 bg-white text-2xl font-bold">
        Ideal for Sellers, Perfect for Buyers
      </section>

      {/* Featured Cards */}
      <section className="p-6">
        <h2 className="text-xl font-bold mb-4">Featured Cards</h2>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            onClick={() => scrollLeft(scrollRefFeatured)}
          >
            <ChevronLeft />
          </button>
          <div
            className="flex overflow-x-auto gap-4 p-1 scroll-smooth scrollbar-hide"
            ref={scrollRefFeatured}
          >
            {featuredCards.length > 0 ? (
              featuredCards.map((card) => (
                <CardPreview key={card.id} id={card.id} title={card.title} price={card.price} image={card.image_url} />
              ))
            ) : (
              <p className="text-gray-500">No featured cards found.</p>
            )}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            onClick={() => scrollRight(scrollRefFeatured)}
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Buyer & Seller Sections */}
      <section className="grid md:grid-cols-2 gap-6 p-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">For Buyers</h3>
          <p className="mb-4">Easily browse and purchase trading cards in one place.</p>
          <Link to="/marketplace">
            <button className="bg-[#006400] text-white px-4 py-2 rounded">Start Buying</button>
          </Link>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">For Sellers</h3>
          <p className="mb-4">Submit your cards and let us handle the rest — scanning, listing, shipping.</p>
          <button className="bg-[#006400] text-white px-4 py-2 rounded">Start Selling</button>
        </div>
      </section>

      {/* How It Works */}
      <section className="text-center p-10 bg-white">
        <h3 className="text-2xl font-bold mb-4">How It Works</h3>
        <p className="mb-4">From submission to sale, we handle every step so you can sit back and profit.</p>
        <Link to="/how-it-works">
          <button className="bg-[#E1B80D] text-black px-6 py-3 rounded text-lg font-semibold">Learn More</button>
        </Link>
      </section>

      {/* Recently Added Cards */}
      <section className="p-6">
        <h2 className="text-xl font-bold mb-4">Recently Added</h2>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            onClick={() => scrollLeft(scrollRefRecent)}
          >
            <ChevronLeft />
          </button>
          <div
            className="flex overflow-x-auto gap-4 p-1 scroll-smooth scrollbar-hide"
            ref={scrollRefRecent}
          >
            {recentCards.length > 0 ? (
              recentCards.map((card) => (
                <CardPreview key={card.id} id={card.id} title={card.title} price={card.price} image={card.image_url} />
              ))
            ) : (
              <p className="text-gray-500">No recently added cards found.</p>
            )}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10"
            onClick={() => scrollRight(scrollRefRecent)}
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Sign Up CTA */}
      <section className="text-center p-10">
        <h3 className="text-2xl font-bold mb-4">Create Your Account Now</h3>
        <Link to="/login">
          <button className="bg-[#007BFF] text-white px-6 py-3 rounded text-lg">Sign Up</button>
        </Link>
      </section>
    </>
  );
}

export default Home;
