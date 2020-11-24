import * as React from "react";
import '../styles/index.css'

//Map
import {Map} from '../../index'
  
const Camera: React.FunctionComponent = () => {
  return <div className = "camera">
    <Map />
  </div>
}
export default Camera