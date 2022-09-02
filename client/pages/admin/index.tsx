import React from "react";
import type { NextPage } from "next";
import Container from "../../components/Container";
import WorkFlow from "../../components/WorkFlow";

const Admin: React.FC<{}> = () => {
  return <WorkFlow isAdmin={true} />;
};

export default Admin;
