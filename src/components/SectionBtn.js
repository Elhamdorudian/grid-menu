import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/styles/Sidebar.css"

const SectionBtn = ({ item,testData, setTestData }) => {

  const handleSelect = (id, e) => {
    setTestData(
      testData.map((item) => {
        if (item.id === id) {
          return { ...item, selected: true };
        } else {
          return { ...item, selected: false };
        }
      })
    );
  } 


  return (
    <Link to={item.path} className={item.selected ? "active" : "deactive"} onClick={(e) => handleSelect(item.id,e)}>
      <FontAwesomeIcon icon={`${item.icon}`} />
      <span>{item.name}</span>
    </Link>
  );
};

export default SectionBtn;
