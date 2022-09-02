import React, { useEffect, useState } from "react";
import Board from "./Board";
import { useSelector, useDispatch } from "react-redux";
import {
  GeneralStateInterface,
  UserInterface,
  WorkFlowInterface,
} from "./interfaces";
import { addPosition, addPositionToApi } from "../../redux/dates/action";

import { fetchUsers } from "../../redux/users/action";
import { getAvialablePositions, getNextWeekRange } from "./helpers";
import { PositionInterface } from "./interfaces";

const MAX_PLACES = 8;

const WorkFlow: React.FC<WorkFlowInterface> = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState<PositionInterface>({});

  const nextweek = getNextWeekRange(new Date());

  const positionState = useSelector(
    (state: GeneralStateInterface) => state.dates[formState.date]
  );
  const positions = getAvialablePositions(positionState, MAX_PLACES);
  const users = useSelector(
    (state: GeneralStateInterface) => state.users.usersList
  );

  const handleChange = (name: String, value: String) => {
    formState[name] = value;
    setFormState({ ...formState });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    
    e.preventDefault();
    dispatch(addPosition(formState));
    dispatch(addPositionToApi(formState));
    setFormState({ ...formState });
  };

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, []);

  useEffect(() => {
    setFormState({ ...formState });
  }, [formState.date]);

  return (
    <div>
      {<Board positionsAmount={8} date={formState.date} isAdmin={isAdmin} />}

      <label htmlFor="date">Day: </label>
      <input
        required
        type="date"
        id="date"
        min={nextweek.start}
        max={nextweek.end}
        value={formState.date}
        onChange={(e) => {
          handleChange("date", e.target.value);
        }}
      />

      <label htmlFor="users">Name: </label>
      <select
        id="users"
        required
        defaultValue={new Date().toISOString().slice(0, 10)}
        value={formState.user}
        onChange={(e) => {
          handleChange("user", e.target.value);
        }}
      >
        <option>--Choose Name--</option>
        {users.length &&
          users.map(({ firstName, lastName, id }: UserInterface) => (
            <option
              key={`${firstName}-${lastName}-${id}`}
              value={`${firstName} ${lastName}`}
            >{`${firstName} ${lastName}`}</option>
          ))}
      </select>

      <label htmlFor="position">Position Number: </label>
      <select
        id="position"
        required
        value={formState.position}
        onChange={(e) => {
          handleChange("position", e.target.value);
        }}
      >
        <option>--Choose postion--</option>
        {positions.map((position) => (
          <option
            value={`${position}`}
            key={`${formState.user}-${position}`}
          >{`${position}`}</option>
        ))}
      </select>

      <button
        type="submit"
        onClick={handleSubmit}
        disabled={Object.values(formState).length !== 3}
        className="btn btn-success"
      >
        Submit
      </button>
    </div>
  );
};

export default WorkFlow;
