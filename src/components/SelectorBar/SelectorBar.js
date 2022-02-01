import React from "react";
import './SelectorBar.css';

export default function SelectorBar() {
    return (
        <div className="SelectorBar">
             <nav  className="SelectorBar-nav">
                <ul>
                    <li><a href="/home" active>All</a></li>
                    <li><a href="/products">School</a></li>
                </ul>
            </nav>
        </div>
    );
  }