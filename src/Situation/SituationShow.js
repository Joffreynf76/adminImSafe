import React from 'react';
import {Show, SimpleShowLayout, TextField} from 'react-admin';
import PureBoolNumField from "../booleanCustom";

const SituationTitle = ({ record }) => {
    return <span>{record ? `"${record.id}"` : ''}</span>;
};
const SituationShow = (props) => (
    <Show title={<SituationTitle/>} {...props}>
        <SimpleShowLayout>

            <TextField source="idSituation" />
            <TextField source="lastname" label={'Nom'} />
            <TextField source="firstname" label={'Prénom'} />
            <TextField source="type" label={'Type'} />
            <PureBoolNumField source="is_secure" label={'En sécurité ?'} />
            <TextField source="nbr_people" label={'Nombre de personne'} />
            <TextField source="nbr_childs" label={'Nombre d\'enfants'} />
            <TextField source="nbr_babies" label={'Nombre de bébés'} />

        </SimpleShowLayout>
    </Show>
);

export default SituationShow;
