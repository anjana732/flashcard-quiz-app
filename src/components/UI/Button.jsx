function Button({text}){

    return(
        <>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
    {text}
  </button>
        </>
    )

    
}

export default Button;