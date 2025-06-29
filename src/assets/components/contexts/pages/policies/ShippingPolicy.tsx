export default function ShippingPolicyPage() {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-10 text-[#1A1A1A] space-y-6">
      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>

      <p><strong>Effective Date:</strong> 05/05/25</p>

      <p>
        Thank you for shopping with Noz Cards! We’re committed to delivering your cards quickly,
        securely, and with care. Please read our shipping policy below.
      </p>

      <h2 className="text-xl font-semibold mt-6">Processing Times</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Orders are processed within 1–3 business days.</li>
        <li>Orders placed on weekends or holidays will begin processing the next business day.</li>
        <li>You will receive a confirmation email once your order has shipped, along with tracking info (if applicable).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Shipping Options & Rates</h2>
      <p>
        We offer shipping worldwide. Shipping rates are calculated at checkout based on your location and
        selected shipping method.
      </p>
      <p className="italic">Note: Delivery times may vary due to postal delays or high-demand periods.</p>

      <h2 className="text-xl font-semibold mt-6">International Shipping</h2>
      <p>
        Yes, we ship internationally! Customs, duties, or import taxes may apply depending on your country.
        These fees are the buyer’s responsibility.
      </p>
      <p>
        Please check with your local customs office for details before placing an international order.
      </p>

      <h2 className="text-xl font-semibold mt-6">Order Issues / Delays</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Check your tracking number (if provided)</li>
        <li>Confirm the shipping address used</li>
        <li>Contact us using the form below</li>
      </ul>
      <p>
        We’re not responsible for delays caused by carriers, incorrect addresses, or customs clearance.
      </p>

      <h2 className="text-xl font-semibold mt-6">Lost or Damaged Packages</h2>
      <p>
        We take care in packing all items, but if your package is lost or arrives damaged:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Let us know within 7 days of delivery</li>
        <li>Include photos of the damaged packaging or cards</li>
        <li>We'll do our best to resolve it (refunds/replacements handled case-by-case)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Contact</h2>
      <p>
        For any shipping questions, please reach out using the form below.
      </p>
    </div>
  );
}
