import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import InfoBox from '../../atoms/InfoBox';

const ExpenseSummary = () => {
  return (
    <Container maxWidth="lg" sx={{marginTop: '1rem', marginBottom: '1rem'}}>
      <Stack direction="row" spacing={2}>
        <InfoBox title='total balance' balance='0.00'/>
        <InfoBox title='you owe' balance='678.00'/>
        <InfoBox title='you are owed' balance='98.00'/>
      </Stack>
    </Container>
  )
}

export default ExpenseSummary