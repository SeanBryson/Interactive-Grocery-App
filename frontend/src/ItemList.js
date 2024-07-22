import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await axios.get('http://localhost:5000/items');
        setItems(response.data);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/create', { text });
            setText('');
            fetchItems();  // Refresh the items after adding a new one
        } catch (error) {
            console.error('Failed to add item:', error);
        }
    };
    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/items/${id}`);
            fetchItems();  // Refresh the items after deletion
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };


    return (
        <div>
            <h2 className="mb-3">Items List</h2>
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="input-group">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="form-control"
                        placeholder="Add new item"
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.text}
                        <button onClick={() => handleDelete(item.id)} className="btn btn-danger btn-sm">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;