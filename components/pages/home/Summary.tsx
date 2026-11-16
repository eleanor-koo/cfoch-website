import {useState} from "react";
const photos=[['/carousel/image1.jpeg','Volunteers collecting litter in the neighborhood'],['/carousel/image3.jpeg','Volunteers with bags of collected litter'],['/carousel/image4.png','A student speaking at an environmental protest'],['/carousel/image2.png','Speakers in an online environmental conversation'],['/carousel/image5.jpeg','A conversation from the CFOCH community archive'],['/carousel/image6.jpeg','A moment from the CFOCH community archive']];
export default function Summary(){const [index,setIndex]=useState(0);return <section id="summary" className="community wrap section-space" aria-label="Community photo gallery"><div><h2>Summary</h2><p>Welcome to Care for our Common Home Foundation (CFOCH), a private,
            nonprofit organization headquartered in San Jose, California. We are
            committed to journeying with youth to create a platform for
            promoting environmental and social innovations, aiming to uphold
            environmental justice and realize sustainable development. Our goal
            is to improve the common home we share by enhancing environmental
            awareness and doing our part of each person{"'"}s social
            responsibility, regardless of age, to create a hope-filled future.
            We are run completely by student volunteers and believe that
            everyone, regardless of age, can make contributions and strive to
            improve our common home.</p><div className="gallery-controls"><button aria-label="Previous community photo" onClick={()=>setIndex((index+photos.length-1)%photos.length)}>←</button><span aria-live="polite">{index+1} / {photos.length}</span><button aria-label="Next community photo" onClick={()=>setIndex((index+1)%photos.length)}>→</button></div></div><figure><img src={photos[index][0]} alt={photos[index][1]} loading="lazy"/><figcaption>{photos[index][1]}</figcaption></figure></section>}
