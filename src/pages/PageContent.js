import PluginCard from "../components/PluginCard";
import "../assets/styles/Main.css";

/*------------------------------------
Setting a function to update the plugin status which is called in PluginCard.js
--------------------------------------*/
const PageContent = ({ page, setTestData }) => {

  /*------------------------------------
  Updating the data in front with setState
  --------------------------------------*/
  const updatePluginState = async (newPlugin) => {
    setTestData((prevState) => {
      const newState = [...prevState];
      newState[page.id].plugins[newPlugin.id].state = newPlugin.state;
      return newState;
    });

    /*------------------------------------
    Updating the server data
    --------------------------------------*/
    let newPage = page;
    newPage.plugins[newPlugin.id] = newPlugin;
    await fetch(`http://localhost:8000/pages/${page.id}`, {
      method: "PUT",
      body: JSON.stringify(newPage),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="cards-container">
      {page.plugins.length > 0 &&
        page.plugins.map((plugin) => {
          return (
            <div key={plugin.id}>
              <PluginCard
                plugin={plugin}
                updatePluginState={updatePluginState}
              />
            </div>
          );
        })}
    </div>
  );
};

export default PageContent;
