import { createStore } from 'vuex'

export default createStore({
  // variables
  state: {
    // data -> propertyName,  null-> value
    education:null,
    aboutMe:null,
    workExp:null,
    projects:null,
    testimonials:null,
    skills:null
  },
  mutations: {  
    // use this to change/update the state
    // commiting a mutation
    setAboutMe(state,payload){
      state.aboutMe = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setSkills(state,payload){
      state.skills = payload
    },
    setTestimonials(state,payload){
      state.testimonials = payload
    },
    setWorkExp(state,payload){
      state.workExp = payload
    },
    setProjects(state,payload){
      state.projects = payload
    }
  },
  actions: {
    // run all async code 
    //dispatching
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://matthew-dean-brown.github.io/first_api/data/data.json')
    let data = await fetchedInfo.json()
    // dependant on json file
    let {aboutMe,projects,education,skills,workExp,testimonials} = data
    console.log(data);
      commit('setAboutMe',aboutMe)
      commit('setEducation',education)
      commit('setSkills',skills)
      commit('setWorkExp',workExp)
      commit('setProjects',projects)
// comment
    }
  },
  modules: {
  },
  getters: {
  },
})
