import React from 'react';
import { List, Datagrid, TextField, EmailField, BooleanField, UrlField, DeleteButton, Filter, SearchInput } from 'react-admin';
import {UpdateButtonUser} from '../Atomic/ButtonEnableUser'

const UsersFilter = (props)=>(<Filter {...props}>
  <SearchInput placeholder='Search user by email' source='email' resettable alwaysOn/>
  </Filter>)

export const UserList = (props) => {
  return(
    <List {...props} filters={<UsersFilter/>}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="id" label='ID'/>
        <TextField source="name" label='User'/>
        <EmailField source="email" label='Email'/>
        <TextField source="country" label='Country'/>
        <TextField source="city" label='City'/>
        <TextField source="phone" label='Phone'/>
        <UrlField source="imageUrl" label="Avatar" />
        <BooleanField source="adminStatus" label='Admin Status'/>
        <BooleanField source="enabled" label='Active'/>
        <UpdateButtonUser label='Chance of Status' onSuccess={() => console.log('Usuario actualizado')}/>
      </Datagrid>
    </List>
  );}

