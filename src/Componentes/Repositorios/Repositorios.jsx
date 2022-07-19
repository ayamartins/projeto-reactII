import { useState, useEffect } from 'react'

const Repositorios = () => {
  const [repos, setRepos] = useState([])
  const [search, setSearch] = useState('')
  const [filterRepos, setFilterRepos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://api.github.com/users/ayamartins/repos')
      const data = await response.json()

      setRepos(data)
    }
    getData()
  }, [])
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    setFilterRepos(repos.filter( repo => repo.name.includes(search)))
  }, [repos, search])

  return(
    <><div className="pesquisa">
      
       <label>Faça uma pesquisa dos repositórios 🔎 </label>
       <input  placeholder="Encontre um repositório" onChange={handleSearch}/> 
    </div>

    <div className="cards">
     {filterRepos.map(repo => {
      return(
       <div className="repos"key={repo.id}>
        <h3 >
        {repo.name}
        </h3>
        <p>{repo.description}</p>
        </div> 
      )
     })}
     </div>
    
   
    </>
  )
}

export default Repositorios
