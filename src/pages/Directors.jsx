import NavBar from "../components/NavBar";

const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

const Directors = () => {
  return (
    <div>
      < NavBar />
      <h1>Directors Page</h1>
      <div className="director-list">
        {directors.map((director, idx) => (
          <div key={idx} className="director-card">
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directors;


