import React from 'react';
import {Edit, SimpleForm, TextInput, SelectInput} from 'react-admin'

export const UserEdit=(props)=>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='name'/>
            <TextInput disabled source='email'/>
            <TextInput source='country'/>
            <TextInput source='city'/>
            <TextInput source='phone'/>
            <TextInput source='adminStatus'/>
            <TextInput source='description'/>
            <TextInput disabled source='paypalEmail'/>
            <SelectInput source='enabled' choices={[{ id: true, name: 'Enabled' },{ id: false, name: 'Disabled' },]} />
        </SimpleForm>
    </Edit>
)