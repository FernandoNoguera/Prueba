// ** MUI Imports
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import LogoTemporis from 'src/pages/components/logo'

const FallbackSpinner = ({ sx }) => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <LogoTemporis />
      <h3>Cargando...</h3>
      <CircularProgress disableShrink sx={{ mt: 6 }} />
      
    </Box>
  )
}

export default FallbackSpinner
