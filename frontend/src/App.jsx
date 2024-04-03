import Professor from './components/Professor';
import { useState } from 'react';

const App = () => {
  const [isAdmin, setAdmin] = useState(false);

  if (isAdmin) {
    return (
        <>
            <button className="admin-button" onClick={() => setAdmin(false)}>Not Admin</button>
            <h1>Admin</h1>
            <h1>Professors</h1>
            <Professor firstName="Scott" lastName="Brahaney"></Professor>
        </>
    );
  } else{
    return (
      <>
          <button className="admin-button" onClick={() => setAdmin(true)}>Admin</button>
          <h1>Not Admin</h1>
          <h1>Professors</h1>
          <Professor firstName="Scott" lastName="Brahaney"></Professor>
      </>
    );
  }
}
export default App;
