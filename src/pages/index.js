import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <Head>
        <title>To-Do List</title>
        <meta
          name="description"
          content="Aplikasi To-Do List sederhana dengan Next.js"
        />
      </Head>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl text-gray-700 font-bold mb-4">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border text-gray-700 p-2 flex-grow rounded-l"
            placeholder="Tambah tugas..."
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-gray p-2 rounded-r">
            Tambah
          </button>
        </div>
        <ul className="list-disc pl-5">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex text-gray-700 justify-between items-center">
              {todo}
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500">
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
