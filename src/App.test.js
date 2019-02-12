
import React from 'react';
import renderer from 'react-test-renderer';
import Slide from './components/Slide';
import Header from './components/Header';
import Carousel from './containers/Carousel';


test('<Slide /> renders correctly', () => {
    const data = {
        tags: "a,b,c"
    }
  const tree = renderer
    .create(<Slide data={data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('<Header /> renders correctly', () => {
  const tree = renderer
    .create(<Header />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('<Carousel /> renders correctly', () => {
  const tree = renderer
    .create(<Carousel />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('<Carousel /> component: showPrevSlide fn', () => {
    const carouselInstance = renderer.create(<Carousel />).getInstance();
    const e = { stopPropagation: jest.fn() };
    carouselInstance.showPrevSlide(e)
    expect(carouselInstance.state.active).toBe(-1)
});

test('<Carousel /> component: showNextSlide fn', () => {
    const carouselInstance = renderer.create(<Carousel />).getInstance();
    const e = { stopPropagation: jest.fn() };
    carouselInstance.showNextSlide(e)
    expect(carouselInstance.state.active).toBe(1)
});