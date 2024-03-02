import { useState } from 'react';
import Image from 'next/image';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flippable-image-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card-front">
        <Image
          src="/images/grad2.jpeg"
          alt="Picture of the author"
          objectFit="cover"
          layout="responsive"
          className="rounded-xl"
          width={500}
          height={300}
        />
      </div>
      <div className="card-back">
        {/* Content for the back side of the card */}
      </div>
    </div>
  );
};

export default FlipCard;
