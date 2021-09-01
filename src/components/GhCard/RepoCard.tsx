import React, { FC } from 'react';

export interface RepoCardProps {
  owner?: string;
  repo: string;
}

const RepoCard: FC<RepoCardProps> = ({ owner, repo }) => {
  return (
    <a
      className="gh-repo-card"
      href={`https://github.com/${owner}/${repo}`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`https://lencx-stats.vercel.app/api/pin/?username=${owner}&repo=${repo}&bg_color=320,323031,84a59d&icon_color=b0c4b1&title_color=eec170&text_color=a2a392`}
        alt={repo}
      />
    </a>
  );
};

RepoCard.defaultProps = {
  owner: 'lencx',
};

export default RepoCard;
