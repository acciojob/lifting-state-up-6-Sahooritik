import React, { useState } from "react";


const TodoList = ({todos, handleComplete})=>{

    return(
        <div>

      <ul>
        
            {todos.map((value,index) => {
                return(
                    <li key = {index}>{value.text}{!value.completed && <button onClick={()=>{
                        handleComplete(value.id)

                    }}>completed</button>}</li>
                    
                )
            })}
      </ul>




        </div>
    )


}

export default TodoList