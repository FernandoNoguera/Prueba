// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import TableCompanies from 'src/pages/components/temp-company-grid'

// import ListadoEmpresas from 'src/pages/empresas/components/ListadoEmpresas'

const Companies = () => {




  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Breadcrumbs aria-label='breadcrumb' separator={
        <Icon icon='mdi:chevron-right' fontSize={20} />}>
          <Link href='/companies'>
            Empresas
          </Link>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Listado de Empresas' titleTypographyProps={{ variant: 'h6' }} />
          <TableCompanies />
          {/* <ListadoEmpresas /> */}
        </Card>
      </Grid>
    </Grid>
  )
}

export default Companies
