import React from "react";
import Board from "./Board";
import { useSelector } from "react-redux";
import { GeneralStateInterface, WorkFlowInterface } from "./interfaces";
import Form from "./Form";
import Link from "next/link";
const WorkFlow: React.FC<WorkFlowInterface> = ({ isAdmin }): JSX.Element => {
  const formState = useSelector((state: GeneralStateInterface) => state.form);

  return (
    <div>
      <div>
        <h1>{isAdmin ? "Welcome to admin Page" : "Wecome to user Page"}</h1>
        <Link href={`${isAdmin ? "/" : "/admin"}`}>
          <a>{`Change to ${isAdmin ? "user" : "admin"} mode`}</a>
        </Link>
      </div>
      <Board positionsAmount={8} date={formState?.date} isAdmin={isAdmin} />
      <Form formState={formState} />
    </div>
  );
};

export default WorkFlow;
