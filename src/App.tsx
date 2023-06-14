
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserList } from './components/Users/UsersList';
import {ServicesList} from './components/Services/ServicesList'
import { UserEdit } from './components/Users/UserEdit';
import { ServiceEdit } from './components/Services/ServiceEdit';
import { PaymentList } from './components/Payments/PaymentList';


export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="user" list={UserList} edit={UserEdit}/>
        <Resource name="service" list={ServicesList}/>
        <Resource name='payment' list={PaymentList}/>
    </Admin>
);

    