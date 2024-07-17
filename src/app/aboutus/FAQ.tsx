import React from 'react'
import Question from './Question'
import Accordion from './Question'

const FAQ = () => {
    return (
        <div className='flex flex-col gap-8 pl-3 pr-3 md:mx-24 md:text-2xl text-md font-semibold tracking-tight  '>
            <Accordion title={"How long will the recruitment process take?"} answer={"lorem ipsm to do is to add some photo of img and show some img"} />
            <Accordion title={"How long will the recruitment process take?"} answer={"lorem ipsm to do is to add some photo of img and show some img"} />
            <Accordion title={"How long will the recruitment process take?"} answer={"lorem ipsm to do is to add some photo of img and show some img"} />
            <Accordion title={"How long will the recruitment process take?"} answer={"lorem ipsm to do is to add some photo of img and show some img"} />
            <Accordion title={"How long will the recruitment process take?"} answer={"lorem ipsm to do is to add some photo of img and show some img"} />
        </div>
    )
}

export default FAQ