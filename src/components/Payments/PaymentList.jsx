import React from 'react';
import { List, Datagrid, TextField, EmailField, BooleanField, UrlField, DeleteButton, Filter, SearchInput } from 'react-admin';



export const PaymentList = (props) => {
  return(
    <List {...props} >
      <Datagrid bulkActionButtons={false}>
      <TextField source="id" label='Id Buy'/>
        <TextField source="nameService" label='Name Service'/>
        <TextField source="pay" label='Pay for Service'/>
        <TextField source="typeService" label='Type of Service'/>
        <TextField source="idService" label='Id Service'/>
      </Datagrid>
    </List>
  );}