import React from 'react';
import {Edit, SimpleForm, TextInput, SelectInput} from 'react-admin'

export const ServiceEdit=(props)=>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='name'/>
        </SimpleForm>
    </Edit>
)