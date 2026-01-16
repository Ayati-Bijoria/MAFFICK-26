import TiltedCard from "./TiltedCard";
import "./Sponsor.css";
import nescafe from "./img2/Nescafe.jpeg";
import ola from "./img2/ola.jpeg";
import plum from "./img2/plum.jpeg";
import topntown from "./img2/topntown.jpeg";
import coding from "./img2/CodingNinjas.jpeg";
import jockey from "./img2/Jockey.jpeg";
import reliance from "./img2/Reliance.jpeg";
import patanjali from "./img2/patanjali.jpeg";
import bob from "./img2/Bob.jpeg";
import ongc from "./img2/ongc.jpeg";
import sting from "./img2/sting.jpeg";
import honda from "./img2/honda.jpeg";
import sbi from "./img2/sbi.jpeg";
import indianoil from "./img2/IndianOil.jpeg";
import CanaraBank from "./img2/CanaraBank.jpeg";
import whitefox from "./img2/Whitefox.jpeg";
import chalobus from "./img2/ChaloBus.jpeg";
import cafecoffeeday from "./img2/CafeCoffeeDay.jpeg";
import botlab from "./img2/Botlab.jpeg";
import gfg from "./img2/GFG.jpeg";
import guvi from "./img2/guvi.jpeg";
import ktm from "./img2/KTM.jpeg";
import mlh from "./img2/MLH.jpeg";
import uber from "./img2/uber.jpeg";
import unstop from "./img2/Unstop.jpeg";
import lost from "./img2/LostStories.jpeg";
import hp from "./img2/hp.jpeg";
import civil from "./img2/civil.jpeg";
import amul from "./img2/amul.jpeg";

function Sponsor() {
  // Array of sponsor data
  const sponsors = [
  {
    imageSrc: nescafe,
    altText: "nescafe",
    captionText: "nescafe",
  },
  {
    imageSrc: ola,
    altText: "ola",
    captionText: "ola",
  },
  {
    imageSrc: plum,
    altText: "plum",
    captionText: "plum",
  },
  {
    imageSrc: amul,
    altText: "amul",
    captionText: "amul",
  },
  {
    imageSrc: bob,
    altText: "bob",
    captionText: "bob",
  },
  {
    imageSrc: botlab,
    altText: "botlab",
    captionText: "botlab",
  },
  {
    imageSrc: guvi,
    altText: "guvi",
    captionText: "guvi",
  },
  {
    imageSrc: honda,
    altText: "honda",
    captionText: "honda",
  },
  {
    imageSrc: hp,
    altText: "hp",
    captionText: "hp",
  },
  {
    imageSrc: indianoil,
    altText: "indianoil",
    captionText: "indianoil",
  },
  {
    imageSrc: jockey,
    altText: "jockey",
    captionText: "jockey",
  },
  {
    imageSrc: ktm,
    altText: "ktm",
    captionText: "ktm",
  },
  {
    imageSrc: cafecoffeeday,
    altText: "cafecoffeeday",
    captionText: "cafecoffeeday",
  },
  {
    imageSrc: CanaraBank,
    altText: "CanaraBank",
    captionText: "CanaraBank",
  },
  {
    imageSrc: chalobus,
    altText: "chalobus",
    captionText: "chalobus",
  },
  {
    imageSrc: civil,
    altText: "civil",
    captionText: "civil",
  },
  {
    imageSrc: coding,
    altText: "coding",
    captionText: "coding",
  },
  {
    imageSrc: gfg,
    altText: "gfg",
    captionText: "gfg",
  },
  {
    imageSrc: lost,
    altText: "lost",
    captionText: "lost",
  },
  {
    imageSrc: mlh,
    altText: "mlh",
    captionText: "mlh",
  },
  {
    imageSrc: ongc,
    altText: "ongc",
    captionText: "ongc",
  },
  {
    imageSrc: patanjali,
    altText: "patanjali",
    captionText: "patanjali",
  },
  {
    imageSrc: reliance,
    altText: "reliance",
    captionText: "reliance",
  },
  {
    imageSrc: sbi,
    altText: "sbi",
    captionText: "sbi",
  },
  {
    imageSrc: sting,
    altText: "sting",
    captionText: "sting",
  },
  {
    imageSrc: topntown,
    altText: "topntown",
    captionText: "topntown",
  },
  {
    imageSrc: uber,
    altText: "uber",
    captionText: "uber",
  },
  {
    imageSrc: unstop,
    altText: "unstop",
    captionText: "unstop",
  },
  {
    imageSrc: whitefox,
    altText: "whitefox",
    captionText: "whitefox",
  }
];

  return (
    <div className="sponsor-grid">
      {sponsors.map((sponsor, index) => (
        <TiltedCard
          key={index}
          imageSrc={sponsor.imageSrc}
          altText={sponsor.altText}
          captionText={sponsor.captionText}
          containerHeight="200px"
          containerWidth="300px"
          imageHeight="100%" // optional if TiltedCard uses them
          imageWidth="100%" // but not required with CSS above
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">{sponsor.captionText}</p>
          }
        />
      ))}
    </div>
  );
}

export default Sponsor;
