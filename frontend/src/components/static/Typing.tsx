import { TypeAnimation } from 'react-type-animation';

const Typing = () => {

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Next.js',
        1000, 
        'Typescript',
        1000,
        'Tailwind CSS',
        1000,
        'React.js',
        1000
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{ marginLeft: '5px', fontSize: '1em', color: "#84ffff", fontWeight: 'bold', display: 'inline-block' }}
      repeat={1}
    />
  );
};

export default Typing;