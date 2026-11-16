import Banner from "@components/layout/Banner";import Link from "next/link";import Page from "@lib/types/Page";
const Involved:Page=()=> <><Banner title="Get Involved"/><section className="wrap section-space"><div className="involve-grid">{[['Join Us','/get-involved/apply'],['Donate','/get-involved/donate'],['Volunteer Recognition','/get-involved/pvsa']].map(([t,h])=><article key={h}><h2><Link href={h}>{t} ↗</Link></h2></article>)}</div></section></>;
Involved.title="Get involved";export default Involved;
