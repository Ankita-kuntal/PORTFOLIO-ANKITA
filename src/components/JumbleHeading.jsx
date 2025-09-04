import React, { useEffect, useState } from 'react';

const JumbleHeading = ({ text, active }) => {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    let jumbleTimeout;
    if (active) {
      let frame = 0;
      const jumbleFrames = 12;
      const jumble = () => {
        if (frame < jumbleFrames) {
          setDisplay(
            text
              .split('')
              .map((char, i) =>
                char === ' ' ? ' ' : String.fromCharCode(65 + Math.floor(Math.random() * 26))
              )
              .join('')
          );
          frame++;
          jumbleTimeout = setTimeout(jumble, 30);
        } else {
          setDisplay(text);
        }
      };
      jumble();
    } else {
      setDisplay(text);
    }
    return () => clearTimeout(jumbleTimeout);
  }, [active, text]);

  return (
    <span>{display}</span>
  );
};

export default JumbleHeading;
