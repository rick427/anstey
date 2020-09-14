import styled from "styled-components";
import colors from "../../utils/colors";

export const StyledNav = styled.nav`
  position: fixed;
  background: ${colors.primary};
  transition: width 200ms;
  overflow: hidden;
  z-index: 10000;

  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: #ddd;
    background: ${colors.pastelGreen};
    font-size: 1.5rem;
    letter-spacing: 0.3ch;
    width: 100%;

    .app-logo {
      transform: rotate(0deg);
      transition: transform 600ms;
    }

    .app-logo-text {
      font-weight: 300;
      margin-left: 2rem;
    }
  }

  .nav-item {
    width: 100%;
    position: relative;

    :not(:last-child) {
      margin: 1rem 0;
    }

    :last-child {
      margin-top: auto;
    }

    :hover .dropdown {
      opacity: 1;
      visibility: visible;
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: white;
    text-decoration: none;
    filter: greyscale(100%) opacity(0.7);
    transition: all 600ms;
    cursor: pointer;
    position: relative;

    .badge {
      /* padding: 1rem; */
      position: absolute;
      top: -5%;
      left: 90%;
      transform: translate(-90%, 5%);
      width: 2.2rem;
      height: 2.2rem;
      background: ${colors.red};
      color: #fff;
      border-radius: 50px;
      font-size: 1rem;
      text-align: center;
      font-weight: 600;

      .val {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    span {
      display: block;
      min-width: 2rem;
      margin: 0 1.5rem;
      font-size: 1.8rem;
    }

    .app-logo-text {
      margin-top: 1.5rem;
    }

    :hover {
      filter: greyscale(0%) opacity(1);
      background: ${colors.offGreenAlt};
      color: ${colors.offGreen};
    }
  }

  .link-text {
    display: none;
    margin-top: 1rem;
    margin-left: 2rem;
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  :hover .app-logo {
    transform: rotate(-180deg);
  }

  /* Large screens */
  @media only screen and (min-width: 600px) {
    top: 0;
    width: 5rem;
    height: 100vh;

    :hover {
      width: 20rem;
      box-shadow: 4px 0 5px rgba(0, 0, 0, 0.15);

      .nav-link {
        .badge {
          top: 0%;
          left: 15%;
          transform: translate(-15%, 0%);
        }
      }
    }

    :hover .link-text {
      display: inline;
      transition: opacity 600ms;
    }
  }

  .info {
    height: 50vh;
  }

  /* Small screens */
  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
    overflow-x: scroll;

    .navbar-nav {
      flex-direction: row;
    }

    .nav-link {
      justify-content: center;

      .badge {
        top: 0;
        left: 40%;
        transform: translate(40%, 0);
      }
    }

    .logo {
      display: none;
    }
  }
`;
