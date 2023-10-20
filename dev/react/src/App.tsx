import { TaravaBuilder } from "@tarava/react";
import "./App.css";

function App() {
  return (
    <main className="max-w-5xl mx-auto px-4 box-border">
      <h1 className="text-2xl font-bold text-zinc-900 sm:text-4xl text-left mb-2 flex items-center">
        @tarava/react
      </h1>
      <div className="flex flex-col items-center justify-center gap-y-4 pt-10 px-10 lg:flex-row">
        <TaravaBuilder width={400} height={400} />
      </div>
    </main>
  );
}

export default App;
