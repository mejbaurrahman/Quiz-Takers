import React from 'react'

export default function ({option}) {
  return (
    <div className='col '>
    <div className='border border-opacity-25 border-primary py-3 ps-2'>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
        <label class="form-check-label" for="flexRadioDefault4">
            {option}
        </label>
    </div>
    </div>
    </div>
  )
}
