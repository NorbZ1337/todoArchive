import React, { FC, useState } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardProps {
  width?: string;
  height?: string;
  varinat: CardVariant;
}

const Card: FC<CardProps> = ({ width, height, children, varinat }) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        border: varinat === CardVariant.outlined ? '1px solid gray' : 'none',
        background: varinat === CardVariant.primary ? 'lightgray' : '',
      }}>
      {children}
    </div>
  );
};

export default Card;
