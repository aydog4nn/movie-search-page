import Container from "@mui/material/Container";
import Home from "./pages/Home";
import RouterConfig from "./config/RouterConfig";
import "./App.css"


function App() {
    
    return (
        <Container style={{ height: "fit-content" }}>
            <div className="all-users">
                
                <div>
                    <RouterConfig />
                    
                    
                </div>
            </div>
        </Container>
    );
}

export default App;
