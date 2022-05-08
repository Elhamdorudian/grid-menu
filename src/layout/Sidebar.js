import "../assets/styles/Sidebar.css";
import SectionBtn from "../components/SectionBtn";
import IsEnabledBtn from "../components/IsEnabledBtn";

const Sidebar = ({ testData, setTestData, setPluginStatus, pluginStatus }) => {

  return (
    <div
      className={`sidebar-container ${
        pluginStatus ? "is-active" : "not-active"
      }`}
    >
      <div className="sidebar-logo">
        Data<span>Guard</span>
      </div>
      <ul className="sidebar-sections">
        {testData.map((item) => {
          return (
            <SectionBtn
              key={item.id}
              item={item}
              testData={testData}
              setTestData ={setTestData}
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
