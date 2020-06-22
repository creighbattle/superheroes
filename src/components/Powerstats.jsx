import React, { Component } from 'react';

export default function Powerstats(combat, durability, intelligence, power, speed, strength) {
    return (
        <div>
            <div className="border-bottom">
                <p className="biography"><strong>Combat:</strong> {combat}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Durability:</strong> {durability}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Intelligence:</strong> {intelligence}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Power:</strong> {power}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Speed:</strong> {speed}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Strength:</strong> {strength}</p>
            </div>
        </div>
    )
}