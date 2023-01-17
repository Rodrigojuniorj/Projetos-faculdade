import React, {useState} from 'react';
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
import Button from '@mui/material/Button';
import api from '../../../services/api';
import './usuario.cadasto.css';

const mdTheme = createTheme();

export default function UsuarioCadastrar() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');

  async function handleSubmit(){
    const data = {
      USR_NOME:nome, 
      USR_EMAIL:email,
      USR_SENHA:senha,
      USR_TIPO:tipo
    }

    if(nome != '' && email != '' && senha != '' && tipo != ''){
      const response = await api.post('/cliente/cadastro',data);

      if(response.status === 201){
        window.location.href="/admin/usuarios";
      }else{
        alert('Erro ao cadastrar o usuário');
      }
    }else{
      alert('Por Favor, preencha todos os dados!');
    }
  }
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
          <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
              <Grid item sm={12} marginTop={10}>
                  <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                <Grid xs={8}>
                  <Button  variant="outlined" href={'/admin/usuarios'}>Voltar</Button>
                </Grid>
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
                    value={nome}
                    onChange={e => setNome(e.target.value)}
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                <FormControl className="selectLabel" variant="standard" >
                <InputLabel id="labelTipo">Tipo</InputLabel>
                <Select
                  labelId="labelTipo"
                  id="tipo"
                  value={tipo}
                  onChange={e => setTipo(e.target.value)}
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
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12}> 
                  <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Salvar
                  </Button>
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

