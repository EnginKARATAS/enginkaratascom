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
                            <a href="/tictactoe">TicTacToe</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
