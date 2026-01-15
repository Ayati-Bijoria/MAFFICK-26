import TiltedCard from "./TiltedCard";
import './Sponsor.css';

function Sponsor() {
  // Array of sponsor data
  const sponsors = [
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
    },
    {
      imageSrc: "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
    },
    // Add more sponsors - will wrap responsively
  ];

  return (
    <div className="sponsor-grid">
      {sponsors.map((sponsor, index) => (
        <TiltedCard
          key={index} // Use unique id in production
          imageSrc={sponsor.imageSrc}
          altText={sponsor.altText}
          captionText={sponsor.captionText}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
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
