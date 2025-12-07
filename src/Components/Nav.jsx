import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'

export default function Nav() {
  let [search,setSearch]=useState("")
  let navigate=useNavigate()
    let [q,setQ]=useState("All")
    let [language,setLanguage]=useState("hi")
    let [param]=useSearchParams()
    useEffect(()=>{
        setQ(param.get("q")??"all")
        setLanguage(param.get("language")??"hi")
    },[param])
    function postData(e){
      e.preventDefault()
      navigate(`/?q=${search}&language=${language}`)
      setSearch("")
    }
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top mt-1">
  <div className="container-fluid text-light">
    <NavLink className="navbar-brand text-light" to={`/?q=All&language=${language}`}>NewsWeb</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to={`/?q=All&language=${language}`}>All</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-light" to={`/?q=Politics&language=${language}`}>Politics</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link text-light" to={`/?q=Crime&language=${language}`}>Crime</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link text-light" to={`/?q=Education&language=${language}`}>Education</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link text-light" to={`/?q=Sport&language=${language}`}>Sports</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link text-light" to={`/?q=Science&language=${language}`}>Science</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link text-light" to={`/?q=Technology&language=${language}`}>Technology</NavLink>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle text-light" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item text-primary bg-light" to={`/?q=Jokes&language=${language}`}>Jokes</NavLink></li>
            <li><NavLink className="dropdown-item text-primary bg-light" to={`/?q=Cricket&language=${language}`}>Cricket</NavLink></li>
            <li><NavLink className="dropdown-item text-primary bg-light" to={`/?q=AsiaCup&language=${language}`}>Asia Cup</NavLink></li>
            <li><NavLink className="dropdown-item text-primary bg-light" to={`/?q=Economics&language=${language}`}>Economics</NavLink></li>
            <li><NavLink className="dropdown-item text-primary bg-light" to={`/?q=India&language=${language}`}>India</NavLink></li>
            <li><NavLink className="dropdown-item text-primary bg-light" to={`/?q=World&language=${language}`}>World</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle text-light" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item text-primary bg-light" to={`/?q=${q}&language=hi`}>Hindi</NavLink></li>
            <li><NavLink className="dropdown-item text-primary bg-light" to={`/?q=${q}&language=en`}>English</NavLink></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" onSubmit={postData}>
        <input className="form-control me-2" onChange={(e)=>setSearch(e.target.value)} value={search} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light  text-light " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}
