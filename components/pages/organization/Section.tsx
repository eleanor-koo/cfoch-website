import {ReactNode} from "react";
const photographs:Record<string,[string,string]>={
 "Our Mission":["woodland-path","A quiet path winding through a lush green forest"],
 "Our Name":["coastal-light","Ocean waves at sunset framed by the coastline"],
 "Our Beliefs":["redwood-canopy","Sunlight filtering through a canopy of redwood trees"],
 "Our Values":["sunlit-trail","Sunlight falling on a trail through green woodland"],
 "Our Goals":["forest-sky","Tall trees reaching into a blue sky"],
 "How You Can Help":["ocean-dusk","Soft evening light reflecting across the ocean"]
};
export default function Section({side,children,title}:{side:"left"|"right";children:ReactNode;title:string}){const [photo,alt]=photographs[title];return <section className={`about-section wrap ${side==='right'?'reverse':''}`}><figure className="about-photo"><img src={`/nature/${photo}.webp`} alt={alt} loading="lazy" width="1000" height="1100"/></figure><div><h2>{title}</h2><div className="about-copy">{children}</div></div></section>}
