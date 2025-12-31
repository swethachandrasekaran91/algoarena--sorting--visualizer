import SortingChart from "./components/SortingChart";
import SortingProvider from "./contexts/SortingContext";
import projectOutput from"./assets/project_output.png";
function App() {
    return (
        <SortingsProvider>
            <div className="container mx-auto px-4">
                <img
                src={projectOutput}
                alt="project output"
                className="w-full max-w-xl mx-auto my-6 rounded-lg shadow-lg"
                />
                <SortingChart />

            </div>
        </SortingsProvider>
    );
}

export default App;
