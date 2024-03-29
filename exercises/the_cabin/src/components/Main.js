import React from 'react';
import hotel from '../img/hotel.jpg';
import room from '../img/room.jpg';
import view from '../img/view.jpg';
import styled from 'styled-components';
import logo from '../img/wave2.svg';
const Main = (props) => {
  return (
    <Container>
      <Wave src={logo} />
      <Title>The Beach</Title>
      <Location>Laguna Beach, California</Location>
      <MainImage src={hotel} alt='' />
      <SecondaryImages>
        <Image src={room} alt='inside the cabin' />
        <Image src={view} alt='bed' />
      </SecondaryImages>
      <Description imgUrl={'wave2.svg'}>
        Step out onto the semiprivate balcony with amazing ocean views Situated
        on prime oceanfront property, you'll experience peace and ultimate
        relaxation with breathtaking ocean views and miles of sandy beaches in a
        furnished 1929 vintage small studio and bath. Enjoy listening to the
        ocean waves as you sleep on a full bed perfect for the solo traveler or
        the couple that wants to be cozy.
      </Description>
      <Btn>Book now</Btn>
    </Container>
  );
};

export default Main;

const Container = styled.main`
  @media (min-width: 800px) {
    grid-column: 2/-1;
    display: grid;
    /* moving to the left side  subgrid of the parent grid*/
    grid-template-columns: subgrid;
    /* makes rows as small as possible */
    grid-auto-rows: min-content;
    /* fills in missing spaces */
    grid-auto-flow: dense;
    ::after {
      content: '';
      position: absolute;
      background-color: var(--clr-bg-light);
      top: 0;
      bottom: 0;
      left: -2em;
      right: -2em;
      grid-column: 3/5;
      z-index: -10;
    }
  }
  @media (min-width: 1200px) {
    ::after {
      /* shrink down */
      grid-column: 3/4;
    }
  }
`;

const Title = styled.h1`
  color: var(--clr-accent);
  text-transform: uppercase;
  margin: 0;
  line-height: 1;
  /* The min: I don't want it to get smaller than this. max: I don't want it to get bigger than this. The middle part is where it is dynamic. */
  /* font-size: clamp(3rem, 10vw, 12rem); */
  font-size: 3rem;
  @media (min-width: 800px) {
    grid-column: 1/3;
    /* overlap 1 */
    grid-row: 1;
    font-size: 10vw;
  }
  @media (min-width: 1200px) {
    font-size: 10rem;
  }
`;

const Location = styled.p`
  color: var(--clr-icons);
  margin: 0;
  font-size: 1.5 rem;
  margin-bottom: 1.5em;

  @media (min-width: 800px) {
    grid-column: 1/2;
  }
`;

const MainImage = styled.img`
  max-width: 100%;
  grid-column: 2/-1;
  /* overlap 2 */
  grid-row: 1 / span 4;
  z-index: -1;
  height: 100%;
  /* cant be taller than 500px */
  max-height: 500px;
  /* chooses the smallest between 2 sizes so image stops growing */
  width: min(100%, 1000px);
  /* prevents the image from stretching on screen size */
  object-fit: cover;
`;

const Image = styled.img`
  /* so images stay on the page */
  max-width: 100%;
`;

const Description = styled.p`
  /* background-image: url('${(props) => props.imgUrl || 'wave2.svg'}');
  background-repeat: no-repeat ;
  background-size: cover;
  background-position: center; */

  @media (min-width: 800px) {
    grid-column: 1/2;
  }
  ::after {
    /* content: '01'; */
    /* font-size: 50vw; */
    position: absolute;
    opacity: 0.03;
    z-index: -100;
    line-height: 1;
    /*     grid-column: 1 / 3; */
    left: -0.15em;
    top: 0;
  }
`;

const SecondaryImages = styled.div`
  display: flex;
  gap: 0.5em;

  @media (min-width: 800px) {
    grid-column: 2/4;
    margin-top: 4em;
  }

  @media (min-width: 1200px) {
    grid-column: 2/3;
  }
`;

const Btn = styled.button`
  cursor: pointer;
  display: inline-block;
  border: 0;
  /* outline: 2px solid red; */
  background: transparent;
  color: var(--clr-text);
  font-size: 1.125rem;
  padding: 0.5rem;
  position: relative;
  /* prevents the button from stretching */
  align-self: start;
  justify-self: start;

  /* add effects */
  ::after {
    content: '';
    position: absolute;
    background: var(--clr-accent);
    height: 0.85em;
    width: 75%;
    left: 0;
    top: 50%;
    z-index: -1;
    /* speed of the effect */
    transition: transform 175ms cubic-bezier(0.91, 0, 0.55, 1.64);
    /* effect starts from */
    transform-origin: bottom left;
  }
  /* hover and focus effect */
  :hover::after,
  :focus::after {
    /* moves up and left and right */
    transform: scale(1.35, 1.85);
  }
`;

const Wave = styled.img`
  height: 50vw;
  width: 40vw;
  position: absolute;
  z-index: -100;
  line-height: 1;
  /*     grid-column: 1 / 3; */
  left: -0.15em;
  top: 0;
  opacity: 0.3;
  /* margin-bottom:; */
`;
