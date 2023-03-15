import React from "react";
import styled from "styled-components";
import banner from "../../assets/wall.jpg";

const Container = styled.div``;

const Banner = styled.div`
  height: 262px;
`;

const MoviesContainer = styled.div`
  padding: 30px;
`;

const HomeContainer = (props) => {
  const { movies } = props;
  console.log(movies);
  return (
    <Container>
      <Banner>
        <img
          src={banner}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        />
      </Banner>
      <MoviesContainer>
        <h2 style={{ color: "white", fontWeight: 400 }}>Trending</h2>
        <div></div>
      </MoviesContainer>
    </Container>
  );
};

export default HomeContainer;
