import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function ProductPage() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCard = async () => {
      const { data, error } = await supabase
        .from('cards')
        .select('*')
        .eq('id', id)
        .single();

      if (!error) {
        setCard(data);
        setMainImage(data.image_url);
      } else {
        console.error('Error fetching card:', error.message);
      }
    };

    fetchCard();
  }, [id]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const zoom = zoomRef.current;
    const lens = lensRef.current;
    if (!zoom || !lens || !mainImage) return;

    const bounds = zoom.getBoundingClientRect();
    const lensSize = 200;
    const zoomFactor = 3;

    // Get mouse position relative to image
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;

    // Clamp lens position within image
    x = Math.max(0, Math.min(x, bounds.width));
    y = Math.max(0, Math.min(y, bounds.height));

    lens.style.left = `${x - lensSize / 2}px`;
    lens.style.top = `${y - lensSize / 2}px`;
    lens.style.backgroundImage = `url(${mainImage})`;
    lens.style.backgroundSize = `${bounds.width * zoomFactor}px ${bounds.height * zoomFactor}px`;
    lens.style.backgroundPosition = `-${x * zoomFactor - lensSize / 2}px -${y * zoomFactor - lensSize / 2}px`;
  };

  if (!card) {
    return <div className="text-center py-10 text-lg">Loading card details...</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Image Viewer */}
        <div className="flex flex-col gap-4 items-center relative">
          <div
            className="relative w-full max-h-[500px] bg-white rounded shadow"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              if (lensRef.current) lensRef.current.style.display = 'none';
            }}
            onMouseEnter={() => {
              if (lensRef.current) lensRef.current.style.display = 'block';
            }}
            ref={zoomRef}
          >
            <img
              src={mainImage || card.image_url}
              alt={card.title}
              className="w-full object-contain max-h-[500px]"
            />
            <div
              ref={lensRef}
              style={{
                position: 'absolute',
                border: '1px solid #000',
                width: '200px',
                height: '200px',
                pointerEvents: 'none',
                display: 'none',
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%',
                boxShadow: '0 0 8px rgba(0,0,0,0.5)',
                zIndex: 20,
              }}
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-2">
            <img
              src={card.image_url}
              alt="Front"
              className="w-20 h-28 object-contain border cursor-pointer rounded shadow-sm hover:shadow-md"
              onClick={() => setMainImage(card.image_url)}
            />
            {card.card_back && (
              <img
                src={card.card_back}
                alt="Back"
                className="w-20 h-28 object-contain border cursor-pointer rounded shadow-sm hover:shadow-md"
                onClick={() => setMainImage(card.card_back)}
              />
            )}
          </div>
        </div>

        {/* Card Info */}
        <div className="space-y-4 text-[#1A1A1A]">
          <h1 className="text-3xl font-bold leading-tight break-words">{card.title}</h1>
          <p className="text-2xl text-green-700 font-semibold">£{card.price}</p>

          <div className="text-sm space-y-1">
            {card.team && <p><strong>Team:</strong> {card.team}</p>}
            {card.year && <p><strong>Year:</strong> {card.year}</p>}
            {card.set && <p><strong>Set:</strong> {card.set}</p>}
            {card.category && <p><strong>Category:</strong> {card.category}</p>}
          </div>

          <button className="mt-6 bg-[#007BFF] text-white px-6 py-3 rounded font-semibold hover:bg-blue-600">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
