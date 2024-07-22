import React from 'react';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const App = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Shopping List</h1>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <ItemList />
                </div>
            </div>
        </div>
    );
};

export default App;

