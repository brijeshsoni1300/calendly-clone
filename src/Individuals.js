import React from 'react'
import Introsection from './components/Introsection'
import "./Individuals.css"

function Individuals() {
 return (
  <div className="individuals">
     <Introsection
       key={2}
        para="Calendly makes it easy to work smarter when you’re working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals."
        heading="The genius way to work"
        headingSpan="better"
        img="https://images.ctfassets.net/k0lk9kiuza3o/2kiAGfjL7zawukKEtUekPZ/b02771f72b3eeb82f0236affb65353f6/Individuals_Header_Image.png?w=1036&h=1202&q=50&fm=webp"
        button="Sign up for free"
      />
  </div>
 )
}

export default Individuals
