import styled from "styled-components";
// import colors from "../../utils/colors";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  width: 30rem;
  height: 35rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;

  .image {
    width: 100%;
    height: 18rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      backface-visibility: hidden;
      transition: all 800ms ease;
    }
  }

  .flex {
    padding: 1rem;
    height: 12rem;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    align-items: center;

    .title {
      font-size: 1.35rem;
      font-weight: 400;
      color: #555;
      text-align: center;
      width: 80%;
    }

    .price {
      font-weight: 600;
      color: #555;
      text-align: center;
    }
  }

  :hover {
    .image {
      img {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
  }
`;
