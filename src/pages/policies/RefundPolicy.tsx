export default function RefundPolicyPage() {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-10 text-[#1A1A1A] space-y-6">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p><strong>Effective Date:</strong> 05/05/2025</p>

      <p>
        At Noz Cards, we take pride in delivering quality cards and collectibles. However,
        if something's not right, we’ll do our best to make it right.
      </p>

      <h2 className="text-xl font-semibold mt-6">Return Eligibility</h2>
      <p>
        Due to the nature of collectibles, all sales are final unless one of the following applies:
      </p>
      <ul className="list-disc list-inside">
        <li>You received the wrong item</li>
        <li>Your item arrived damaged (photos required)</li>
        <li>The product was significantly not as described</li>
      </ul>
      <p>
        If your order qualifies, contact us using the form below within 7 days of delivery.
      </p>

      <h2 className="text-xl font-semibold mt-6">Damaged or Incorrect Orders</h2>
      <p>If your order arrives damaged or incorrect:</p>
      <ul className="list-disc list-inside">
        <li>Contact us within 7 days</li>
        <li>Include your order number and clear photos of the item(s) and packaging</li>
        <li>We’ll review and offer a replacement, store credit, or refund (case-by-case)</li>
      </ul>
      <p>
        We reserve the right to deny returns if items appear tampered with or returned in poor condition.
      </p>

      <h2 className="text-xl font-semibold mt-6">Refunds (If Approved)</h2>
      <ul className="list-disc list-inside">
        <li>Once approved, refunds are issued to your original payment method</li>
        <li>Processing time may vary depending on your bank/payment provider</li>
        <li>Shipping fees are non-refundable unless the return is our fault</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Return Shipping</h2>
      <p>
        If a return is approved, we’ll provide return instructions. You may be responsible for return shipping
        unless the item was sent in error or arrived damaged.
      </p>

      <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
      <p>Got questions or issues? Reach out anytime using the form below.</p>
    </div>
  );
}
