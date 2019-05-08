import React from 'react';
import {
    Button,
    Label,
    Input
} from 'reactstrap';

const AppSearchbar = ({query, handleInput, handleSubmit}) => {
    return(
        <div>
            <Label>Search for books</Label>
            <Input onChange={handleInput} value={query}/>
            <Button onClink={handleSubmit} color="success">Search</Button>
        </div>
    );
}

export default AppSearchbar;