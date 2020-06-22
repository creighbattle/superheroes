import React, { Component } from 'react';

export default function Connections(groupAffiliations, relatives) {
    return (
        <div>
            <div className="border-bottom">
                <p className="biography"><strong>Group Affiliations:</strong> {groupAffiliations}</p>
            </div>
            <div className="border-bottom">
                <p className="biography"><strong>Relatives:</strong> {relatives}</p>
            </div>
        </div>
    )
}