import React, { FC } from 'react';

type Props = {
  arg1: string;
  arg2: number;
}

const HelloWorld: FC<Props> = (props: Props) => {
  console.log(`props: ${props}`);
  return <div>{ props.arg1 }, { props.arg2 }, hello, world</div>
}

export default HelloWorld;
