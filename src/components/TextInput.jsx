function TextInput({ label, value, onChange, placeholder }) {
    return (
        <div>
            {label && <label>{label}</label>}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default TextInput;

