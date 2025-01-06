import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import InfoBox from '../../atoms/InfoBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useMemo } from 'react';

const ExpenseSummary = () => {
  const youOwe = useSelector((state: RootState) => state.user.you_owe);
  const youAreOwed = useSelector((state: RootState) => state.user.you_are_owed);
  const computeTotalBalance = useMemo(() => {
      const yo = Number(youOwe);
      const yoa = Number(youAreOwed);

      return yoa - yo;
  }, [youAreOwed, youOwe]);
  return (
    <Container maxWidth="lg" sx={{marginTop: '1rem', marginBottom: '1rem'}}>
      <Stack direction="row" spacing={2}>
        <InfoBox title='total balance' balance={computeTotalBalance.toFixed(2)}/>
        <InfoBox title='you owe' balance={youOwe.toFixed(2)}/>
        <InfoBox title='you are owed' balance={youAreOwed.toFixed(2)}/>
      </Stack>
    </Container>
  )
}

export default ExpenseSummary