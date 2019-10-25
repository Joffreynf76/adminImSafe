import React from 'react';
import { Admin, Resource } from 'react-admin';
import user from './Users';
import situation from './Situation';
import Dashboard from "./Dashboard";

import dataProvider from './dataProvider';



const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
             <Resource {...user} name="users/all" />
             <Resource {...situation} name="situation/all"/>
    </Admin>
    );

export default App;
