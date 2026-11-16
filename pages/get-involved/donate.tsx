import Banner from "@components/layout/Banner";
import DonationGrid from "@components/pages/donate/DonationGrid";
import Page from "@lib/types/Page";

const Donate: Page = () => {
  return (
    <>
      <Banner title="Donate" />
      <div className="wrap donation-intro"><p className="lead">Support environmental education and a community of young people who care.</p><p>Federal tax-exempt status is being reviewed. We are not representing contributions as tax-deductible at this time.</p></div>
      <DonationGrid />
    </>
  );
};

Donate.title = "Donate";

export default Donate;
