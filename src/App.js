import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";

library.add(fas);

function App() {
  const [testData, setTestData] = useState([]);
  let [pluginStatus, setPluginStatus] = useState(true);

  /*------------------------------------
  Getting data from the server
  --------------------------------------*/
  useEffect(() => {
    let url = "http://localhost:8000/pages";

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("The request failed");
        }
        return res.json();
      })
      .then((data) => {
        setTestData(data);
      })
      .catch((err) =>
        console.log(err)
      );
  }, []);

  return (
    <Router>
      {testData && (
        <Sidebar
          testData={testData}
          setTestData={setTestData}
          setPluginStatus={setPluginStatus}
          pluginStatus={pluginStatus}
        />
      )}
      {testData && (
        <Main
          testData={testData}
          setTestData={setTestData}
          pluginStatus={pluginStatus}
        />
      )}
    </Router>
  );
}

export default App;
