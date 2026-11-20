function Search({searchTerm, setSearchTerm}){

    return(
        <div className = "flex justify-center mb-6">
        <input type = "text" placeholder ="Search for hats"
        value = {searchTerm}
        onChange ={(e) => setSearchTerm(e.target.value)}
        className = "w-full max-w-[400px] border border-black-300 rounded px-3 py-1 text-sm"
        />

       </div>

    )
}

export default Search