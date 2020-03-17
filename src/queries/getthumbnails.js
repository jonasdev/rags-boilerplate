import gql from "graphql-tag";

export const GET_THUMBNAILS = gql`
  query photosQuery {
    photos @rest(type: "photo", path: "albums/1/photos") {
      title
      thumbnailUrl
    }
  }
`;
