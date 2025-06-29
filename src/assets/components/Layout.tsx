import Header from './Header';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] text-[#1A1A1A] font-inter max-w-screen-xl mx-auto">
        <Outlet />
      </main>
      <footer className="bg-[#1A1A1A] text-white p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <form className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <input type="text" placeholder="Your Name" className="w-full p-2 rounded text-black" />
            <input type="email" placeholder="Your Email" className="w-full p-2 rounded text-black" />
            <textarea placeholder="Message" className="w-full p-2 rounded text-black"></textarea>
            <button className="bg-[#007BFF] text-white px-4 py-2 rounded">Send</button>
          </form>
          <div>
            <h4 className="text-lg font-semibold mb-2">Our Policies</h4>
            <ul className="space-y-1">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/consignment-agreement">Consignment Submission Agreement</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
