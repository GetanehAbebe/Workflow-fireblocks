import type { NextPage } from "next";
import Container from "../components/Container";
import WorkFlow from "../components/WorkFlow";
const Home: NextPage = () => {
  return (
    <Container title="Dashboard">
      <WorkFlow />
    </Container>
  );
};

export default Home;
