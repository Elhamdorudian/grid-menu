import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionBtn = ({ item }) => {
  return (
    <Link to={item.path} className={item.selected ? "active" : ""}>
      <FontAwesomeIcon icon={`${item.icon}`} />
      <span>{item.name}</span>
    </Link>
  );
};

export default SectionBtn;
