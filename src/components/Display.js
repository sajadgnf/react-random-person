import React, { useState } from 'react';

// styles
import styles from "./Display.module.css"

//icons
import { FaUserAlt, FaCalendarCheck, FaMap, FaPhone, FaLock } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io"

const Display = ({ name, picture, age, email, password, street, phone }) => {

    const person = {
        name: `${name.first} ${name.last}`,
        email,
        age,
        street: `${street.number} ${street.name}`,
        phone,
        password,
    }

    const [label, setLabel] = useState('name')
    const [value, setValue] = useState(person.name)

    const valueHandler = (event) => {

        const label = event.target.dataset.label

        if (event.target.nodeName === "BUTTON") {
            setLabel(label)
            setValue(person[label])
        }
    }

    return (
        < div className={styles.content} >
            <div className={styles.imageContainer}>
                <img src={picture} alt="random person" />
            </div>
            
            <div>
                <p className={styles.title}>My {label} is</p>
                <p className={styles.info}>{value}</p>
            </div>

            <div>
                <button className={styles.icon} data-label='name' onMouseOver={valueHandler}>
                    <FaUserAlt />
                </button>
                <button className={styles.icon} data-label='email' onMouseOver={valueHandler}>
                    <IoMdMail />
                </button>
                <button className={styles.icon} data-label='age' onMouseOver={valueHandler}>
                    <FaCalendarCheck />
                </button>
                <button className={styles.icon} data-label='street' onMouseOver={valueHandler}>
                    <FaMap />
                </button>
                <button className={styles.icon} data-label='phone' onMouseOver={valueHandler}>
                    <FaPhone />
                </button>
                <button className={styles.icon} data-label='password' onMouseOver={valueHandler}>
                    <FaLock />
                </button>
            </div>
        </div>
    );
};

export default Display;