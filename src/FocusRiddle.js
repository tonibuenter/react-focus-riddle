import React, {useState} from 'react';

function FocusRiddle() {

    const [currentRow, setCurrentRow] = useState({firstName: 'Barack', lastName: 'Obama'});

    // This keeps the focus correctly
    return <div>{Att()}</div>;

    // This loses the focus after every letter !!!
    // return <div><Att /></div>;

    function Att() {
        return <div>
            <h1>Welcome to Focus Riddle</h1>
            <div>
                <MyInput key={'firstName'} name={'firstName'} row={currentRow} action={updateRow}/>
            </div>
            <div>
                <MyInput key={'lastName'} name={'lastName'} row={currentRow} action={updateRow}/>
            </div>
            <div>
                <button onClick={() => alert(JSON.stringify(currentRow))}>Show Row</button>
            </div>
        </div>
    }


    function updateRow(name, value) {
        setCurrentRow({...currentRow, [name]: value});
    }

}

function MyInput({name, row, action}) {
    return <input
        value={row[name]}
        onChange={(event) => action(name, event.target.value)}/>
}

export default FocusRiddle;
