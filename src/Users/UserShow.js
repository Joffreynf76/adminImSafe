import React from 'react';
import { Show, SimpleShowLayout, TextField} from 'react-admin';

const UserTitle = ({ record }) => {
    return <span>{record ? `"${record.lastname}"` : ''}</span>;
};
const UserShow = (props) => (
    <Show title={<UserTitle/>} {...props}>
        <SimpleShowLayout>

            <TextField source="lastname" label={"Nom"} />
            <TextField source="firstname" label={"Prénom"} />
            <TextField source="address" label={"Adresse"} />
            <TextField source="city" label={"Ville"} />
            <TextField source="zip_code" label={"Code postal"} />
            <TextField source="uuid" label={"UUID"} />

        </SimpleShowLayout>
    </Show>
);

export default UserShow;
