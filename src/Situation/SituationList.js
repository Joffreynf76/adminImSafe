import React from 'react';
import { List, Datagrid, TextField} from 'react-admin';
import PureBoolNumField from "../booleanCustom";

const SituationList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="idSituation" />
            <TextField source="lastname" label={'Nom'} />
            <TextField source="firstname" label={'Prénom'} />
            <TextField source="type" label={'Type'} />
            <PureBoolNumField source="is_secure" label={'En sécurité ?'} />
            <TextField source="nbr_people" label={'Nombre de personne'} />
            <TextField source="nbr_childs" label={'Nombre d\'enfants'} />
            <TextField source="nbr_babies" label={'Nombre de bébés'} />


        </Datagrid>
    </List>
);

export default SituationList;
