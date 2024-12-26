
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

type InfoBoxProps = {
    title: string,
    balance: string,
}
const InfoBox = ({title, balance}: InfoBoxProps) => {
  return (
    <Container maxWidth="lg" sx={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        <Typography variant="h6" color='#989898'>{title}</Typography>
        <Typography variant='h5'> ₹ {balance}</Typography>
    </Container>
  )
}

export default InfoBox