import Banner from "@components/layout/Banner";
import TeamGrid from "@components/pages/team/TeamGrid";
import Page from "@lib/types/Page";

const Team: Page = () => {
  return (
    <>
      <Banner title="Our Team" />
      <p className="wrap page-intro">Meet the people who helped build CFOCH. Roles below reflect our original website team.</p><TeamGrid />
    </>
  );
};

Team.title = "Our Team";
export default Team;
