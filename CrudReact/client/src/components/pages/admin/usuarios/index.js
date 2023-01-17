import React, {useState, useEffect} from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import api from '../../../services/api';

import './usuario.cadasto.css';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import MenuAdmin from '../../../menu-admin';

import Chip from '@mui/material/Chip';

import Footer from '../../../footer-admin';

const mdTheme = createTheme();

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function UsuariosListagem() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function loadUsuarios(){
      const response = await api.get('/cliente/-1');
      setUsuarios(response.data);
    }
    loadUsuarios();
  },[]);

  async function handleDelete(USR_ID){
    const data = {
      USR_ID:USR_ID
    }
    if(window.confirm('Deseja realmente excluir este usuário?')){
      var result = await api.post('/cliente/delete',data);
      try{
        if(result.status == 201){
        window.location.href = '/admin/usuarios';
        }
      }catch(e){
        alert('error', e);
      }
    }
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
       
        <MenuAdmin title={'USUÁRIOS'}/>
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
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }} >
            <Grid container spacing={3}  marginTop={7}>
              <Grid item sm={12}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                  <Grid xs={8}>
                    <Button  variant="outlined" href={'/admin/usuarios/cadastrar'}>Novo</Button>
                  </Grid>
                  <h2>Listagem de Usuários</h2>
                  <Grid marginBottom={3} container spacing={3}>
                  <Grid item xs={12} sm={12}>
                  <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="center">Nome</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Tipo</TableCell>
                        <TableCell align="center">Data de Cadastro</TableCell>
                        <TableCell align="right">Opções</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {usuarios.map((row) => (
                        <TableRow
                          key={row.USR_ID}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="center">{row.USR_NOME}</TableCell>
                          <TableCell align="center">{row.USR_EMAIL}</TableCell>
                          <TableCell align="center">{row.USR_TIPO==1?<Chip label="Administrador" color="primary" />:<Chip label="Funcionário" color="secondary" />}</TableCell>
                          <TableCell align="center">{new Date(row.CREATED_AT).toLocaleString('pt-br')}</TableCell>
                          <TableCell align="right">
                          <ButtonGroup variant="outlined" aria-label="outlined  button group">
                            <Button color="primary" href={'/admin/usuarios/editar/'+row.USR_ID}>Atualizar</Button>
                            <Button color="error" onClick={() => handleDelete(row.USR_ID)} >Excluir</Button>
                          </ButtonGroup>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                  </Grid>
                </Grid>
              </Paper>
              </Grid>
            </Grid>
            <Footer sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
