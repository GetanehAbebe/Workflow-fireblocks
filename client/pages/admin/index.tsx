import React from "react";
import type { NextPage } from "next";
import Container from "../../components/Container";
import WorkFlow from "../../components/WorkFlow";
const Signup: React.FC<{}> = () => {
  return <WorkFlow isAdmin={true} />;
};
const Admin: React.FC<{}> = () => {
  return <WorkFlow isAdmin={true} />;
};

export default Admin;
