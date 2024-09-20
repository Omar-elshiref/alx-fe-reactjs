import { useState } from 'react';
import Search from './components/Search';
import UserDetails from './components/UserDetails';
import { fetchUserData } from './services/githubService';

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      setError('');
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  };

  return (
    <div>
      <h1 className='text-center p-10 text-2xl'>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <UserDetails user={user} />
    </div>
  );
};

export default App;
