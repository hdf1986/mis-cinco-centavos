import React from "react";
import styled from "@emotion/styled";

import Button from "./Button";

const Backdrop = styled.div`
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  main {
    padding: 24px;
  }
`;

const Modal = styled.div`
  padding: 48px;
  background: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TextField = styled.input`
  border: none;
  font-size: 16px;
  padding: 8px;
  border-bottom: 2px solid orangered;
  margin-bottom: 24px;
`;

const Form = styled.div`
  margin: 24px 0;
  display: flex;
  flex-direction: column;
`;

const Close = styled.div`
  position: absolute;
  font-size: 18px;
  right: 24px;
  top: 24px;
`;

const ProjectForm = ({ title, onSubmit, onClose }) => {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState(10);

  function handleSubmit() {
    onSubmit({ name, amount });
    onClose();
  }

  return (
    <Backdrop>
      <main>
        <Modal>
          <Close onClick={onClose}>X</Close>
          <h2 style={{ margin: 0 }}>Doná para el proyecto "{title}"</h2>
          <Form>
            <TextField
              placeholder="Monto en pesos"
              type="number"
              value={amount}
              onChange={e => setAmount(Number(e.target.value || 0))}
            />
            <TextField placeholder="Tu nombre" value={name} onChange={e => setName(e.target.value)} />
          </Form>
          <Button color="white" disabled={!name || !amount} onClick={handleSubmit}>
            Donar
          </Button>
        </Modal>
      </main>
    </Backdrop>
  );
};

export default ProjectForm;
