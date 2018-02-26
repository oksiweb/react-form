import React from 'react';
import Textarea from './Textarea'
import Input from './Input'
import Select from './Select'
import Button from './Button'
import './form.css'

const Form = ({selectedFilm, onChange, onFormCancel, onFormSubmit, handleImage}) => {
  const rating = [1,2,3,4,5,6,7,8,9,10];
  return (
      <div>
        <form action="">
          <Input type={"text"}
                 value={selectedFilm.name}
                 property={"name"}
                 onChange={onChange}
                 className=""
          />
          <input type="file"
                 onChange={e => handleImage(e)}/>
          <Textarea value={selectedFilm.description}
                    property={"description"}
                    onChange={onChange}/>
          <Select rating={rating}
                  property={"rating"}
                  selected={selectedFilm.rating}
                  onChange={onChange}/>
          <div>
            <Button onClick={onFormCancel}
                    className={'cancel'}
                    buttonText={'Cancel'} />
            <Button onClick={onFormSubmit}
                    className={'submit'}
                    buttonText={'Submit'} />
          </div>
        </form>
      </div>
  )
};

export default Form;