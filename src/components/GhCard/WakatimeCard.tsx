import React, { FC } from 'react';

export interface WakatimeCardProps {
  owner?: string;
}

const WakatimeCard: FC<WakatimeCardProps> = ({ owner }) => {
  return (
    <a
      className="gh-wakatime-card"
      href={`https://github.com/${owner}`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`https://lencx-stats.vercel.app/api/wakatime?username=${owner}&layout=compact&bg_color=150,323031,84a59d&title_color=eec170&text_color=a2a392`}
        alt={`${owner}'s wakatime`}
      />
    </a>
  );
};

WakatimeCard.defaultProps = {
  owner: 'lencx',
};

export default WakatimeCard;
