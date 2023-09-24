import React,{useState} from 'react'

const BasicAccordion = () => {
    const [showContent, setShowContent] = useState(false);

  return (
    <div>
        <h4>Accordion</h4>
        <div>
            <h4 onClick={()=>setShowContent(!showContent)}>Section 1</h4>
            {showContent && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac justo eget nisl laoreet consectetur. Phasellus consectetur metus sit amet libero scelerisque, at aliquam nunc tincidunt. Proin vehicula ex in tortor viverra, eu malesuada ex varius.</p>}
        </div>
        
    </div>
  )
}

export default BasicAccordion