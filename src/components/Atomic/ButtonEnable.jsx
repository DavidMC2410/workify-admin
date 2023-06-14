import * as React from 'react';
import { useUpdate , useRecordContext} from 'react-admin';
import { Button } from '@material-ui/core';
import './ButtonEnableUser.css'

export const UpdateButton = () => {
    const record = useRecordContext();
    const [update] = useUpdate();
    const handleClick = () => {

      update('service',{
        id: record.id,
        data: { nameService: record.nameService , enableS: !record.enableS},
        previousData: record
      });
    };
  
    return (
      <button className='MuiButton-root' onClick={handleClick}>
      O
      </button>
    );
};