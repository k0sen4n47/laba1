import { useState } from 'react'
import './App.css'

// задание_1
// function App() {
//   return (
//     <>
//       <input></input>
//       <input></input>
//       <input></input>
//     </>
//   )
// };

// задание_2
// function App() {
//   const str1 = "text1";
//   const str2 = "text2";
//   return (
//     <div>
//       <p>{str1}</p> <p>{str2}</p>
//     </div>
//   );
// }

// задание_3
// function App() {
//   const obj = { name: "Zahar", surname: "Tulkin" };
//   return (
//     <p>
//       name: <span>{obj.name}</span>, <br />
//       surname: <span>{obj.surname}</span>,
//     </p>
//   );
// }

// задание_4
// function App() {
//   function getDigitsSum(number) {
//     let sum = 0;
//     let numStr = number.toString();

//     for (let i = 0; i < numStr.length; i++) {
//       sum += parseInt(numStr[i]);
//     }
//     return sum;
//   }

//   const sum = getDigitsSum(123);

//   return (
//     <div>
//       {sum}
//     </div>
//   );
// }

// задание_5
// function App() {
//   function show1() {
//     alert(1);
//   }

//   function show2() {
//     alert(2);
//   }

//   return <div>
//     <button onClick={show1}>act1</button>
//     <button onClick={show2}>act2</button>
//   </div>;
// }

// задание_6
// function App() {
//   function showMess(text) {
//     alert(text);
//   }
//   return <div>
//     <button onClick={() => showMess('1')}>act1</button>
//     <button onClick={() => showMess('2')}>act2</button>
//     <button onClick={() => showMess('3')}>act3</button>
//   </div>;
// }

// задание_7
// function App() {
//   const users = [
//     { name: "user1", surn: "surn1", age: 30 },
//     { name: "user2", surn: "surn2", age: 31 },
//     { name: "user3", surn: "surn3", age: 32 },
//   ];

//   return (
//     <div>
//       <ul>
//         {users.map((user) => (
//           <li key={user.name}>
//             {user.name} {user.surn} ({user.age})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// задание_8
// function App() {
//   const [name, setName] = useState("Zahar");
//   const [surname, setSurame] = useState("Tulkin");
//   const [age, setAge] = useState("18");
//   return (
//     <div>
//       <span>{name}</span> <br />
//       <span>{surname}</span> <br />
//       <span>{age}</span>
//     </div> 
//   );
// }

// задание_9
// function App() {
//   const [isBanned, setIsBanned] = useState(false);

//   const handleBan = () => {
//     setIsBanned(true);
//   };

//   const handleUnban = () => {
//     setIsBanned(false);
//   };

//   return (
//     <div>
//       <span>
//         {isBanned ? "Забанен" : "User"}
//       </span> <br />
//       <button onClick={handleBan} disabled={isBanned}>Забанить</button>
//       <button onClick={handleUnban} disabled={!isBanned}>Разбанить</button>
//     </div>
//   );
// }

// задание_10
function App() {
  const [isBanned, setIsBanned] = useState(false);

  const handleBan = () => {
    setIsBanned(true);
  };

  const handleUnban = () => {
    setIsBanned(false);
  };

  return (
    <div>
      <span>
        {isBanned ? "Забанен" : "User"}
      </span> <br />
      {isBanned ? (
        <button onClick={handleUnban}>Разбанить</button>
      ) : (
        <button onClick={handleBan}>Забанить</button>
      )}
    </div>
  );
}

export default App
