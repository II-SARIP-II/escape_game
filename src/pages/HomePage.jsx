import Button from '../components/Button.jsx';
import TextInput from '../components/TextInput.jsx';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const [text, setText] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>PARMI NOUS</h1>

            <Button label="Cliquez ici" onClick={handleClick} />

            <TextInput
                label="Entrez votre texte :"
                value={text}
                onChange={handleChange}
                placeholder="Tapez ici..."
            />
            <p>Vous avez entré : {text}</p>
        </div>
    );
}

export default HomePage;