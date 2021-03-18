import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';

// Page
import ShowbizPage from './components/page/ShowbizPage';
import NewsPage from './components/page/NewsPage';
import LifePage from './components/page/LifePage';
import RegionalPage from './components/page/RegionalPage';
import IntermezzoPage from './components/page/IntermezzoPage';
import TrendingsPage from './components/page/TrendingsPage';
import VideosPage from './components/page/VideosPage';
import SciTechPage from './components/page/SciTechPage';
import SportPage from './components/page/SportPage';
import BizPage from './components/page/BizPage';
import MoviePage from './components/page/MoviePage';
import StoryPage from './components/page/StoryPage';
import HobbiesPage from './components/page/HobbiesPage';
import OtomotifPage from './components/page/OtomotifPage';
import ParentingPage from './components/page/ParentingPage';
import CoronaRiPage from './components/page/CoronaRiPage';
import Games from './components/page/Games';
import KataGaulPage from './components/page/KataGaulPage';
import EnglishPage from './components/page/EnglishPage';
import MusicPage from './components/page/MusicPage';
import CampusPage from './components/page/CampusPage';
import SignUpComp from './components/SignUpComp';
import TopPage from './components/page/TopPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUpComp />
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/Showbiz" exact>
            <ShowbizPage />
          </Route>
          <Route path="/News" exact>
            <NewsPage />
          </Route>
          <Route path="/Life" exact>
            <LifePage />
          </Route>
          <Route path="/Regional" exact>
            <RegionalPage />
          </Route>
          <Route path="/Intermezzo" exact>
            <IntermezzoPage />
          </Route>
          <Route path="/Trending" exact>
            <TrendingsPage />
          </Route>
          <Route path="/Videos" exact>
            <VideosPage />
          </Route>
          <Route path="/Sci-Tech" exact>
            <SciTechPage />
          </Route>
          <Route path="/Sports" exact>
            <SportPage />
          </Route>
          <Route path="/Biz" exact>
            <BizPage />
          </Route>
          <Route path="/Movie" exact>
            <MoviePage />
          </Route>
          <Route path="/Story" exact>
            <StoryPage />
          </Route>
          <Route path="/Hobbies" exact>
            <HobbiesPage />
          </Route>
          <Route path="/Otomotif" exact>
            <OtomotifPage />
          </Route>
          <Route path="/Parenting" exact>
            <ParentingPage />
          </Route>
          <Route path="/Corona-di-RI" exact>
            <CoronaRiPage />
          </Route>
          <Route path="/Games" exact>
            <Games />
          </Route>
          <Route path="/katagaul" exact>
            <KataGaulPage />
          </Route>
          <Route path="/English" exact>
            <EnglishPage />
          </Route>
          <Route path="/Music" exact>
            <MusicPage />
          </Route>
          <Route path="/Campus" exact>
            <CampusPage />
          </Route>
          <Route path="/TOP" exact>
            <TopPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
