import React, { useContext} from 'react';
import { moneyContext } from './FamilyTree';

const Brother = () => {
    const [money, setMoney] = useContext(moneyContext);
    return (
        <div>
            <h2>Brother </h2>
            <button onClick={()=>setMoney(money+1000)}>Add money</button>
        </div>
    );
};

export default Brother;