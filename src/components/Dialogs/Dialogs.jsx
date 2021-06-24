import React from 'react';
import c from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        <div className={c.dialog + " " + c.active}>
        &#128386; Lena
        </div>
        <div className={c.dialog}>
          &#128386; Masha
        </div>
        <div className={c.dialog}>
          &#128386; Timur
        </div>
        <div className={c.dialog}>
          &#128386; Ivan
        </div>
        <div className={c.dialog}>
          &#128386; John
        </div>
      </div>
      <div className={c.messages}>
        <div className={c.message}>Hi</div>
        <div className={c.message}>How are you?</div>
        <div className={c.message}>Where are you come from?</div>
      </div>
    </div>
  )
}

export default Dialogs;