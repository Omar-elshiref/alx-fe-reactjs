const UserDetails = ({ user }) => {
    if (!user) return null;
  
    return (
      <div className="flex justify-center flex-col items-center p-14">
        <img src={user.avatar_url} alt={user.login} width="100" className="w-48 rounded-full"/>
        <h3 className="text-4xl p-5">{user.login}</h3>
        <p className="p-3 text-xl">Followers: {user.followers}</p>
        <p className="p-3 text-xl">Following: {user.following}</p>
        <a className="mt-2 bg-indigo-600 text-white p-3 ml-2 rounded-lg hover:bg-black" href={user.html_url} target="_blank" rel="noopener noreferrer">
          View Profile on GitHub
        </a>
      </div>
    );
  };
  
  export default UserDetails;