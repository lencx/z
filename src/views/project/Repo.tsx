import React, { FC } from 'react';

interface ReopProps {
  site?: string;
  name?: string;
  owner?: string;
  repo: string;
  desc: string;
}

const Repo: FC<ReopProps> = ({ repo, site, owner, name, desc }) => {
  return (
    <tr>
      <td>
        <a href={site || `https://github.com/${owner}/${repo}`}>
          {name || `${owner}/${repo}`}
        </a>
      </td>
      <td>{desc}</td>
      <td>
        <div>
          <img
            alt="Stars"
            src={`https://img.shields.io/github/stars/${owner}/${repo}?style=plastic&labelColor=373f51&color=e07a5f`}
          />
        </div>
      </td>
      <td>
        <div>
          <img
            alt="Forks"
            src={`https://img.shields.io/github/forks/${owner}/${repo}?style=plastic&labelColor=373f51&color=e07a5f`}
          />
        </div>
      </td>
    </tr>
  );
};

Repo.defaultProps = {
  owner: 'lencx',
};

export default Repo;
