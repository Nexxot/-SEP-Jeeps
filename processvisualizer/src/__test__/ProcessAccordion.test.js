
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProcessAccordion from '../bootstrapComponents/ProcessAccordion';

describe('ProcessAccordion component', () => {
    test('renders correctly with given data', () => {
        const testData = {
          title: 'O2C',
          inside: ['P2D', 'D2R'],
          color: 'blue',
        };
      
        render(<ProcessAccordion data={testData} />);
      
        // Add assertions based on the expected output of your component
        const colorSquare = screen.getByTestId('colorSquare');
      
        // Log the entire computed style for reference
        // const computedStyle = window.getComputedStyle(colorSquare);
        // console.log('Computed Style:', computedStyle);
      
        // Check the specific background-color property
        // expect(computedStyle.getPropertyValue('background-color')).toBe('blue');
      
        // Other assertions based on your component
        expect(screen.getByText('O2C')).toBeInTheDocument();
        expect(screen.getByText('↳ P2D')).toBeInTheDocument();
        expect(screen.getByText('↳ D2R')).toBeInTheDocument();
      });
      
});
