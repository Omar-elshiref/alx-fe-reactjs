import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center'>
      <input
      className='border-2 border-indigo-600 p-1 rounded-lg w-72'
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit" className='bg-indigo-600 text-white p-3 ml-2 rounded-lg hover:bg-black'>Search</button>
    </form>
  );
};

export default Search;