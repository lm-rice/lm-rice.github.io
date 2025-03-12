import React from 'react';
import PageTop from "./PageTop";
import "./NotFound.css";

const NotFound: React.FC = () => {
    return (
        <PageTop>
            <svg
                className="not-found-svg"
                viewBox="0 0 300 100"
                width="300"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="64"
                    fontFamily="monospace"
                    fill="#333"
                    shapeRendering="crispEdges"
                >
                    404
                </text>
            </svg>
            <p className="not-found-message">Page Not Found</p>
        </PageTop>
    );
};

export default NotFound;