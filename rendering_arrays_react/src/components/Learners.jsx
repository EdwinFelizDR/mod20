import React from 'react'


// Learners component that takes learners array as a prop
function Learners({ learners=[] }) {
  return (
   <div>
   {/* Mapping through the learners array and rendering each learner's details */}
   {learners.map((learner, index) => (
     <div key={index}> {/* Unique key for each learner */}
       <h2>{learner.name}</h2> {/* Displaying learner's name */}
       <p>{learner.bio}</p> {/* Displaying learner's bio */}
       <ul>
         {/* Mapping through the scores array of each learner and rendering each score */}
         {learner.scores.map((score, idx) => (
           <li key={idx}> {/* Unique key for each score */}
             {score.date}: {score.score} {/* Displaying score date and value */}
           </li>
         ))}
       </ul>
     </div>
   ))}
 </div>
  )
}

export default Learners