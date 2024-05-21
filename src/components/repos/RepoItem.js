import React from "react";
const RepoItem = (props) => {
    const { repo } = props;
    console.log(repo);
    return (
        <div className="list" style={{border:"1px solid"}}>
            <h1>Show lists Repositories</h1>
            <h2>Repo name: {repo.name}</h2>
            <a target="_blank" rel="noreferrer" href={repo.html_url}>Link to repo</a>
            <p>Language: {repo.language}</p>
            <p>Repo status: {repo.visibility}</p>
        </div>
    );
};

export default RepoItem;

