import React from 'react'


const PatientItem = ({
  name,
  age,
  address,
  dob,
  dod,
  id
}) => {

  return (
<tr>
  <th scope="row"></th>
  <td>{name}</td>
  <td>{age}</td>
  <td>{address}</td>
  <td>{dob}</td>
  <td>{dod}</td>
  <td>{id}</td>
</tr>
  )
}

export default  PatientItem


