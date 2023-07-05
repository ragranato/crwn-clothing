import { Routes, Route } from 'react-router-dom'

// import Directory from './components/directory/directory.component';

import Home from "./routes/home/home.component"


const App = () => {
 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
