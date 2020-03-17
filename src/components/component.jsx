import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_THUMBNAILS } from "../queries/getthumbnails";
import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

function Component() {
  const { loading, error, data } = useQuery(GET_THUMBNAILS);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <Container>
      {data.photos.map((photo, key) => (
        <img key={`${photo}-${key}`} src={photo.thumbnailUrl} alt={photo.title} />
      ))}
      <h1>rags-boilerplate</h1>
    </Container>
  );
}

export default Component;
