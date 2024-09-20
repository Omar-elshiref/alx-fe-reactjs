import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch {
      setError("Looks like we cant find the user");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1 className='text-center p-10 text-2xl'>GitHub User Search</h1>
      <form onSubmit={handleSearch} className='flex justify-center'>
        <input
          className='border-2 border-indigo-600 p-1 rounded-lg w-72'
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter GitHub username'
        />
        <button
          type='submit'
          className='bg-indigo-600 text-white p-3 ml-2 rounded-lg hover:bg-black'>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500 text-2xl text-center p-7">{error}</p>}

      {user && (
        <div className='flex justify-center flex-col items-center p-14'>
          <img
            src={user.avatar_url}
            alt={user.login}
            width='100'
            className='w-48 rounded-full'
          />
          <h3 className='text-4xl p-5'>{user.login}</h3>
          <p className='p-3 text-xl'>Followers: {user.followers}</p>
          <p className='p-3 text-xl'>Following: {user.following}</p>
          <a
            className='mt-2 bg-indigo-600 text-white p-3 ml-2 rounded-lg hover:bg-black'
            href={user.html_url}
            target='_blank'
            rel='noopener noreferrer'>
            View Profile on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
