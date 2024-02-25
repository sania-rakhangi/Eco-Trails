import React from 'react';
import styles from './styles.module.css';

const List = () => {
    return (
        <div className = {styles.sidebar}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" />
        <br/>
        <div className = {styles.tab}>
            <button className = {styles.button} ><i className="material-symbols-outlined">directions_car</i></button>
            <button className = {styles.button} ><i className="material-symbols-outlined">two_wheeler</i></button>
            <button className = {styles.button} ><i className="material-symbols-outlined">directions_bus</i></button>
            <button className = {styles.button} ><i className="material-symbols-outlined">train</i></button>
            <button className = {styles.button} ><i className="material-symbols-outlined">directions_walk</i></button>
            <button className = {styles.button} ><i className="material-symbols-outlined">directions_bike</i></button>
            <button className = {styles.button} ><i className="material-symbols-outlined">flight</i></button>
        </div>
        <br/>
        <div className = {styles.middle}>
            <div className = {styles.icons}>
                <i className="material-symbols-outlined">circle</i>
                <i className="material-symbols-outlined">more_vert</i>
                <i className="material-symbols-outlined" id="location">location_on</i>
            </div>
            <div className = {styles.search}>
                <input type="text" placeholder="Starting point" className={styles.input}/>
                <br/>
                <input type="text" placeholder="Destination" className={styles.input}/>
            </div>
            <div className = {styles.swap}>
                <button className = {styles.button}><i className="material-symbols-outlined">swap_vert</i></button>
            </div>
        </div>
        <br/>
        <div className = {styles.info}>
            <div className = {styles.properties}>
                <i className="material-symbols-outlined">barefoot</i>
                <p>Carbon Footprint: <br/><b>41g</b></p>
            </div>
            <div className = {styles.properties}>
                <i className="material-symbols-outlined">monetization_on</i>
                <p>Cost of Travel: <br/><b>₹200</b></p>
            </div>
            <div className = {styles.properties}>
                <i className="material-symbols-outlined">schedule</i>
                <p>Time Taken: <br/><b>30 min</b></p>
            </div>
            <div className = {styles.properties}>
                <i className="material-symbols-outlined">mode_of_travel</i>
                <p>Suggested Mode of Travel: <br/><b>Train</b></p>
            </div>
            <div className = {styles.properties}>
                <i className="material-symbols-outlined">trending_down</i>
                <p>Decrese in Carbon Emissions: <br/><b>24%</b></p>
            </div>
            <div className = {styles.properties}>
                <i className="material-symbols-outlined">database</i>
                <p>Coins Earned: <br/><b>10</b></p>
            </div>
        </div>
        
    </div>

    );
}

export default List;