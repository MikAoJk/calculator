'use client'
import {useState} from "react";

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (value: string) => {
        if (value === '=') {
            try {
                setResult(eval(result) || '');
            } catch (error: unknown) {
                console.error(error)
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
        } else if (value === 'CE') {
            setResult(result.slice(0, -1));
        } else {
            setResult(result + value);
        }
    };

    return (
        <div>
            <h2 className="text-center font-bold text-[green] text-4xl mt-10 mb-6">Calculator App</h2>
            <div className="max-w-[400px] mx-[auto] my-[0] p-[20px] bg-[#f9f9f9] rounded-[10px] [box-shadow:0_2px_4px_rgba(0,_0,_0,_0.1)]">

                <input type="text" className="w-full text-black p-[10px] mb-[10px] text-[24px] text-right border-[none] border-b-[1px_solid_#ccc] outline-[none] bg-[#fff]"
                       value={result} readOnly />
                <div className="grid grid-cols-[repeat(4,_1fr)] gap-[10px]">
                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('7')}>7</button>
                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('8')}>8</button>
                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('9')}>9</button>
                    <button className="text-[1.5rem] font-bold bg-[#f0f0f0] text-[#f0a500] hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('CE')}>CE</button>


                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('4')}>4</button>
                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('5')}>5</button>
                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('6')}>6</button>
                    <button className="text-[1.5rem] font-bold bg-[#f0f0f0] text-[#f0a500] hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('/')}>/</button>


                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('1')}>1</button>
                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('2')}>2</button>
                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('3')}>3</button>
                    <button className="text-[1.5rem] font-bold bg-[#f0f0f0] text-[#f0a500] hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('*')}>*</button>


                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('0')}>0</button>
                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('.')}>.</button>
                    <button className="bg-[#f0f0f0] text-black hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('00')}>00</button>

                    <button className="text-[1.5rem] font-bold bg-[#f0f0f0] text-[#f0a500] hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('-')}>-</button>
                    <button className="text-[1.5rem] font-bold bg-[#f0f0f0] text-[#f0a500] col-[span_2] hover:bg-[#e0e0e0]" id='clear' onClick={() =>
                        handleClick('C')}>C</button>

                    <button className="text-[1.5rem] font-bold bg-[#f0f0f0] text-[#f0a500] hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('=')}>=</button>

                    <button className="text-[1.5rem] font-bold bg-[#f0f0f0] text-[#f0a500] hover:bg-[#e0e0e0]" onClick={() =>
                        handleClick('+')}>+</button>

                </div>
            </div>
        </div>
    );
};

export default Calculator;