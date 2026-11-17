type DonationLink = {
  amount: number;
  link: string;
  type: "one-time" | "recurring";
};

export const donationLinks: DonationLink[] = [
  {
    amount: 2,
    link: "https://buy.stripe.com/7sIeW543adVtdri7sv",
    type: "one-time",
  },
  {
    amount: 10,
    link: "https://buy.stripe.com/28oeW5bvC04Ddri7sw",
    type: "one-time",
  },
  {
    amount: 20,
    link: "https://buy.stripe.com/aEUcNXeHO6t12MEeUZ",
    type: "one-time",
  },
  {
    amount: 50,
    link: "https://buy.stripe.com/9AQ5lv6bi04D2ME14a",
    type: "one-time",
  },
  {
    amount: 100,
    link: "https://buy.stripe.com/aEU9BL8jqdVt9b2007",
    type: "one-time",
  },
  {
    amount: 10,
    link: "https://buy.stripe.com/14k9BL9nu04D9b25km",
    type: "recurring",
  },
];

export default function DonationGrid() {
  return (
    <div className="donation-options wrap section-space">
      <h2 className="text-center text-2xl sm:text-4xl font-bold font-display">
        One-Time Donations
      </h2>
      <div className="donation-grid">
        {donationLinks
          .filter((l) => l.type === "one-time")
          .map((l) => (
            <a
              className="donation-option"
              href={l.link}
              key={l.amount}
              target="_blank"
              rel="noreferrer noopener"
            >
              ${l.amount}
            </a>
          ))}
      </div>
      <h2 className="text-center text-2xl sm:text-4xl font-bold font-display">
        Recurring Donations
      </h2>
      <div className="donation-grid">
        {donationLinks
          .filter((l) => l.type === "recurring")
          .map((l) => (
            <a
              className="donation-option"
              key={l.amount}
              href={l.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              ${l.amount} Monthly
            </a>
          ))}
      </div>
    </div>
  );
}
