import { Box } from '@mui/material';
import * as React from 'react';
import NavBar from '../components/NavBar';

export interface ILoginProps {
}

export default class Login extends React.Component<ILoginProps> {
  public render() {
    return (
      <Box>
        <NavBar />
        <p> Login Page </p>
      </Box>
    );
  }
}
