import { Link } from 'react-router-dom';

// react-bootstrap
import { ListGroup, Dropdown, Form } from 'react-bootstrap';

// third party
import FeatherIcon from 'feather-icons-react';

// assets
import avatar2 from 'assets/images/user/avatar-2.jpg';

// -----------------------|| NAV RIGHT ||-----------------------//

export default function NavRight() {
  return (
    <ListGroup as="ul" bsPrefix=" " className="list-unstyled">
      <ListGroup.Item as="li" bsPrefix=" " className="pc-h-item">
        <Dropdown className="drp-user">
          <Dropdown.Toggle as="a" variant="link" className="pc-head-link arrow-none me-0 user-name">
            <img src={avatar2} alt="userimage" className="user-avatar" />
            <span>
              <span className="user-name">Joseph William</span>
              <span className="user-desc">Administrator</span>
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-end pc-h-dropdown">
            <Dropdown.Header className="pro-head">
              <h5 className="text-overflow m-0">
                <span className="badge bg-light-success">Pro</span>
              </h5>
            </Dropdown.Header>
            <Link to="/users/user-profile" className="dropdown-item">
              <i className="feather icon-user" /> Profile
            </Link>
            <Link to="/auth/signin-2" className="dropdown-item">
              <i className="feather icon-lock" /> Lock Screen
            </Link>
            <Link to="#" className="dropdown-item">
              <i className="material-icons-two-tone">chrome_reader_mode</i> Logout
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup.Item>
    </ListGroup>
  );
}
