import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';

import user from '../databases/user';
import statsData from '../databases/statsData';
import friendsData from '../databases/friendsData';
import transactionsData from '../databases/transactionsData';

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
              stats={user.stats}
          />
        <Statistics title="Upload stats" stats={statsData} />
        <FriendList friends={friendsData} />
        <TransactionHistory items={transactionsData} /> 
    </div>
  );
}
  export default App;










































































// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework templat ne
//     </div>
//   );
// };

