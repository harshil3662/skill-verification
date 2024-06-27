import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home"
import Signin from "./routes/Signin"
import Signup from "./routes/Signup"
import Profile from './routes/Profile';
import Voting from './routes/Voting';
import Layout from './routes/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='voting' element={<Voting />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
