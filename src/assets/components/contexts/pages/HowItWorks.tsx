import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PackageCheck, PackagePlus, CreditCard, Truck, ShoppingCart, HeartHandshake } from 'lucide-react';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'selling' | 'buying'>('selling');

  return (
    <div className="max-w-screen-xl mx-auto p-6 text-[#1A1A1A]">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold font-montserrat mb-2">How Noz Cards Works</h1>
        <p className="text-lg">From submission to sale, we handle it all so you don’t have to.</p>
      </section>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-8 mb-8">
        <button
          className={`text-lg font-semibold pb-2 border-b-2 ${activeTab === 'selling' ? 'border-[#007BFF]' : 'border-transparent'}`}
          onClick={() => setActiveTab('selling')}
        >
          Selling
        </button>
        <button
          className={`text-lg font-semibold pb-2 border-b-2 ${activeTab === 'buying' ? 'border-[#007BFF]' : 'border-transparent'}`}
          onClick={() => setActiveTab('buying')}
        >
          Buying
        </button>
      </div>

      {activeTab === 'selling' && (
        <>
          {/* Icon Section */}
          <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
            <div>
              <div className="text-4xl mb-2">📨</div>
              <p className="font-semibold">Submit Your Form</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📦</div>
              <p className="font-semibold">Ship Your Cards</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💰</div>
              <p className="font-semibold">Set Your Price</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🛠️</div>
              <p className="font-semibold">We Do The Rest</p>
            </div>
          </section>

          {/* Steps Section */}
          <section className="space-y-4 max-w-3xl mx-auto text-left">
            <div>
              <div className="flex items-start mb-2">
                <div className="bg-[#007BFF] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</div>
                <h3 className="font-bold">Submit Your Consignment Request</h3>
              </div>
              <ul className="list-disc pl-9 text-sm text-gray-700">
                <li>Fill out our Consignment Submission Form and tell us how many cards you’d like to send in.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-start mb-2">
                <div className="bg-[#007BFF] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</div>
                <h3 className="font-bold">Ship Your Cards to Us</h3>
              </div>
              <ul className="list-disc pl-9 text-sm text-gray-700">
                <li>Once approved, you’ll send your cards to our address.</li>
                <li>All cards must arrive in a sleeve and top loader.</li>
                <li>If you don’t use sleeves or top loaders, we’ll supply them at a small fee of 1p per sleeve and 3p per top loader.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-start mb-2">
                <div className="bg-[#007BFF] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</div>
                <h3 className="font-bold">We Scan & Upload Your Cards</h3>
              </div>
              <ul className="list-disc pl-9 text-sm text-gray-700">
                <li>We’ll professionally scan your cards, upload them to your account, and let you set your own prices.</li>
                <li>Once you pay the listing fee (see below), your cards will go live for sale.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-start mb-2">
                <div className="bg-[#007BFF] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</div>
                <h3 className="font-bold">Earn Store Credit (or Cash Out Later)</h3>
              </div>
              <ul className="list-disc pl-9 text-sm text-gray-700">
                <li>You’ll receive store credit equal to the sale price, minus a 5% seller’s fee.</li>
                <li>Use your credit to buy other cards, or cash out for a 15% withdrawal fee.</li>
              </ul>
            </div>
          </section>

          {/* Pricing Table */}
          <section className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Listing Fees</h3>
            <table className="w-full table-auto border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Level</th>
                  <th className="border px-4 py-2 text-left">Fee Per Card</th>
                  <th className="border px-4 py-2 text-left">Upload Turnaround</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-4 py-2">Bronze</td><td className="border px-4 py-2">£0.25</td><td className="border px-4 py-2">16–20 weeks</td></tr>
                <tr><td className="border px-4 py-2">Silver</td><td className="border px-4 py-2">£0.50</td><td className="border px-4 py-2">8–12 weeks</td></tr>
                <tr><td className="border px-4 py-2">Gold</td><td className="border px-4 py-2">£1.00</td><td className="border px-4 py-2">4 weeks</td></tr>
                <tr><td className="border px-4 py-2">Platinum</td><td className="border px-4 py-2">£3.00</td><td className="border px-4 py-2">2 weeks</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-sm italic">👉 Listing fees are per card and must be paid before cards go live.</p>
          </section>

          {/* Benefits List */}
          <section className="mt-12 max-w-3xl mx-auto space-y-2 text-sm">
            <div className="flex items-start">
              <span className="text-green-600 mr-2">✅</span>
              <p>We Do the Hard Work – No more scanning, listing, or shipping!</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-2">✅</span>
              <p>Clear Your Space – Free up storage without the hassle.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-2">✅</span>
              <p>Earn Store Credit – Use credit from sales to buy more cards!</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-2">✅</span>
              <p>Flexible Payout Options – Withdraw your credit for a cash payout.</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 mr-2">✅</span>
              <p>Hassle-Free Selling – We handle everything, so you don’t have to.</p>
            </div>
          </section>

          {/* Submission Button */}
          <div className="mt-8 text-center">
            <Link to="/account/submit" className="bg-[#006400] text-white px-6 py-3 rounded text-lg">
              Submit Your Consignment
            </Link>
          </div>
        </>
      )}

      {activeTab === 'buying' && (
        <>
          {/* Icon Section */}
          <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
            <div>
              <div className="text-4xl mb-2">🛒</div>
              <p className="font-semibold">Browse Marketplace</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💳</div>
              <p className="font-semibold">Buy Instantly</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📦</div>
              <p className="font-semibold">Hold Your Cards</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📬</div>
              <p className="font-semibold">Ship Everything Together</p>
            </div>
          </section>

          {/* Steps Section */}
          <section className="space-y-4 max-w-3xl mx-auto text-left">
            <div>
              <div className="flex items-start mb-2">
                <div className="bg-[#007BFF] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</div>
                <h3 className="font-bold">Browse the Marketplace</h3>
              </div>
              <ul className="list-disc pl-9 text-sm text-gray-700">
                <li>Discover hundreds of football cards all in one place.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-start mb-2">
                <div className="bg-[#007BFF] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</div>
                <h3 className="font-bold">Add to Your Collection</h3>
              </div>
              <ul className="list-disc pl-9 text-sm text-gray-700">
                <li>Instantly buy cards using your credit.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-start mb-2">
                <div className="bg-[#007BFF] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</div>
                <h3 className="font-bold">We Hold Your Cards</h3>
              </div>
              <ul className="list-disc pl-9 text-sm text-gray-700">
                <li>We safely store everything you buy until you’re ready to receive them.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-start mb-2">
                <div className="bg-[#007BFF] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</div>
                <h3 className="font-bold">Ship Everything Together</h3>
              </div>
              <ul className="list-disc pl-9 text-sm text-gray-700">
                <li>Request shipment of you cards and pay shipping once.</li>
              </ul>
            </div>
          </section>

          {/*CTA*/}
          <div className="text-center mt-6">
            <Link to="/marketplace">
              <button className="bg-[#006400] text-white px-6 py-3 rounded text-lg font-semibold shadow">
                Start Buying
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
