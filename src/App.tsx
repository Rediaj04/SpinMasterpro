import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Paper,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
  Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CasinoIcon from '@mui/icons-material/Casino';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import CasinoTwoToneIcon from '@mui/icons-material/CasinoTwoTone';
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';
import CasinoSharpIcon from '@mui/icons-material/CasinoSharp';
import Casino from '@mui/icons-material/Casino';

const colores = [
  '#00bcd4', // Cyan
  '#ffb300', // Amarillo vibrante
  '#ff7043', // Naranja coral
  '#ab47bc', // Violeta pastel
  '#29b6f6', // Azul claro
  '#66bb6a', // Verde suave
  '#ffd54f', // Amarillo pastel
  '#ec407a', // Rosa vibrante
  '#26a69a', // Verde agua
  '#ffa726', // Naranja pastel
  '#7e57c2', // Morado suave
  '#8d6e63', // Marrón claro
];

const defaultEntradas = [
  'Paris', 'Singapur', 'Roma', 'Berlin', 'Washington', 'Buenos Aires',
  'Lima', 'Tokio', 'Estocolmo', 'Bangkok', 'Madrid', 'Londres', 'Montevideo', 'Pekin', 'Santo Domingo'
];

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [entradas, setEntradas] = useState(defaultEntradas);
  const [nuevaEntrada, setNuevaEntrada] = useState('');
  const [openEntradas, setOpenEntradas] = useState(true);

  const data = entradas.map((option, i) => ({
    option,
    style: {
      backgroundColor: colores[i % colores.length],
      textColor: '#fff'
    }
  }));

  const handleSpinClick = () => {
    if (!mustSpin && entradas.length > 1) {
      const newPrizeNumber = Math.floor(Math.random() * entradas.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  const handleStopSpinning = () => setMustSpin(false);
  const handleAddEntrada = () => {
    if (nuevaEntrada.trim()) {
      setEntradas([...entradas, nuevaEntrada.trim()]);
      setNuevaEntrada('');
    }
  };
  const handleDeleteEntrada = (index: number) => {
    setEntradas(entradas.filter((_, i) => i !== index));
  };
  const handleOrdenar = () => {
    setEntradas([...entradas].sort((a, b) => a.localeCompare(b)));
  };
  const handleMezclar = () => {
    setEntradas([...entradas].sort(() => Math.random() - 0.5));
  };
  const handleLimpiar = () => {
    setEntradas([]);
  };

  // Colores y estilos de la referencia
  const darkBg = '#181c24';
  const darkPanel = '#23283a';
  const accent = '#00bcd4'; // Cyan
  const accent2 = '#ff7043'; // Naranja coral
  const textMain = '#fff';
  const textSec = '#b0b8c1';
  const btnGuardar = '#00bcd4'; // Cyan
  const btnComenzar = '#ff7043'; // Naranja coral
  const ganadorColor = '#00bcd4';

  return (
    <Box sx={{ minHeight: '100vh', background: darkBg }}>
      {/* Header */}
      <AppBar position="static" elevation={0} sx={{ background: '#23283a', color: textMain, borderBottom: 'none', px: 0 }}>
        <Toolbar sx={{ justifyContent: 'flex-start', minHeight: 64, px: { xs: 1, md: 6 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Logo de dado */}
            <Box sx={{ width: 36, height: 36, background: accent, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
              <CasinoRoundedIcon sx={{ color: '#181c24', fontSize: 28 }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 1, color: textMain }}>
              SorteosFast
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Título principal */}
      <Container maxWidth="lg" sx={{ mt: 5, mb: 2, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, color: textMain, letterSpacing: -1, fontSize: { xs: 32, md: 44 } }}>
          La Ruleta Aleatoria
        </Typography>
        <Typography variant="h6" sx={{ color: textSec, mb: 3, fontWeight: 400, fontSize: { xs: 16, md: 20 } }}>
          ¡Gira la ruleta y obtiene tus ganadores al azar!
        </Typography>
      </Container>

      {/* Contenido principal */}
      <Container maxWidth="xl" sx={{ mt: { xs: 2, md: 5 }, mb: 2 }}>
        <Box sx={{ 
          display: 'flex', 
          gap: { xs: 2, md: 5 }, 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' }, 
          justifyContent: 'center' 
        }}>
          {/* Panel lateral izquierdo compacto */}
          <Paper sx={{ 
            width: { xs: '100%', md: 320 }, 
            minWidth: { xs: 'auto', md: 220 }, 
            borderRadius: 4, 
            background: darkPanel, 
            color: textMain, 
            p: 2, 
            boxShadow: '0 4px 24px 0 #0002', 
            mb: 2 
          }}>
            {/* Entradas */}
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mb: 1 }} onClick={() => setOpenEntradas(!openEntradas)}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, flex: 1, fontSize: 18 }}>Entradas ({entradas.length})</Typography>
              {openEntradas ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Box>
            <Collapse in={openEntradas}>
              <Divider sx={{ my: 1, borderColor: '#222' }} />
              <Box sx={{ px: 0, py: 0 }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Button variant="outlined" size="small" onClick={handleOrdenar} sx={{ fontWeight: 700, minWidth: 0, px: 1.5, borderColor: accent, color: accent, textTransform: 'uppercase', fontSize: 13, borderRadius: 1, '&:hover': { borderColor: accent2, color: accent2 } }}>Ordenar</Button>
                  <Button variant="outlined" size="small" onClick={handleMezclar} sx={{ fontWeight: 700, minWidth: 0, px: 1.5, borderColor: accent, color: accent, textTransform: 'uppercase', fontSize: 13, borderRadius: 1, '&:hover': { borderColor: accent2, color: accent2 } }}>Mezclar</Button>
                  <Button variant="outlined" size="small" onClick={handleLimpiar} sx={{ fontWeight: 700, minWidth: 0, px: 1.5, borderColor: accent, color: accent, textTransform: 'uppercase', fontSize: 13, borderRadius: 1, '&:hover': { borderColor: accent2, color: accent2 } }}>Limpiar</Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Agregar entrada"
                    value={nuevaEntrada}
                    onChange={e => setNuevaEntrada(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAddEntrada()}
                    sx={{
                      input: { color: textMain },
                      label: { color: textSec },
                      '& .MuiOutlinedInput-root': {
                        background: darkPanel,
                        color: textMain,
                        borderRadius: 1,
                      },
                      '& .MuiInputLabel-root': { color: textSec },
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: '#333' },
                    }}
                  />
                  <Button variant="contained" size="small" onClick={handleAddEntrada} sx={{ background: accent, fontWeight: 700, minWidth: 0, px: 1.5, color: '#181c24', borderRadius: 1, boxShadow: 'none', '&:hover': { background: accent2, color: '#fff' } }}>
                    <AddIcon fontSize="small" />
                  </Button>
                </Box>
                <List dense sx={{ maxHeight: 140, overflow: 'auto', border: '1px solid #222', borderRadius: 1, bgcolor: darkPanel, fontSize: 15, color: textMain }}>
                  {entradas.map((item, i) => (
                    <ListItem key={i} secondaryAction={
                      <IconButton edge="end" size="small" onClick={() => handleDeleteEntrada(i)} sx={{ color: accent }}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    }>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Collapse>
            {/* Botones grandes */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button variant="contained" sx={{ background: btnGuardar, fontWeight: 700, flex: 1, py: 1.2, fontSize: 17, color: '#181c24', borderRadius: 1, boxShadow: 'none', '&:hover': { background: accent2, color: '#fff' } }}>GUARDAR</Button>
              <Button variant="contained" sx={{ background: btnComenzar, fontWeight: 700, flex: 1, py: 1.2, fontSize: 17, borderRadius: 1, boxShadow: 'none', '&:hover': { background: btnGuardar, color: '#181c24' } }} onClick={handleSpinClick} disabled={mustSpin || entradas.length < 2}>COMENZAR</Button>
            </Box>
          </Paper>

          {/* Panel ruleta compacto */}
          <Paper sx={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            background: darkPanel, 
            borderRadius: 4, 
            minHeight: { xs: 380, md: 540 }, 
            maxWidth: { xs: '100%', md: 540 }, 
            mx: 'auto', 
            boxShadow: '0 4px 24px 0 #0002',
            p: { xs: 2, md: 4 },
            position: 'relative',
          }}>
            <Box sx={{
              width: { xs: 280, sm: 340, md: 400 },
              height: { xs: 280, sm: 340, md: 400 },
              maxWidth: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 2
            }}>
              {entradas.length > 0 ? (
                <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={data}
                  onStopSpinning={handleStopSpinning}
                  backgroundColors={['#f5f5f7']}
                  textColors={['#fff']}
                  outerBorderColor={'#fff'}
                  outerBorderWidth={8}
                  innerBorderColor={'#181c24'}
                  innerBorderWidth={6}
                  innerRadius={0}
                  radiusLineColor={accent}
                  radiusLineWidth={4}
                  fontSize={20}
                  perpendicularText={false}
                  textDistance={60}
                />
              ) : (
                <Typography variant="h5" sx={{ 
                  color: accent, 
                  textAlign: 'center',
                  fontSize: { xs: 18, md: 24 }
                }}>
                  Agrega al menos una entrada para mostrar la ruleta
                </Typography>
              )}
            </Box>
            {!mustSpin && entradas.length > 1 && (
              <Typography variant="h4" sx={{ 
                fontWeight: 700, 
                color: ganadorColor, 
                mt: 2, 
                fontSize: { xs: 20, md: 28 }, 
                textAlign: 'center' 
              }}>
                Ganador: {entradas[prizeNumber]}
              </Typography>
            )}
          </Paper>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ mt: 5, py: 2, textAlign: 'center', borderTop: '1px solid #23283a', color: textSec, fontSize: 15, background: '#23283a' }}>
        © 2025 SorteosFast - Inspirado en appsorteos.com
      </Box>
    </Box>
  );
}

export default App;
