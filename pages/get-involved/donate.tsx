import Banner from "@components/layout/Banner";
import DonationGrid from "@components/pages/donate/DonationGrid";
import Page from "@lib/types/Page";

const Donate: Page = () => {
  return (
    <>
      <Banner title="Donate" />
      <div className="wrap donation-intro"><p className="lead">Support environmental education and a community of young people who care.</p><p>Care for our Common Home Foundation is a nonprofit, tax-exempt charitable organization under Section 501(c)(3) of the Internal Revenue Code (EIN 86-2868869). Donations are tax-deductible as allowed by law.</p></div>
      <DonationGrid />
    </>
  );
};

Donate.title = "Donate";

export default Donate;
