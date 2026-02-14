import "./App.css";
import ham1 from "./assets/hamster.jpg";
import ham2 from "./assets/better hamper.jpg";
import expo from "./assets/expolsion.gif"



function App() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("User selected file:", file.name);
      // do whatever you want with the file here
    }
  };

  const triggerFileSelect = () => {
    document.getElementById("fileInput").click();
  };


  return (
    <div className="background">
      <h1>i am under the water</h1>
        {/* Hidden file input */}
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          hidden
        />
        <main className="hampters">
          <img 
            src = {ham1}
            alt= "hamster"
            onClick={triggerFileSelect}
            className="hamBut"
          />

          <h2>Click Hamster to Choose Song 1</h2>

          {/* <img src = {expo} alt = "expolsion"/> */}
          <img 
            src = {ham2}
            alt= "better hamper"
            onClick={triggerFileSelect}
            className="hamBut"
            />
        </main>
      </div>
  );
}

export default App;
