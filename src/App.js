import './App.css';
import { useState } from 'react';
import { right, wrong } from './emoji';

function App() {
  const [regex , setRegex] = useState('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
  const [validRegex , setValidRegex] = useState(true);
  const [text1, setText1] = useState('Regex@Yogesh');
  const [text2, setText2] = useState('Regex@7401');
  const [text3, setText3] = useState('Regex.com');
  const [text1Status, setText1Status] = useState(false);
  const [text2Status, setText2Status] = useState(true);
  const [text3Status, setText3Status] = useState(false);
  const [initialText, setInitialText] = useState(true);

  const matched = 'w-full p-3 border-green-500 text-white border-2 pr-14 mx-auto focus:outline-none rounded-lg bg-gray-600'
  const notmatched = 'w-full p-3 border-red-500 text-white border-2 pr-14 mx-auto focus:outline-none rounded-lg bg-gray-600'
  function handleChangeRegex(e) {
    if(initialText) {
      setInitialText(false)
    }
    try {
      setRegex(e.target.value);
      let regex = new RegExp(e.target.value);
      setText1Status(regex.test(text1));
      setText2Status(regex.test(text2));
      setText3Status(regex.test(text3));
      setValidRegex(true)
    } catch (error) {
      setText1Status(false);
      setText2Status(false);
      setText3Status(false);
      setValidRegex(false);
    }
  }
  function handleChangeSample(name,e) {
    if(name==="1") {
      setText1(e.target.value);
      setText1Status(new RegExp(regex).test(e.target.value));
    }
    else if(name === "2") {
      setText2(e.target.value);
      setText2Status(new RegExp(regex).test(e.target.value));
    }
    else if(name === "3") {
      setText3(e.target.value);
      setText3Status(new RegExp(regex).test(e.target.value));
    }
  }

  return (
    <div className="flex min-h-screen min-w-full bg-gray-700 p-5">
      <div className='m-auto container'>
        <h1 className="text-4xl mb-10 text-center text-white">
          Regex Playground !
        </h1>
        
        <div className='flex flex-col lg:w-1/2 mx-auto'>
        <p className='text-gray-400 text-sm pb-1'>Enter your regex here: { initialText ? "(Password Validation)" : ""}</p>
          <div className='relative'>
            <div className='absolute right-3 top-1'>
              {validRegex? right : wrong}
            </div>
          <input value={regex} onChange={(e) => handleChangeRegex(e)} className='w-full pr-14 p-3 border mx-auto bg-gray-500 text-white focus:outline-none border-black rounded-lg'/> 
          </div>
        </div>
        <p className='mt-10 text-gray-400 text-sm pb-1'>Sample Texts</p>
        <div className='w-full p-3 border border-black rounded-lg space-y-4 pt-6 bg-gray-800'>
          <div className='relative'>
            <div className='absolute right-3 top-4'>
              {text1Status? right : wrong}
            </div>
            <textarea value={text1} onChange={(e) => handleChangeSample("1",e)} className={text1Status ? matched : notmatched} type="text" /> 
          </div>
          <div className='relative'>
            <div className='absolute right-3 top-4'>
              {text2Status? right : wrong}
            </div>
            <textarea value={text2} onChange={(e) => handleChangeSample("2",e)} className={text2Status ? matched : notmatched} type="text" /> 
          </div>
          <div className='relative'>
            <div className='absolute right-3 top-4'>
              {text3Status? right : wrong}
            </div>
            <textarea value={text3} onChange={(e) => handleChangeSample("3",e)} className={text3Status ? matched : notmatched} type="text" /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
