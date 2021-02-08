import React from 'react';
import { Button } from './Button';
import './PricingSmaller.css';
import { IconContext } from 'react-icons/lib';
import { AiFillCalculator, AiOutlineQuestionCircle, AiOutlineWhatsApp } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { BiGame } from "react-icons/bi";

function PricingSmaller() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__sectionsm'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading-sm'>Smaller Projects</h1>
          <div className='pricing__container'>
            <a href='https://karol4rr.github.io/TaskList/TaskList.html' className='pricing__container-card-sm' target="_blank">
              <div className='pricing__container-cardInfo'>
                <div className='icon-sm'>
                <BsListTask />  
                </div>
                <p>Task List</p>
                <Button buttonSize='btn--medium' buttonColor='primary'>
                Open Project
                </Button>
              </div>
            </a>
            <a href='https://karol4rr.github.io/gra/szubienica.html' className='pricing__container-card-sm' target="_blank">
              <div className='pricing__container-cardInfo'>
                <div className='icon-sm'>
                  <BiGame />
                </div>
                <p>Hangman</p>
                <Button buttonSize='btn--medium' buttonColor='primary'>
                Open Project
                </Button>
              </div>
            </a>
            <a href='/' className='pricing__container-card-sm'>
              <div className='pricing__container-cardInfo'>
                <div className='icon-sm'>
                  <AiOutlineWhatsApp />
                </div>
                <p>Whatsapp Clone</p>
                <Button buttonSize='btn--medium' buttonColor='blue'>
                  IN PROGRESS
                </Button>
              </div>
            </a>
            <a href='https://karol4rr.github.io/NumberGuesser/NumberGuesser.html' className='pricing__container-card-sm'>
              <div className='pricing__container-cardInfo'>
                <div className='icon-sm'>
                  <AiOutlineQuestionCircle />
                </div>
                <p>Number Guesser</p>
                <Button buttonSize='btn--medium' buttonColor='primary'>
                Open Project
                </Button>
              </div>
            </a>
            <a href='https://karol4rr.github.io/LoanCalculator/LoanCalculator.html' className='pricing__container-card-sm'>
              <div className='pricing__container-cardInfo'>
                <div className='icon-sm'>
                  <AiFillCalculator />
                </div>
                <p>Loan Calculator</p>
                <Button buttonSize='btn--medium' buttonColor='primary'>
                Open Project
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default PricingSmaller;
