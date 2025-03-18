import React from 'react';
import { mount } from 'cypress/react';
import Placeholder from './Placeholder';

describe('<Placeholder />', () => {
  it('renders the component correctly', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<Placeholder />);

    // Check if the component exists
    cy.get('[data-testid="placeholder"]').should('exist');

    // Check if the text content is correct
    cy.get('[data-testid="placeholder"]').should(
      'have.text',
      'Hello, Clarity Queue!'
    );
  });
});
