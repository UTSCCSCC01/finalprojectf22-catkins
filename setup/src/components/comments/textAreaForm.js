import React from 'react'

function TextAreaForm(props) {
  return (
    <form className="w-2/3 text-sm resize-none " onSubmit={props.submitHandler}>
<textarea rows="4"
className="w-full text-sm resize-none p-3 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#D0D1C9] focus:ring-[#180077] focus:border-[#180077] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
onChange={props.onChange}
 placeholder={props.placeholder} ></textarea>

<button
type='submit'
className='my-2 text-sm border-[#D0D1C9] border-2 py-2 px-4 rounded'
>{props.buttonText}</button>
</form>
  )
}

export default TextAreaForm;
