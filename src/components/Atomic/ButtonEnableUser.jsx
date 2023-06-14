import * as React from 'react';
import { useUpdate , useRecordContext} from 'react-admin';
import { Button } from '@material-ui/core';
import './ButtonEnableUser.css'

export const UpdateButtonUser = () => {
    const record = useRecordContext();
    const [update] = useUpdate();
    const handleClick = () => {

      update('user',{
        id: record.id,
        data: { name: record.name , enable: !record.enable},
        previousData: record
      });
    };
  
    return (
      <button className='MuiButton-root' onClick={handleClick}>
        O
      </button>
    );
};