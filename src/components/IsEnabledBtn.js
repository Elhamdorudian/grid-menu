import "../assets/styles/Sidebar.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";


/*------------------------------------
Material UI styles for switch plugin
--------------------------------------*/

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#2ECA45",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "tomato" : "tomato",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));


const IsEnabledBtn = ({ testData, setTestData, setPluginStatus, pluginStatus }) => {


  /*------------------------------------
  Enabaling and disabling plugins
  --------------------------------------*/
  const setPluginsStatus = async (e) => {
    const newData = [...testData];
    for (let i = 0; i < newData.length; i++) {
      newData[i].plugins.map((plugin) => (plugin.isEnabled = e.target.checked));
      await fetch(`http://localhost:8000/pages/${i}`, {
        method: "PUT",
        body: JSON.stringify(newData[i]),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTestData(newData);
      setPluginStatus(e.target.checked);
    }
  };

  return (
    <div className="plugin-control">
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label={pluginStatus ? "All plugins enabled" : "All plugins disabled"}
        labelPlacement="start"
        onChange={setPluginsStatus}
      />
    </div>
  );
};

export default IsEnabledBtn;
