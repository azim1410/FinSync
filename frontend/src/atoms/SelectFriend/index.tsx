import { Button } from '@mui/material'
import React from 'react'

type BtnProps = {
    title: string | null,
}

const SelectFrndBtn = ({title} : BtnProps) => {
  return (
    <Button variant="outlined" sx={{color:'#9be0c3', borderColor:'#9be0c3'}}>{title}</Button>
  )
}

export default SelectFrndBtn