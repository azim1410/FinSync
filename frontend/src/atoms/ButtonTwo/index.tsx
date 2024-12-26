
import Button from '@mui/material/Button';

type BtnProps = {
  title: string,
}

const ButtonTwo = ({title}: BtnProps) => {
  return (
    <Button variant="contained" 
    sx={{
        backgroundColor: '#5bc5a7',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
        boxShadow: 'none',
    }}
    >{title}</Button>
  )
}

export default ButtonTwo