import {Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4> LISTĂ PREȚ </h4>
<ul>INSPECTIE TEHNICA PERIODICA</ul>
<li>Autoturisme benzina	100,00 lei</li>
<li>Autoturisme benzina + GPL	120,00 lei</li>
<li>Autoturisme Diesel	120,00 lei</li>
<li>Jeep, SUV, 4×4	150,00 lei</li>
<li>Autoutilitare	150,00 lei</li>
<li>Revenire	30,00 lei</li>
<ul>GEOMETRIE</ul>
<li>Constatare	50,00 lei</li>
<li>SUV, JEEP (punte fata)	150,00 lei</li>
<li>SUV, JEEP (punte spate)	100,00 lei</li>
<li>DUSTER	110,00 lei</li>

<Link to='/'>Înapoi</Link>
        </div>
    )
}

export default About
