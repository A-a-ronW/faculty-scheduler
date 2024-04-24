import { ToastContainer } from 'react-toastify';
import ProfessorsRoot from "./components/ProfessorsRoot.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css"

const App = () => {
    return(
        <>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition: Bounce
            />
            <ProfessorsRoot />
        </>
    )
};

export default App;
