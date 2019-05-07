import React, {Component} from 'react';
import {
    Button,
    Label,
    Input
} from 'reactstrap';

class AppSearchbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Label>Search for books</Label>
                <Input/>
                <Button color="success">Search</Button>
            </div>
        );
    }
}

export default AppSearchbar;