import React from "react";
import moment from "moment";
import "moment/locale/cs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Item = ({ id, name, type, path, category, date }) => {
  moment.locale("cs");
  return (
    <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "16px" }}>
      <div>
        <h4>{name}</h4>
        <p>
          <i>Soubor/Odkaz:</i> {path}
          <br />
          <i>Kategorie:</i> {category}
          <br />
          <i>Přidáno:</i> {moment(date).subtract(2, "hours").fromNow()}
          <br />
          <small className="text-secondary">{id}</small>
        </p>
      </div>

      {type === "file" && (
        <div>
          <a href={path} download>
            <Button color="primary">Stáhnout</Button>
          </a>
        </div>
      )}

      {type === "link" && (
        <div>
          <a href={path} target="_blank" rel="noopener noreferrer">
            <Button color="secondary">
              Přejít <FontAwesomeIcon icon={faExternalLinkAlt} />
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Item;
