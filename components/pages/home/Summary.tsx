import {useEffect, useState} from "react";
const photos=[['/carousel/image1.jpeg','Volunteers collecting litter in the neighborhood'],['/carousel/image3.jpeg','Volunteers with bags of collected litter'],['/carousel/image4.png','A student speaking at an environmental protest'],['/carousel/image2.png','Speakers in an online environmental conversation'],['/carousel/image5.jpeg','A conversation from the CFOCH community archive'],['/carousel/image6.jpeg','A moment from the CFOCH community archive']];
export default function Summary(){
  const [index,setIndex]=useState(0);
  const [playing,setPlaying]=useState(false);
  const [hovered,setHovered]=useState(false);
  const [focused,setFocused]=useState(false);
  const [visible,setVisible]=useState(true);
  useEffect(()=>{
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion=()=>setPlaying(!preference.matches);
    const syncVisibility=()=>setVisible(!document.hidden);
    syncMotion(); syncVisibility();
    preference.addEventListener('change',syncMotion);
    document.addEventListener('visibilitychange',syncVisibility);
    return ()=>{preference.removeEventListener('change',syncMotion);document.removeEventListener('visibilitychange',syncVisibility);};
  },[]);
  const rotating=playing&&!hovered&&!focused&&visible;
  useEffect(()=>{
    if(!rotating)return;
    const timer=window.setInterval(()=>setIndex(current=>(current+1)%photos.length),6000);
    return ()=>window.clearInterval(timer);
  },[rotating]);
  function step(direction:number){setPlaying(false);setIndex(current=>(current+direction+photos.length)%photos.length);}
  return <section id="summary" className="community wrap" aria-label="CFOCH community">
    <div className="community-carousel" role="region" aria-roledescription="carousel" aria-label="Community photo gallery"
      onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
      onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node|null))setFocused(false);}}>
      <figure aria-live={rotating?'off':'polite'} aria-atomic="true">
        <div className="community-slide" role="group" aria-roledescription="slide" aria-label={`${index+1} of ${photos.length}`}>
          <img key={photos[index][0]} src={photos[index][0]} alt={photos[index][1]} fetchPriority="high"/>
        </div>
        <figcaption>{photos[index][1]}</figcaption>
      </figure>
      <div className="gallery-controls">
        <button aria-label="Previous community photo" onClick={()=>step(-1)}>←</button>
        <span>{index+1} / {photos.length}</span>
        <button aria-label="Next community photo" onClick={()=>step(1)}>→</button>
        <button className="gallery-play" aria-label={playing?'Pause slideshow':'Play slideshow'} onClick={()=>setPlaying(current=>!current)}>{playing?'Pause Ⅱ':'Play ▷'}</button>
      </div>
    </div>
    <div className="community-summary"><h2>Summary</h2><p>Welcome to Care for our Common Home Foundation (CFOCH), a private,
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
