import React from 'react';
import { List, Datagrid, TextField, EmailField, BooleanField, UrlField, Filter, SearchInput } from 'react-admin';
import { UpdateButton } from '../Atomic/ButtonEnable';

const ServicesFilter = (props)=>(<Filter {...props}>
<SearchInput placeholder='Search Service' source='nameService' resettable alwaysOn/>
</Filter>)


export const ServicesList = (props) => {
  
  console.log('estas son mis props del listservice: ',props);

  return(
    <List {...props} filters={<ServicesFilter/>}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="id" label='ID' />
        <TextField source="nameService" label='Name'/>
        <TextField source="location" label='Location'/>
        <TextField source="description" label='Description'/>
        <TextField source="pricePerHour" label='Price per Hour'/>
        <TextField source="typeService" label='Ty of Service'/>
        <TextField source="reviews" />
        <UrlField source="imageUrl" label="Avatar" />
        <TextField source='nameUserService'label='Professional'/>
        <EmailField source='emailUserService' label='Email Professional'/>
        <BooleanField source="enabledS" label='Active'/>
        <UpdateButton onSuccess={() => console.log('Servicio actualizado')}/>
      </Datagrid>
    </List>
)};
  