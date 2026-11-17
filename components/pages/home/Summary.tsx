import {useEffect, useState} from "react";
const photos=[['/carousel/image3.jpeg','Volunteers with bags of collected litter'],['/carousel/image1.jpeg','Volunteers collecting litter in the neighborhood'],['/carousel/image4.png','A student speaking at an environmental protest'],['/carousel/image2.png','Speakers in an online environmental conversation'],['/carousel/image5.jpeg','A conversation from the CFOCH community archive'],['/carousel/image6.jpeg','A moment from the CFOCH community archive']];
export default function Summary(){
  const [index,setIndex]=useState(0);
  const [motion,setMotion]=useState(false);
  const [focused,setFocused]=useState(false);
  const [visible,setVisible]=useState(true);
  useEffect(()=>{
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion=()=>setMotion(!preference.matches);
    const syncVisibility=()=>setVisible(!document.hidden);
    syncMotion();syncVisibility();
    preference.addEventListener('change',syncMotion);
    document.addEventListener('visibilitychange',syncVisibility);
    return ()=>{preference.removeEventListener('change',syncMotion);document.removeEventListener('visibilitychange',syncVisibility);};
  },[]);
  const rotating=motion&&!focused&&visible;
  useEffect(()=>{
    if(!rotating)return;
    const timer=window.setTimeout(()=>setIndex(current=>(current+1)%photos.length),10000);
    return ()=>window.clearTimeout(timer);
  },[rotating,index]);
  function step(direction:number){setIndex(current=>(current+direction+photos.length)%photos.length);}
  return <section id="summary" className="community" aria-label="CFOCH community">
    
    <div className="community-carousel" role="region" aria-roledescription="carousel" aria-label="Community photo gallery"
      onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))setFocused(false);}}>
      <div className="community-slide" aria-live={rotating?'off':'polite'} aria-atomic="true">
        {photos.map(([src,alt],photoIndex)=><div key={src} className={`carousel-frame ${photoIndex===index?'is-active':''}`} aria-hidden={photoIndex!==index} role="group" aria-roledescription="slide" aria-label={`${photoIndex+1} of ${photos.length}`}>
          <img src={src} alt={alt} fetchPriority={photoIndex===0?'high':'auto'} loading={photoIndex===0?'eager':'lazy'}/>
        </div>)}
      </div>
      <div className="gallery-controls">
        <button aria-label="Previous community photo" onClick={()=>step(-1)}>←</button>
        <button aria-label="Next community photo" onClick={()=>step(1)}>→</button>
      </div>
    </div>
    <div className="community-summary wrap"><h2>Summary</h2><p>Welcome to Care for our Common Home Foundation (CFOCH), a private,
            nonprofit organization headquartered in San Jose, California. We are
            committed to journeying with youth to create a platform for
            promoting environmental and social innovations, aiming to uphold
            environmental justice and realize sustainable development. Our goal
            is to improve the common home we share by enhancing environmental
            awareness and doing our part of each person{"'"}s social
            responsibility, regardless of age, to create a hope-filled future.
            We are run completely by student volunteers and believe that
            everyone, regardless of age, can make contributions and strive to
            improve our common home.</p></div>
  </section>;
}
