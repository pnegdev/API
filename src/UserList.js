import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        // Utilisation de Axios pour obtenir la liste des utilisateurs depuis l'API JSONPlaceholder
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setListOfUsers(response.data);
        })
        .catch((error) => {
            console.error('Une erreur s\'est produite :', error);
        });
    }, []);

    const borderColors = ['primary', 'success', 'danger', 'warning', 'info', 'dark'];

    return (
        <div style={{ backgroundColor: '#f0f0f0' }}>
            <h1 className='mb-5'>Liste des collaborateurs</h1>
            <div className="row mx-5">
                {listOfUsers.map((user, index) => (
                <div className="col-md-4" key={user.id}>
                    <div className={`card mb-4 border-${borderColors[index % borderColors.length]}`}>
                        <div className="card-body">
                            <h2 className="card-title mb-4">{user.name}</h2>
                            <h5 className="card-text mb-3">{user.company.name}</h5>
                            <p className="card-text">{user.phone}</p>
                            <p className="card-text">{user.email}</p>
                            <p className="card-text">{user.website}</p>
                            <p className="card-text">{user.address.suite}, {user.address.street}, {user.address.city}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;
