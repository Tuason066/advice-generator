import { useGlobalContext } from './context';
import { useRef, useEffect } from 'react';

function Advice() {
  const { advice, fetchAdvice } = useGlobalContext();

  const dice = useRef();

  useEffect(() => {
    const diceHeight = dice.current.getBoundingClientRect().height / 2;
    dice.current.style.top = `calc(100% - ${diceHeight}px)`;
  }, []);

  return (
    <main className='grid min-h-screen min-w-full bg-neutral-300 font-manrope place-items-center pt-12 pb-16'>
      <article className='bg-neutral-200 w-11/12 max-w-sm md:max-w-lg rounded-xl text-center text-sm md:text-base font-bold relative'>
        <blockquote
          cite='https://api.adviceslip.com/advice'
          className='p-6 md:p-12 '
        >
          <h1 className='text-primary-200 tracking-widest mb-4'>
            Advice #{advice.id}
          </h1>
          <q className='text-primary-100 text-base md:text-3xl'>
            {advice.advice}
          </q>
          <picture className='py-8 md:pb-4 block'>
            <source
              media='(min-width:768px)'
              srcSet='./images/pattern-divider-desktop.svg'
            />
            <img
              className='w-full'
              src='./images/pattern-divider-mobile.svg'
              alt='dice'
            />
          </picture>
        </blockquote>
        <button
          onClick={() => fetchAdvice()}
          ref={dice}
          type='button'
          className='hover:shadow-cyan100 md:hover:shadow-cyan200 transition-all w-14 h-14 grid place-items-center bg-primary-200 rounded-full absolute left-2/4 -translate-x-2/4'
        >
          <img className='w-6' src='./images/icon-dice.svg' alt='dice' />
        </button>
      </article>
    </main>
  );
}

export default Advice;
