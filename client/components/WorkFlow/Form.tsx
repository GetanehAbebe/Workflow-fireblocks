import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GeneralStateInterface, UserInterface } from "./interfaces";
import { addPosition, addPositionToApi } from "../../redux/dates/action";
import { fetchUsers } from "../../redux/users/action";
import { getAvialablePositions, getNextWeekRange } from "./helpers";
import { changeFormState } from "../../redux/form/action";
import Input from "../Form/Input";
import Select from "../Form/Select";
import Button from "../Form/Button";

const MAX_PLACES = 8;

const Form: React.FC<{}> = ({ formState }: any): JSX.Element => {
  const dispatch = useDispatch();

  const nextweek = getNextWeekRange(new Date());

  const positionState = useSelector(
    (state: GeneralStateInterface) => state.dates[formState.date]
  );
  const positions = getAvialablePositions(positionState, MAX_PLACES);
  const users = useSelector(
    (state: GeneralStateInterface) => state.users.usersList
  );

  const handleChange = (name: String, value: String) => {
    dispatch(changeFormState({ name, value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(addPosition(formState));
    dispatch(addPositionToApi(formState));
    dispatch(changeFormState({ ...formState }));
  };

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchUsers());
    }
  }, []);

  const usersOptions = users.length
    ? users.map(({ firstName, lastName }: any) => ({
        value: `${firstName} ${lastName}`,
        displayValue: `${firstName} ${lastName}`,
      }))
    : [];

  const positionsOptions = positions.map((position) => ({
    value: position,
    displayValue: position,
  }));

  return (
    <form>
      <Input
        id="date"
        name="Day: "
        type="date"
        min={nextweek.start}
        max={nextweek.end}
        onChange={(e: { target: { value: String } }) => {
          handleChange("date", e.target.value);
        }}
        isRequired={true}
        defaultValue={new Date().toISOString().slice(0, 10)}
        value={formState.date}
      />

      <Select
        defaultOption="--Choose Name--"
        onChange={(e) => {
          handleChange("user", e.target.value);
        }}
        id="users"
        name="Name: "
        value={formState.user}
        options={usersOptions}
      />

      <Select
        defaultOption="--Choose postion--"
        onChange={(e) => {
          handleChange("position", e.target.value);
        }}
        id="position"
        name="Position Number: "
        value={formState.position}
        options={positionsOptions}
      />
      <Button
        type="submit"
        onClick={handleSubmit}
        disabled={Object.values(formState).length < 2}
        className="btn btn-success"
        name="Submit"
      />
    </form>
  );
};

export default Form;
