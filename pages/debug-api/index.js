import DebugApiPage from "../../components/debug_api_page";

export default function Home() {
    function debugButton() {
        console.log("Debug Button pressed");
    }
    return (
      <>
        <DebugApiPage />
        <button color="default" onClick={debugButton}>
            Debug Button
        </button>
      </>
    );
}
