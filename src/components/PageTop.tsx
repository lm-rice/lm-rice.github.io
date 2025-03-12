import React from "react";
import "./PageTop.css";

interface PageTopProps {
    children: React.ReactNode;
}

const PageTop: React.FC<PageTopProps> = ({ children }) => {
    return <div className="page-top">{children}</div>;
};

export default PageTop;