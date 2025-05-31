function Button({text, onButtonClick}){

    return(
        <>
          <button onClick={onButtonClick} className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold transition cursor-pointer">
                {text}
              </button>
        </>
    )

    
}

export default Button;