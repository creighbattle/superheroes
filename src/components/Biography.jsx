import React, { Component } from 'react';

export default function Biography(fullName, placeOfBirth, alignment, aliases, alterEgos, firstApperance, publisher) {
    return (
        <div>
            <div className="border-bottom">
                <p className="biography"><strong>Full Name:</strong> {fullName}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Place of birth:</strong> {placeOfBirth}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Alignment:</strong> {alignment}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Aliases:</strong> {aliases}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Alter Egos:</strong> {alterEgos}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>First Appearance:</strong> {firstApperance}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Publisher:</strong> {publisher}</p>
            </div>
        </div>
    )
}