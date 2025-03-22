import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// react-bootstrap
import { Card, Table, Dropdown, Form, Button } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// project import
import SimpleBar from 'simplebar-react';

// -----------------------|| User TABLE ||-----------------------//

export default function UserTable({ tableheading, rowdata }) {
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        console.log("Form Submitted");
    };

    return (
        <Card className="table-card feed-card">
            <Card.Header>
                <div className="d-flex justify-content-between align-items-start">
                    <Card.Title as="h4">Users Table</Card.Title>
                    <div>
                        <Form className="px-3" onSubmit={handleSubmit}>
                            <div className="form-group mb-0 d-flex align-items-center">
                                <Form.Control type="search" className="border-0 shadow-none" placeholder="Search here. . ." />
                                <i className="material-icons-two-tone">search</i>
                            </div>
                        </Form>
                    </div>
                </div>
            </Card.Header>
            <Card.Body className="p-0">
                <Table responsive className="mb-0">
                    <thead>
                        <tr>
                            {tableheading.map((x, i) => (
                                <th key={i}>{x}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rowdata.map((y, j) => (
                            <tr key={j}>
                                <td>{y.name}</td>
                                <td>{y.image}</td>
                                <td>
                                    <div>
                                        <label className={`badge badge-${y.status.badge}`}>{y.status.label}</label>
                                    </div>
                                </td>
                                <td>{y.price}</td>
                                <td>
                                    {y.action.map((z, k) => (
                                        <Link to={z.link} key={k}>
                                            <i className={`feather icon-${z.icon} f-16 text-${z.textcls} ${k > 0 ? 'ms-3' : ''}`} title="Action" />
                                        </Link>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

UserTable.propTypes = {
    tableheading: PropTypes.any,
    rowdata: PropTypes.any
};
