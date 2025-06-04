function Input({type,name,value,onChange}){
    return (
        <>
          <input
            type={type}
            placeholder="Enter your answer"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-gray-900 placeholder-gray-400 transition"
            name={name}
            value={value}
            onChange={onChange}
          />
        </>
      );
      
}

export default Input;