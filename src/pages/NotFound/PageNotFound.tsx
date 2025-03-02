import { useCallback } from "react"
import {useNavigate } from "react-router-dom"

const PageNotFound = () => {
     const navigate = useNavigate();

     const goHome = useCallback(() => {
          navigate('/');
     },[navigate]);

  return (
    <div>
          <h1>Página não encontrada!</h1>
          <p>Gentiliza volte para página <button onClick={goHome}>Dashboard</button></p>      
    </div>
  )
}

export default PageNotFound
