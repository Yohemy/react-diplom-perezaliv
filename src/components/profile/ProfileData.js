import Avatar from '@material-ui/core/Avatar';
import Popper from '@material-ui/core/Popper';
import Tooltip from '@material-ui/core/Tooltip'
import {useHistory} from "react-router-dom";
import React from 'react';

export default function ProfileData(props) {
    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    if(history.location.pathname === '/calendar') {
        return (
            <div className="profile-data">
                <Avatar
                    aria-describedby={id}
                    type="button"
                    onClick={handleClick}
                    alt={props.full_name}
                    src={props.avatar} />
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <div className="popper-wrap">
                        <span>Username: {props.username}</span>
                        <span>Email: {props.email}</span>
                        <span>Phone number: {props.phone}</span>
                    </div>
                </Popper>
                <Tooltip title={`Username: ${props.username}`}>
                    <div className="profile-data__username">{props.full_name}</div>
                </Tooltip>
            </div>
        )
    }
    return '';
}

