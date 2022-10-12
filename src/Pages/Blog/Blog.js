import React from 'react'

export default function Blog() {
  return (
    <div className='container mt-5'>
        <h1 className='text-uppercase text-md-center fw-lighter my-3 border border-3 border-primary d-inline-block p-2'>Blog</h1>
    <hr  className=''/>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is the perpous of using react router?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. We can use react router as data loaders. and other verious types of hook that helps to provide as correct path and url. As well as, By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How does context api work ? 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Context is a built-in API introduced in ​​React. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. So, The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What is useRef and use of UseRef? 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.In general, we want to let React handle all DOM manipulation.In React, we can add a ref attribute to an element to access it directly in the DOM.The useRef Hook can also be used to keep track of previous state values.

This is because we are able to persist useRef values between renders.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
