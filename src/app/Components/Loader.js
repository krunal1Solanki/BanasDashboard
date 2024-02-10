import React from 'react';
import './loader.css';
import './bird.css'

const Loader = () => {
    return (
        <div>
            <div className="container">
                <div className="bird-container bird-container-one">
                    <div className="bird bird-one"></div>
                </div>
                <div className="bird-container bird-container-two">
                    <div className="bird bird-two"></div>
                </div>
                <div className="bird-container bird-container-three">
                    <div className="bird bird-three"></div>
                </div>
                <div className="bird-container bird-container-four">
                    <div className="bird bird-four"></div>
                </div>
                <div className="branch" style={{ '--x': 0 }}>
                    <span style={{ '--i': 0 }}></span>
                    <span style={{ '--i': 1 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 3 }}></span>
                </div>
                <div className="tree">
                    <div className="branch" style={{ '--x': 1 }}>
                        <span style={{ '--i': 0 }}></span>
                        <span style={{ '--i': 1 }}></span>
                        <span style={{ '--i': 2 }}></span>
                        <span style={{ '--i': 3 }}></span>
                    </div>
                    <div className="branch" style={{ '--x': 2 }}>
                        <span style={{ '--i': 0 }}></span>
                        <span style={{ '--i': 1 }}></span>
                        <span style={{ '--i': 2 }}></span>
                        <span style={{ '--i': 3 }}></span>
                    </div>
                    <div className="branch" style={{ '--x': 3 }}>
                        <span style={{ '--i': 0 }}></span>
                        <span style={{ '--i': 1 }}></span>
                        <span style={{ '--i': 2 }}></span>
                        <span style={{ '--i': 3 }}></span>
                    </div>
                    <div className="stem">
                        <span style={{ '--i': 0 }}></span>
                        <span style={{ '--i': 1 }}></span>
                        <span style={{ '--i': 2 }}></span>
                        <span style={{ '--i': 3 }}></span>
                    </div>
                    <span className="shadow"></span>
                </div>
            </div>
        </div>
    );
}

export default Loader;
