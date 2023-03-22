import React from "react";
import styled from "styled-components";
import banner from "../../assets/wall.jpg";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Banner = styled.div`
  height: 262px;
`;

const MoviesContainer = styled.div`
  padding: 30px;
`;

const HomeContainer = (props) => {
  const { movies } = props;
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
//api.themoviedb.org/3/movie/315162?api_key=fe17c67e56783c08fb10e1d624399ba7&language=en-US
export default HomeContainer;
