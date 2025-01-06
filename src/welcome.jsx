import Inputfield from './inputfield';
function welcome() {
  return(
    <div>
        <h1>Welcome to React</h1>
        <p>this is just a component test</p>
        <h2 style={{color:'red'}}>Please Try Typing</h2>
        <Inputfield />
    </div>
  );
}
export default welcome;