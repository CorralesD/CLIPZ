import Navbar from './Navbar';
import Login from './Login';
import { useState } from 'react';
import FsFeature from './FsFeature';

function App() {
  const [userId, setUserId] = useState("");

  const handleLoginClick = (userId) => {
    setUserId(userId);
  }
  return (
    <div className="App">
      <Navbar />
      <Login handleLoginClick={handleLoginClick} />
      <div className="content">
        <FsFeature userId={userId}/>
      </div>
    </div>
  );
}

export default App;
