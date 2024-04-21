import { ToastContainer } from 'react-toastify';
import ProfessorsRoot from "./components/ProfessorsRoot.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"

const App = () => {
    return(
        <>
            <ToastContainer
                position="top-right"
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
            <div>
                <ProfessorsRoot />
            </div>
        </>
    )
};

export default App;
