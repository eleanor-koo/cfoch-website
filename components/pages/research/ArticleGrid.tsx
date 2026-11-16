import Link from "next/link";
import Research from "@lib/types/Research";
import FieldNoteArt from "./FieldNoteArt";
const order=["how-to-dress-sustainably","microplastics","the-importance-of-sea-ice","the-effect-of-covid-on-oceans","dead-zones","emission-trading"];
export default function ArticleGrid({research}:{research:Research[]}){return <div className="article-grid wrap">{research.map(item=><article className="article-card" key={item.article}><FieldNoteArt index={Math.max(0,order.indexOf(item.article))}/><div className="article-copy"><p className="eyebrow">STUDENT RESEARCH</p><h3><Link href={`/research/${item.article}`}>{item.title}</Link></h3><p>{item.description}</p><Link className="text-link" href={`/research/${item.article}`} aria-label={`Read ${item.title}`}>Read the article ↗</Link></div></article>)}</div>}
