import { useReducer } from "react";

function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Counter</h1>

        <div className="text-center mb-8">
          <p className="text-6xl font-bold text-blue-600">{count}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => dispatch("decrement")}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-colors text-2xl"
          >
            −
          </button>

          <button
            onClick={() => dispatch("increment")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors text-2xl"
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch("reset")}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
