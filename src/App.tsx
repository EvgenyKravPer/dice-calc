import { useState } from "react";

import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Table from "./components/Table/Table";
import { getPossibleOutputs, Result } from "./businessLogic/possibleOutputs";

export default function App() {
  const [possibleOutputs, setPossibleOutputs] = useState<Array<Result>>([]);

  const calculateHandler = (event: any) => {
    const die1 = parseInt(event.target["die-1"].value);
    const die2 = parseInt(event.target["die-2"].value);
    const die3 = parseInt(event.target["die-3"].value);
    const die4 = parseInt(event.target["die-4"].value);

    event.preventDefault();
    setPossibleOutputs(getPossibleOutputs([die1, die2, die3, die4]));
  };

  return (
    <div>
      <Header />

      <form
        className="form"
        onSubmit={calculateHandler}
        onReset={() => setPossibleOutputs([])}
      >
        <InputGroup>
          <p>
            <label htmlFor="die-1">Die 1</label>
            <input type="number" min="1" max="6" step="1" id="die-1" />
          </p>
          <p>
            <label htmlFor="die-2">Die 2</label>
            <input type="number" min="1" max="6" step="1" id="die-2" />
          </p>
          <p>
            <label htmlFor="die-3">Die 3</label>
            <input type="number" min="1" max="6" step="1" id="die-3" />
          </p>
          <p>
            <label htmlFor="die-4">Die 4</label>
            <input type="number" min="1" max="6" step="1" id="die-4" />
          </p>
        </InputGroup>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
      <Table data={possibleOutputs} />
    </div>
  );
}
