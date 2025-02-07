export default function App() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-pink-600 mb-8">Be My Valentine?</h1>
      <div className="flex space-x-4">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition duration-300">
          Yes
        </button>
        <button className="bg-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition duration-300">
          No
        </button>
      </div>
    </div>
  );
}