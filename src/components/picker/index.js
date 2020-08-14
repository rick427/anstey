import React, {useState} from 'react';
import {StyledDiv} from './picker-styles';

import {AiOutlineMinus} from 'react-icons/ai';
import {FiPlus} from 'react-icons/fi';

export default function Picker() {
    const [amount, setAmount] = useState(0);

    const handleIncrement = () => {
        setAmount(prevState => prevState + 1);
    }

    const handleDecrement = () => {
        if(amount === 0) return;
        setAmount(prevState => prevState - 1);
    }

    return (
        <StyledDiv>
            <button onClick={handleDecrement}>
                <AiOutlineMinus className="icon"/>
            </button>

            <p>{amount}</p>

            <button onClick={handleIncrement}>
                <FiPlus className="icon"/>
            </button>
        </StyledDiv>
    )
}
