
export default  {
  loadCourses: async ()=>{
    try{
      const courses = [{
        id: "1",
        name: "Test",
        holes: [{number: 1,par:3},{number: 2, par: 5}]
      }] //await fetch("/courses")
      return {courses}
    }catch(error){
      return {error}
    }
   
  },
  createGame: async ()=>{
    console.error("Unimplemenetd - createNewGame!")
  }
}

