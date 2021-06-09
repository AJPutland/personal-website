import React, { Component, createRef, MutableRefObject} from "react"
import { Helmet } from "react-helmet"
import Header from '../components/Header/header'
import Menu from '../components/Menu/menu'
import About from '../components/About/about'
import Projects from '../components/Projects/projects'
import Contact from '../components/Contact/contact'
import Layout from "../components/layout"
import "./index.css"

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

    semanticWebData =  JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "email": "mailto:ajputland@gmail.com",
      "image": "../images/adam.jpg",
      "jobTitle": "Full Stack Software Engineer",
      "name": "Adam Putland",
      "url": "http://www.ajputland.com"})
  
    render() {
      return (
        <Layout>
          <Helmet>
            <meta charSet="utf-8"/>
            <meta name="description" content="Adam James Putland is a full stack developer with interests in machine learning, mobile development and computer vision."/>
            <title>Adam J. Putland</title>
            <script type="application/ld+json">{this.semanticWebData}</script>
          </Helmet>
          <Header {...this.state} toggleMenuFn={this.toggleMenuFn}/>
          <Menu {...this.state} toggleMenuFn={this.toggleMenuFn}/>
          <About />
          <Projects refProp={this.state.projectsRef}/>
          <Contact refProp={this.state.contactRef}/>
        </Layout>
    );}
   }