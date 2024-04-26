import "../styles/PasswordBox.css"

const PasswordBox = ({ passwordField, handlePasswordChange, authPassword, closePasswordBox }) => {
    const handleClickOutside = (event) => {
        // Close the box if the clicked element is the overlay
        if (event.target.className === 'password-overlay') {
            closePasswordBox();
        }
    };

    return (
        <div className="password-overlay" onClick={handleClickOutside}>
            <div className="password-box">
                <input type="password" name="passwordField" value={passwordField} placeholder="Password"
                                 onChange={handlePasswordChange}/>
                <button onClick={authPassword}>Submit</button>
                <button onClick={closePasswordBox}>Close</button>
            </div>
        </div>
    )
}

export default PasswordBox;