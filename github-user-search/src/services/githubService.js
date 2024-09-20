import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  const query = [];
  
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const queryString = query.join('+');
  const url = `https://api.github.com/search/users?q=${queryString}`;
  
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users');
  }
};