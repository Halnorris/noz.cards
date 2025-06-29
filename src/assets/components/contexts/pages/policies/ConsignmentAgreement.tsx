export default function ConsignmentAgreementPage() {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-10 text-[#1A1A1A] space-y-6">
      <h1 className="text-3xl font-bold mb-6">Consignment Submission Agreement</h1>

      <p><strong>Parties</strong></p>
      <p>
        This Consignment Agreement ("Agreement") is entered into between:
        <br />
        Noz Cards ("The Marketplace", "We", or "Us"), and
        <br />
        The individual submitting a consignment ("The Seller", "You").
      </p>
      <p>
        By submitting your consignment through our online form, you agree to the following terms:
      </p>

      <h2 className="text-xl font-semibold">Consignment Process</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>The Seller submits card(s) for approval via the Marketplace's online consignment form.</li>
        <li>The Marketplace reviews and may approve or reject any consignment at its sole discretion.</li>
        <li>Upon approval, the Seller agrees to ship the approved card(s) to the Marketplace's designated address.</li>
        <li>Cards must be shipped in individual sleeves and toploaders. Failure to do so will incur an extra charge of 1p per sleeve and 3p per toploader.</li>
        <li>The Marketplace will scan, list, and manage the sale of approved consigned cards on the website.</li>
      </ul>

      <h2 className="text-xl font-semibold">Pricing & Listing Fees</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>The Seller sets the sale price for each card once added to their inventory.</li>
        <li>A listing fee per card will apply based on the submission level chosen.</li>
        <li>The listing fee is non-refundable and must be paid before the card goes live.</li>
        <li>Cards without a price after 2 months will incur a 50p fee every 5 business days thereafter.</li>
        <li>Live cards unsold after 3 months will incur a 5p monthly fee ongoing.</li>
      </ul>

      <h2 className="text-xl font-semibold">Sales & Commissions</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>When a card sells, the Seller receives store credit minus a 5% commission.</li>
        <li>Store credit may be used to buy cards or redeemed as a cash payout upon request.</li>
        <li>Withdrawals incur a 15% fee, up to and including £1,000.</li>
      </ul>

      <h2 className="text-xl font-semibold">Ownership & Responsibility</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>The Seller retains ownership until the card is sold.</li>
        <li>The Marketplace is not responsible for damage/loss during shipping to us.</li>
        <li>We reserve the right to return cards not suitable for sale.</li>
        <li>Upon receipt, we handle and store cards carefully until sold or returned.</li>
        <li>We are not responsible for manufacturer defects or grading inaccuracies unless agreed.</li>
      </ul>

      <h2 className="text-xl font-semibold">Shipping to Buyers</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Sold cards are moved to the Buyer’s inventory and shipped by the Marketplace.</li>
      </ul>

      <h2 className="text-xl font-semibold">Unsold Cards & Return Requests</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Returns of unsold cards can be requested anytime, subject to shipping fees.</li>
        <li>Returns of uploaded (but not live) cards incur a 25p per card fee.</li>
        <li>We may return unsold cards at our discretion.</li>
        <li>Violation of this agreement may result in cards being returned at our discretion.</li>
        <li>Returned cards will be shipped at the Seller’s expense.</li>
      </ul>

      <h2 className="text-xl font-semibold">Payout of Store Credit</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Store credit can be used on the Marketplace.</li>
        <li>Cash payouts are processed via Bank Transfer within 14 business days of request.</li>
        <li>All withdrawals incur a 15% fee, up to and including £1,000.</li>
      </ul>

      <h2 className="text-xl font-semibold">Agreement Changes & Termination</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>This Agreement may be updated anytime. Changes will be communicated via email or website.</li>
        <li>The Seller may terminate this Agreement by requesting a return of all consigned cards (subject to fees).</li>
      </ul>

      <h2 className="text-xl font-semibold">Governing Law</h2>
      <p>This Agreement is governed by the laws of [Your Country or Region].</p>

      <h2 className="text-xl font-semibold">Contact Information</h2>
      <p>If you have any questions about this Agreement, please contact us using the form below.</p>

      <p className="mt-4">
        By submitting a consignment through our website, you confirm that you have read, understood, and agree to the terms of this Agreement.
      </p>
    </div>
  );
}
