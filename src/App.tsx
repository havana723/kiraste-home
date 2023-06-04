import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import IdolDetailPage from "./components/idol/IdolDetailPage";
import LandingPage from "./components/landing/LandingPage";
import { idols, idolsPhotos } from "./constants/idols";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {idols.map((idol) => (
            <Route
              path={`/${idol}`}
              element={
                <IdolDetailPage
                  name={idol}
                  images={idolsPhotos[idol]}
                  key={idol}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
