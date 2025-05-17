import "./Display.css";

export function Display({ results }) {
  return (
    <div className="display-wrapper">
      {results.map((result) => {
        return (
          <div className="image-container" key={result.id}>
            <img id="img" src={result.webformatURL} alt={result.tags} />
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
