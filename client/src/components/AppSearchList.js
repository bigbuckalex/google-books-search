import React, {Component} from 'react';
import AppSearchBar from './AppSearchbar';

class AppSearchList extends Component {
    state = {
        books: []
    }

    render() {
        return(
            <div>
                <AppSearchBar/>
                
            </div>
        );
    }
}

export default AppSearchList;