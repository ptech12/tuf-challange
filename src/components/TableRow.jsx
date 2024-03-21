import React, { useEffect } from 'react'
import TableData from './TableData'

const TableRow = ({data}) => {

  // console.log(newData);
  return (
        
            data.map(d => <TableData key={d.id} {...d}/>)
        
  )
}

export default TableRow