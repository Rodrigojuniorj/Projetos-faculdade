import * as React from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuAdmin from '../../../menu-admin';
import Footer from '../../../footer-admin';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './usuario.cadasto.css';

const mdTheme = createTheme();

export default function UsuarioCadastrar() {
  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
       
        <MenuAdmin title={'USUÁRIOS'} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
              <Grid item sm={12} marginTop={10}>
                  <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                <h2>Cadastro de Usuários</h2>
                <Grid marginBottom={3} container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="none"
                    name="nome"
                    label="Nome Completo"
                    fullWidth
                    autoComplete="nome"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                <FormControl className="selectLabel" variant="standard" >
                <InputLabel id="labelTipo">Tipo</InputLabel>
                <Select
                  labelId="labelTipo"
                  id="tipo"
                  // value={age}
                  // onChange={handleChange}
                  // label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Administrador</MenuItem>
                  <MenuItem value={2}>Funcionário</MenuItem>
                </Select>
              </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} > 
                  <TextField id="textoSenha"
                    type="password"
                    required
                    id="senha"
                    name="senha"
                    label="Senha"
                    fullWidth
                    autoComplete="senha"
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </Paper>
            </Grid>
            
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

