import React from 'react'
import TableData from './TableData'

const TableRow = ({data}) => {
  return (
        
            data.map(d => <TableData key={d.id} {...d}/>)
        
  )
}

export default TableRow