import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders warning note', () => {
  const { getByText } = render(<App />);
  expect(
    getByText(
      /Naudodamiesi šia skaičiuoklę jūs sutinkate, kad joje pateikta informacija yra skaičiuoklės autorių interpretacija, ir skaičiuoklės autoriai neneša jokios atsakomybės už šios informacijos teisingumą. Prieš priimdami sprendimus visuomet pasitikrinkite informaciją LR teisės aktuose/,
    ),
  ).toBeDefined();
});
