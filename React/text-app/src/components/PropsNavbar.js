// React 17
// import React from 'react';
// import PropTypes from 'prop-types';
// // import List from './List'

// const Navbar = (props) => {
//   return (
//     <div>
//       This is a navbar with heading text = "{props.headingText}" and name = {props.name}
//       {/* <List/> */}
//     </div>
//   )
// }

// Navbar.propTypes={
//   headingText:PropTypes.string,
//   name:PropTypes.string 
// }

// Navbar.defaultProps = {
//   headingText:"Default",
//   name:"Akshat"
// }

// export default Navbar

// ----------------------------------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import PropTypes from 'prop-types';

// // Destructure props with default values for better readability
// const Navbar = ({ headingText = "Default", name = "Akshat" }) => {
//   return (
//     <div>
//       This is a navbar with heading text = "{headingText}" and name = {name}
//       {/* <List/> */}
//     </div>
//   );
// };

// // Prop types for validation (optional, but helpful in development)
// Navbar.propTypes = {
//   headingText: PropTypes.string,
//   name: PropTypes.string,
// };

// export default Navbar;

// ----------------------------------------------------------------------------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';

// Using object-style props and default values inside the component
const Navbar = (props) => {
  // Destructuring with default values inside the component body
  const { headingText = "Default", name = "Default" } = props;

  return (
    <div>
      This is a navbar with heading text = "{headingText}" and name = {name}
      {/* <List/> */}
    </div>
  );
};

// Prop types for validation (optional, but helpful in development)
Navbar.propTypes = {
  headingText: PropTypes.string,
  name: PropTypes.string,
};

export default Navbar;
