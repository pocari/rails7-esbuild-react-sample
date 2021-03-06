import React, { FC } from 'react';

type Props = {
  arg1: string;
  arg2: number;
}

const HelloWorld: FC<Props> = (props: Props) => {
  console.log(`props: ${props}`);
  return (
    <div>
      <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">button</button>
      <h3>react component</h3>
      { props.arg1 }, { props.arg2 }, hello, world
    </div>
  )
}

export default HelloWorld;
