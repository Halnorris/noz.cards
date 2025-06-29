import { Link } from 'react-router-dom';

interface CardPreviewProps {
  id: string;
  title: string;
  price: number;
  image: string;
  small?: boolean;
}

export default function CardPreview({ id, title, price, image, small }: CardPreviewProps) {
  return (
    <Link to={`/product/${id}`} className="block">
      <div className={`flex-shrink-0 bg-white p-2 rounded shadow hover:shadow-md transition ${small ? 'w-36' : 'w-60'}`}>
        <img
          src={image}
          alt={title}
          className={`${small ? 'h-36' : 'h-60'} w-full object-contain mb-2 bg-white rounded`}
        />
        <div className={`font-medium ${small ? 'text-xs' : 'text-base'} whitespace-normal break-words leading-tight`}>
          {title}
        </div>
        <div className={`${small ? 'text-xs' : 'text-sm'} text-gray-700`}>£{price}</div>
      </div>
    </Link>
  );
}
