import React from 'react'
import Question from './Question'
import Accordion from './Question'

const FAQ = () => {
    return (
        <div className='flex flex-col gap-8 mx-24 text-2xl font-semibold tracking-tight  '>
            <Accordion  title={"Can I upload a CV?"} answer={"lorem ipsm to do is to add some photo of img and show some img"} />
            <Accordion title={"How long will the recruitment process take?"} answer={"lorem ipsm to do is to add some photo of img and show some img"} />
            <Accordion title={"Do you recruit for Graduates, Apprentices and Students?"} answer={"lorem ipsm to do is to add some photo of img and show some img"} />
            <Accordion title={"What does the recruitment and selection process involve?"} answer={"lorem ipsm to do is to add some photo of img and show some img"} />
            <Accordion title={"Can I receive notifications for any future jobs that may interest me?"} answer={"lorem ipsm to do is to add some photo of img and show some img"} />
        </div>
    )
}

export default FAQ