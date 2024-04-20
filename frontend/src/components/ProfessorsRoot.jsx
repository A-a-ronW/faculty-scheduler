import {useEffect, useState} from "react";
import { toast } from 'react-toastify';
import professorsService from "../services/professors.js";
import axios from "axios";
import AdminView from "./AdminView.jsx";
import UserView from "./UserView.jsx";

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

    if (isAdmin) {
        return(
            <>
                <button onClick={() => handleDisableAdmin()}>Disable Admin View</button>
                <AdminView
                    professorsList={professorsList}
                    setProfessorsList={setProfessorsList}
                />
            </>
        );
    }

    return (
        <>
            <button onClick={() => setDisplayPasswordField(!displayPasswordField)}>Enable Admin View</button>
            {displayPasswordField ? <div><span> Password: <input type="password" name="passwordField" value={passwordField} onChange={handlePasswordChange}/></span> <button onClick={authPassword}>Submit</button></div> : null}
            <UserView
                professorsList={professorsList}
            />
        </>
    );
};

export default ProfessorsRoot;