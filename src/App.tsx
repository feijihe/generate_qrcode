// import { invoke } from "@tauri-apps/api/core";
import qrcode from 'qrcode'
import "./App.css";

function App() {

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = document.getElementById('name') as HTMLInputElement;
    const age = document.getElementById('age') as HTMLInputElement;
    const text = JSON.stringify({name: name.value, age: age.value}, undefined, '\t')

    qrcode.toCanvas(document.getElementById('canvas'), text, function (err) {
      console.log(err)
    })
  }

  return (
    <main className="container">
      <form
        className="row"
        onSubmit={submit}
      >
        <label htmlFor="name" />
          姓名：<input
          id="name"
          placeholder="Enter a name..."
        />
        <label htmlFor="age" >年龄</label>
        <input
          id="age"
          placeholder="Enter a age..."
        />
        <button type="submit">Greet</button>
      </form>
      <canvas id="canvas"></canvas>
    </main>
  );
}

export default App;
