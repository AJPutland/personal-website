import React, { Component, createRef, MutableRefObject} from "react"
import About from '../components/About/about'

export type PageLocation = "about" | "projects" | "contact"

export interface HomeState {
    pageLoc: PageLocation
    projectsRef: MutableRefObject<any>
    contactRef: MutableRefObject<any>
    toggleMenu: boolean
  }
  

  export default class Home extends Component<{},HomeState>{

    constructor(props:any){
      super(props)
      this.state ={
        pageLoc: "about",
        projectsRef: createRef(),
        contactRef: createRef(),
        toggleMenu: false
      }
      this.scrollListener = this.scrollListener.bind(this)
      this.toggleMenuFn = this.toggleMenuFn.bind(this)
    }
  
    scrollListener = (e:any) => {
      let scroll = window.scrollY
      if(scroll < this.state.projectsRef.current.offsetTop-300){
        this.setState({
          pageLoc: "about"
        })
      }else if(scroll < this.state.contactRef.current.offsetTop-300){
        this.setState({
          pageLoc: "projects"
        })
      }else{
        this.setState({
          pageLoc: "contact"
        })
      }
  
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
  
      if (bottom) {
        this.setState({
          pageLoc: "contact"
        })
      }
  
    }
  
    toggleMenuFn = () => {
      this.setState({
        toggleMenu: !this.state.toggleMenu
      })
    }
  
    componentDidMount = () => {
      window.addEventListener('scroll',this.scrollListener,true)
    }
  
    render() {
      return (
        <About />
    );}
   }