import "./App.css";

import hamster from "./assets/hamster.jpg";
import betterHamper from "./assets/better hamper.jpg";

import file1succ from "./assets/file1succ.png";
import file2succ from "./assets/file2succ.jpg";

import FileUploader from "./FileUploader";

function App() {
  return (
    <div className="background">
      <h1>i am under the water</h1>

      <main className="hampters">
        <FileUploader
          label="Song 1"
          idleSrc={hamster}
          successSrc={file1succ}
          className="hamBut"
        />

        <FileUploader
          label="Song 2"
          idleSrc={betterHamper}
          successSrc={file2succ}
          className="hamBut"
        />
      </main>
    </div>
  );
}

export default App;
