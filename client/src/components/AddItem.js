import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const AddItem = () => {
  const [isFile, setIsFile] = useState(true);

  const toggleValue = () => {
    setIsFile(!isFile);
  };

  return (
    <div>
      <h3>Přidat odkaz/soubor</h3>
      <Form>
        <FormGroup>
          <Label for="name">Název</Label>
          <Input type="text" name="name" id="name" placeholder="Název" />
        </FormGroup>
        <FormGroup style={{ marginTop: "10px" }}>
          <Label for="category">Karegorie</Label>
          <Input type="select" name="category" id="category">
            <option value="prg">Programování</option>
            <option value="alg">Algoritmy</option>
            <option value="other">Ostatní</option>
          </Input>
        </FormGroup>
        <FormGroup check style={{ marginTop: "5px" }}>
          <Label check>
            <Input type="checkbox" onClick={toggleValue} /> Přidat odkaz místo nahrání souboru
          </Label>
        </FormGroup>
        {isFile && (
          <FormGroup style={{ marginTop: "5px" }}>
            <Label for="file">Soubor</Label>
            <br />
            <Input type="file" name="file" id="file" />
          </FormGroup>
        )}
        {!isFile && (
          <FormGroup style={{ marginTop: "10px" }}>
            <Label for="link">Odkaz</Label>
            <Input type="text" name="link" id="link" placeholder="Odkaz" />
          </FormGroup>
        )}
        <FormGroup style={{ marginTop: "10px" }}>
          <Label for="password">Heslo pro přidání</Label>
          <Input type="password" name="password" id="password" placeholder="Heslo" />
        </FormGroup>
        <Button style={{ marginTop: "10px" }}>Odeslat</Button>
      </Form>
    </div>
  );
};

export default AddItem;
