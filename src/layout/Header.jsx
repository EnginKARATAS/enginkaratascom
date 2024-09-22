import React from "react";

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <a href="/homepage">Home</a>
                        </li>
                        <li>
                            <a href="/todo">Todo</a>
                        </li>
                        <li>
                            <a href="/features">Features</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
