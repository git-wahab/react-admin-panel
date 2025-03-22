// react-bootstrap
import { Row, Col, Card } from 'react-bootstrap';
import UserTable from '../../components/Widgets/UserTable';
import userData from 'data/userTableData'


const UsersComponent = () => {
    return <UserTable {...userData}/>
};

export default UsersComponent;
