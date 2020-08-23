import React from 'react';

import './RoomContainer.css';

const RoomContainer = ({ users }) => (
    <div className="textContainer">
        {
            users
                ? (
                    <div className="textInnerContainer">
                        <div className="topic">
                            <h3>Сейчас в комнате:</h3>
                        </div>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default RoomContainer;