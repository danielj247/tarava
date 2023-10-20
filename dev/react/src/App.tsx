import { TaravaBuilder } from "@tarava/react";
import "./App.css";

function App() {
  return (
    <main class="max-w-5xl mx-auto px-4 box-border">
      <div className="flex flex-col items-center justify-center gap-y-4 pt-10 px-10 lg:flex-row">
        <TaravaBuilder width={400} height={400} />
      </div>
    </main>
  );
}

export default App;
