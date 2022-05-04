import "../assets/styles/Main.css";
import { Route, Routes } from "react-router-dom";
import PageContent from "../pages/PageContent";

const Main = ({ testData, setTestData, pluginStatus }) => {
  let wrapperStatus = pluginStatus
    ? "main-container"
    : "main-container-disabled";

  return (
    <div className={wrapperStatus}>
      <p>{testData.name}</p>
      <Routes>
        {testData.map((page) => {
          return (
            <Route
              path={page.path}
              key={page.id}
              element={<PageContent page={page} setTestData={setTestData} />}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default Main;
