function DropDown({list}){
    return (
        <>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            {list.map((item)=> {
                return <option value={item}>{item}</option>}
            )}
          </select>
        </>
      );
      
}

export default DropDown;