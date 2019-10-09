import * as React from 'react';

interface CardStatelessProps {
  name: string,
  email: string,
  id: number
}
// 'SFC' (Stateless Functional Component) snytax available inside @types under node_modules which lists out the phrases for various components
const Card: React.SFC<CardStatelessProps> = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
