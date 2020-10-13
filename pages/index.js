import styled from "styled-components";
import Layout from "../components/layout/Layout";

const StyledTitle = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <Layout>
      <StyledTitle>Home</StyledTitle>
    </Layout>
  );
};

export default Home;
