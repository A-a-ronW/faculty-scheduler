import {useEffect, useState} from "react";
import { toast } from 'react-toastify';
import professorsService from "../services/professors.js";
import axios from "axios";
import AdminView from "./AdminView";
import UserView from "./UserView";
import PasswordBox from "./PasswordBox";
import "../styles/ProfessorsRoot.css";

const ProfessorsRoot = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [professorsList, setProfessorsList] = useState([]);
    const [passwordField, setPasswordField] = useState("");
    const [displayPasswordField, setDisplayPasswordField] = useState(false);

    useEffect(() => {
        professorsService.getProfessors()
            .then(response => {
                setProfessorsList(response);
            })
            .catch(error => {
                console.error(`Error fetching professors: ${error}`);
            });
    }, []);

    const handlePasswordChange = (event) => {
        setPasswordField(event.target.value);
    };

    const authPassword = () => {
        const passwordRequestBody = { password: passwordField };

        axios.post('http://localhost:3001/authenticate', passwordRequestBody).then((response) => {
            if (response.data.isAuthenticated) {
                setIsAdmin(true);
                toast("Successful login.");
            }
        });
    }

    const handleDisableAdmin = () => {
        setIsAdmin(false);
        setDisplayPasswordField(false);
    }

    const togglePasswordField = () => {
        setDisplayPasswordField(!displayPasswordField);
    };


    if (isAdmin) {
        return(
            <>
                <div className="admin-button-container">
                    <button className="admin-button" onClick={() => handleDisableAdmin()}>Disable Admin View</button>
                </div>
                <div>
                    <AdminView
                        professorsList={professorsList}
                        setProfessorsList={setProfessorsList}
                    />
                </div>
            </>
        );
    }

    return (
        <>
            <div>
                <div className="admin-button-container">
                    <button className="admin-button"
                            onClick={() => setDisplayPasswordField(!displayPasswordField)}>Login
                    </button>
                </div>
                {displayPasswordField ?
                    <PasswordBox
                        passwordField={passwordField}
                        handlePasswordChange={handlePasswordChange}
                        authPassword={authPassword}
                        closePasswordBox={togglePasswordField}
                    />
                : null}
            </div>
            <div>
                <UserView
                    professorsList={professorsList}
                />
            </div>
        </>
    );
};

export default ProfessorsRoot;