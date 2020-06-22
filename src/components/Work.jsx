import React, { Component } from 'react';

export default function Work(base, occupation) {
    return (
        <div>
            <div className="border-bottom">
                <p className="biography"><strong>Base:</strong> {base}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Occupation:</strong> {occupation}</p>
            </div>
        </div>
    )
}