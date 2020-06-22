import React, { Component } from 'react';

export default function Apperance(eyeColor, gender, height, hairColor, race, weight) {
    return (
        <div>
            <div className="border-bottom">
                <p className="biography"><strong>Eye Color:</strong> {eyeColor}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Gender:</strong> {gender}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Height:</strong> {height}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Hair Color:</strong> {hairColor}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Race:</strong> {race}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Weight:</strong> {weight}</p>
            </div>
        </div>
    )
}