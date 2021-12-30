import React, { useEffect, useState } from 'react';

//styles
import styles from './Landing.module.css'

//api
import { getData } from '../services/api'
import Display from './Display';


const Landing = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [firstLoad, setFirstLoad] = useState(true)
    const [random, setRandom] = useState(false)

    useEffect(() => {
        const fetchAPI = async () => {
            setData(await getData())
            setFirstLoad(false)
            setLoading(false)
        }
        fetchAPI()
    }, [random])

    const randomHandler = () => {
        setRandom(!random)
        setLoading(true)
    }

    return (
        <div className={styles.container}>
            {
                !firstLoad ?
                    <>
                        <Display
                            name={data.results[0].name}
                            picture={data.results[0].picture.large}
                            age={data.results[0].dob.age}
                            email={data.results[0].email}
                            phone={data.results[0].cell}
                            password={data.results[0].login.password}
                            street={data.results[0].location.street}
                            loading={loading}
                        />
                        <button className={styles.randomBtn} onClick={randomHandler}>{loading ? 'loading...' : 'RANDOM USER'}</button>
                    </> :
                    <div></div>
            }
        </div>
    );
};

export default Landing;