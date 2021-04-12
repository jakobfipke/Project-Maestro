import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';
import OutlinesPage from './pages/OutlinesPage';
import OutlinePage from './pages/OutlinePage';
import ProjectPage from './pages/ProjectPage';
import GoalsPage from './pages/GoalsPage';
import JoinTeamPage from './pages/JoinTeamPage';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          {/* <Route path="/" component={HomePage} exact /> */}
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/register" component={RegisterPage} exact />
          <Route path="/dashboard/" component={DashboardPage} exact />
          <Route path="/outlines/:id" component={OutlinesPage} exact />
          <Route path="/outlines/outline/:id" component={OutlinePage} exact />
          <Route path="/outlines/outline/:id/project/" component={ProjectPage} exact />
          <Route path="/outlines/outline/:id/project/join" component={JoinTeamPage} exact />
          <Route path="/outlines/outline/:id/project/:projectId/goals" component={GoalsPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
