import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import React from "react";

function LinkView() {
    let history = useHistory();
    if(history.location.pathname === '/calendar') {
        return <Link style={{ color: '#FFF' }} to="/auth">Log out</Link>
    }
    return '';
}

export default LinkView;