import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GeneralStateInterface } from "./interfaces";
import {
  getPositionsByDate,
  deltePositionFromState,
  deletePositionFromApi,
} from "../../redux/dates/action";
import { BoardProps } from "./interfaces";

const Board = ({ date, positionsAmount = 8, isAdmin }: BoardProps) => {
  const dispatch = useDispatch();

  const [positions, setPositions] = useState(
    Array.from({ length: positionsAmount }, (_, i) => i + 1)
  );

  const positionsState = useSelector(
    (state: GeneralStateInterface) => state.dates[date]
  );

  useEffect(() => {
    if (!positionsState) {
      dispatch(getPositionsByDate(date));
    }
    setPositions(Array.from({ length: positionsAmount }, (_, i) => i + 1));
  }, [date]);

  return (
    <div
      key={`${date}`}
      className="d-flex justify-content-center flex-column flex-wrap"
    >
      {positions.map((position: any) => {
        return (
          <div className="m-auto w-100 h-100 d-flex flex-row  my-1">
            <div
              key={`${date}-${position}`}
              className={`${
                positionsState?.[position]
                  ? "bg-danger w-75"
                  : "bg-success w-100"
              } ${positionsState?.[position] && isAdmin ? "w-75" : "w-100"}`}
            >
              {position}
            </div>

            {isAdmin && positionsState?.[position] && (
              <button
                onClick={(e) => {}}
                className="btn btn-danger border-danger w-auto m-auto"
              >
                Remove
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Board;
