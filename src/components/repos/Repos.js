import React from 'react';
import RepoItem from './RepoItem';  

const Repos = (props) => {
    const { repos } = props;
    console.log(repos);
    return (
        <div style={{ display: 'flex', flexDirection:'column' }}>
            {
                repos.map((repo) => (
                    <RepoItem key={repo.id} repo={repo} />
                ))
            }
        </div>
    );
};

export default Repos;
