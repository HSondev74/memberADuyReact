const Header = (props) => {
     return (
          // <header onClick={() => props.setWork(!props.work)}>
          //      Header {props.work && "Aba Duy"}
          // </header>
          <header onClick={props.setWork}>Click</header>
     );
};

export default Header;
