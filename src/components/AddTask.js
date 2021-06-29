import {useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
        alert('Adaugă un serviciu')
        return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
}

return (
    <form className='add-form' onSubmit={onSubmit} >
        <div className='form-control'>
            <label>Servicii</label>
            <input 
                type='text' 
                placeholder='Adaugă Servicii' 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
        </div>
        <div className='form-control'>
            <label>Data & Ora</label>
            <input 
                type='text' 
                placeholder='Data & Ora'
                value={day} 
                onChange={(e) => setDay(e.target.value)}
            />
        </div>
        <div className='form-control form-control-ckeck'>
            <label>Setază Reminder</label>
            <input 
                type='checkbox' 
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)} 
            />
        </div>   

    <input type='submit' value='Salvează' className='btn btn-block'/>
    </form>
)
}

export default AddTask 
