
import Button from '@mui/material/Button';

type BtnProps = {
    title: string,
}

const ButtonOne = ({title}: BtnProps) => {
  return (
    <Button variant="contained" 
    sx={{
        backgroundColor: '#ff652f',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
        boxShadow: 'none',
    }}
    >{title}</Button>
  )
}

export default ButtonOne;