import React from "react";
export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
