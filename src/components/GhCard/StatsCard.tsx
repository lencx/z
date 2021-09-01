import React, { FC } from 'react';

export interface StatsCardProps {
  owner?: string;
}

const StatsCard: FC<StatsCardProps> = ({ owner }) => {
  return (
    <a
      className="gh-stats-card"
      href={`https://github.com/${owner}`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`https://lencx-stats.vercel.app/api/?username=${owner}&show_icons=true&bg_color=320,323031,84a59d&icon_color=b0c4b1&title_color=eec170&text_color=a2a392&include_all_commits=true`}
        alt={`${owner} stats`}
      />
    </a>
  );
};

StatsCard.defaultProps = {
  owner: 'lencx',
};

export default StatsCard;
