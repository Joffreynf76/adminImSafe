import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';


 const UsersList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="lastname" label={'Nom'} />
            <TextField source="firstname" label={'Prénom'} />
            <TextField source="uuid" label={'UUID'} />

        </Datagrid>
    </List>
);

export default UsersList;
