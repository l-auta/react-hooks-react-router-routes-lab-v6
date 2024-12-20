import NavBar from "../components/NavBar";

const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  {
    name: "Anna Kendrick",
    movies: ["Pitch Perfect", "Into The Woods"],
  },
  {
    name: "Tom Cruise",
    movies: [
      "Jack Reacher: Never Go Back",
      "Mission Impossible 4",
      "War of the Worlds",
    ],
  },
];

const Actors = () => {
  return (
    <div>
      < NavBar />
      <h1>Actors Page</h1>
      <div className="actor-list">
        {actors.map((actor, idx) => (
          <div key={idx} className="actor-card">
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actors;
