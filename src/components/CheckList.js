import React, { useState } from 'react'
import checkList from './checkList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function CheckList() {
    const [newList,setNewList]=useState(false);

    const handleNewList=()=>{
        setNewList(true);
    }
  return (
    <div className='checkListBody' >
      <div className='checkListHeaderContent' >
        <p>Check List</p>
        <div className='newCheckList' >
        <div className='checkListSearch' >
            <input type='text' placeholder='Search CheckList' />
        </div>
        <div className='checkListSearchButton'>
            <button type='submit' onClick={handleNewList} >Add New</button>
        </div>
        </div>
      </div>
      <div className='checkListContent' >
        <div className='listHeading' >
            <h5>S.No</h5>
            <h5>Heading</h5>
            <h5>Actions</h5>
        </div>
      </div>
      {newList===true ? <NewCheckList state={setNewList} /> : null}
    </div>
  )
}

function NewCheckList({state}){

    const handleCancelList=()=>{
        state(false)
    }
    return(
        <div className='newListBody' >
            <div className='listHeading' >
                <p>Add New Design Form</p>
                <FontAwesomeIcon icon={faXmark} className='listCancel' onClick={handleCancelList} />
            </div>
            <div className='listContent' >
                <ListInput name='Department' />
                <ListInput name='Category' />
                <ListInput name='Heading' />
                <ListInput name='Form No.' />
                <div className='submitBtn' >
                    <button type='submit' >Submit</button>
                </div>
            </div>
        </div>
    )
}

function ListInput({name}){
    return(
        <div className={`${name} section`} >
            <label>{name}</label>
            <input type='text' placeholder='Select Type' />
        </div>
    )
}

export {NewCheckList}
export default CheckList
