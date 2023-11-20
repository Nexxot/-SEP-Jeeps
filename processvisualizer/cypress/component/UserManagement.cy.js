// UserTable.spec.js
import React from 'react';
import { render, screen } from '@testing-library/react';

import UserTable from '../../src/bootstrapComponents/UserManagement'; // Adjust the path to your UserTable component

describe('<UserTable />', () => {
  it('should add a new user', () => {
    render(<UserTable />);
    //TODO WTF does UserTable do??
    
  });
});


