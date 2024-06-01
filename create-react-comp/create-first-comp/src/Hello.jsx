function Hello(){
     
  let myName = "Sumit";
  let number = 456; 
  let fullName = () =>{
    return "Sumit Gorad"
  }

  return <p>
    Message: {number} I am your Mastere {fullName()}
  </p>
}

export default Hello;