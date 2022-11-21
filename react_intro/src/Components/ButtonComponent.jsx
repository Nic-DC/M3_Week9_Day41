const ButtonComponent = (props) => (
  <a href="https://reactjs.org/docs/hello-world.html" target="blank">
    <button className={props.stylingBtn}>{props.btnText}</button>
  </a>
);

export default ButtonComponent;
