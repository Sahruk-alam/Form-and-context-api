import React, { useContext } from 'react';
import { moneyContext } from './FamilyTree';

const Sister = () => {
    const [money, setMoney] = useContext(moneyContext);
    return (
        <div>
            <h2>Sister </h2>
            <button onClick={() => setMoney(money + 5000)}>add 5000 tk</button>
        </div>
    );
};

export default Sister;