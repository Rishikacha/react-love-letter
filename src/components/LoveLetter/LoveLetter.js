import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        Happy Birthday dear mine ❤️ee roju special day to me.. nannu yepudu support chesthaav.. life long yevaru vuntaro ledho thelidhu kaani nuvvu matram naku kavalii..na midha kante ni midhe chala nammakam nakuu🥹.. yepudu manam support cheskuntane vuntam..even in fights 😁...manam idharam okate bava 🥺I don't want any secrets or misunderstanding between us .okkosari nene picha thepisthaanu 😅 kopam thepisthuna vadhileyav kadha ..?🥺..yedho kopam lo antaanu kaanii okka roju kaadhu kadha oka ganta kuda vundalenu matladakundaa..kottukonoo ,thittukuno matladukovali😁..chala misss avuthunaa bava ninnu 🥺yenni days ayindhi thelusaa kalisii 🥲..okati chepthunanu vinu bava niku yepudu alone Ane feel ranivanu.yepudu yem vachinaa nenu okadhanini vunaanu ani gurthupetuko..yevadini yedhi Adukokuu  nikavasaram ledhu.mana idharilo yevariki ye kastam vachinaa solve cheskundhamm..nakem vaddhu kani okati aduguthaa bava nakepudu alone feel thepinchaku ee holidays ichina starting lo anukuntaa chala ignore chesaaav nannuu worst situation ever malli naku aa situation assalu vaddhuu pleaseee😖..kopam vasthe oka sorry 😁prema vasthe oka I love you 🫣 chepthe set ayipothanu nannu handle cheyadam chala easy babu🤭nenu thikkagaa vaagaaanh antee nuvvu premaga matladi kopam thaginchali ani ardham 😁..ninnu control cheyadam chala easy lee 😉ni gurinchi naku thelikundaa vundadhaa 😁..once again Happy Birthday Bavaaaaaa and I love you more than myself 🥹💋😘 asalee nakuu bujjji pilodivii mallii ipude putaav chala jagratha ga chuskovalamma🤭
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
