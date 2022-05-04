import "../assets/styles/Sidebar.css";
import SectionBtn from "../components/SectionBtn";
import IsEnabledBtn from "../components/IsEnabledBtn";

const Sidebar = ({ testData, setTestData, setPluginStatus, pluginStatus }) => {
  const handleSelect = (id, e) => {
    e.preventDefault();
    setTestData(
      testData.map((item) => {
        if (item.id === id) {
          return { ...item, selected: true };
        } else {
          return { ...item, selected: false };
        }
      })
    );
  };

  return (
    <div className={pluginStatus ? "sidebar-container is-active" : "sidebar-container not-active" }>
      <div className="sidebar-logo">
        Data<span>Guard</span>
      </div>
      <ul className="sidebar-sections">
        {testData.map((item) => {
          return (
            <SectionBtn
              key={item.id}
              item={item}
              onClick={(e) => handleSelect(item.id, e)}
            />
          );
        })}
      </ul>
      <IsEnabledBtn
        testData={testData}
        setTestData={setTestData}
        setPluginStatus={setPluginStatus}
        pluginStatus={pluginStatus}
      />
    </div>
  );
};

export default Sidebar;
