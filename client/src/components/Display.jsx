import "./Display.css";

export function Display({ results }) {
  return (
    <div className="display-wrapper">
      {results.map((result) => {
        return (
          <div className="image-conatiner" key={result.id}>
            <img src={result.webformatURL} alt={result.tags} />
            <div className="image-status">
              <img
                id="user-image"
                height="50px"
                width="50px"
                src={result.userImageURL}
              />
              <p>views: {result.views}</p>
              <p>likes: {result.likes}</p>
              <p>downloads: {result.downloads}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* 
<ul>
        {results.map((result) => {
          return (
            <li id="image-container" key={result.id}>
              <img
                height="150px"
                width="150px"
                src={result.largeImageURL}
                alt={result.tags}
              />
            </li>
          );
        })}
      </ul>
*/
