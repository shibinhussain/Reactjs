import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Order to provide placeholder text to mockup various fonts for a type
        specimen book. It's difficult to find examples of lorem ipsum in use
        before Letraset made it popular as a dummy text in the 1960s, although
        McClintock says he remembers coming across the lorem ipsum ext has been
        used for centuries. And anyways, as Cecil Adams reasoned, “[Do you
        really] think graphic arts supply houses were hiring classics scholars
        in the 1960s?” Perhaps. But it seems reasonable to imagine that there
        was a version in use far before the age of Letraset. McClintock wrote to
        Before & After to explain his discovery.
      </p>
    </div>
  );
};

export default Rainbow(About);
