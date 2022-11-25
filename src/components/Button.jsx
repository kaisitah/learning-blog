const Button = (props) => {
    function handleClick(event) {
        console.log("The button was clicked");
    }
    return (
        <button className="Button" onClick={handleClick}>{props.children}</button>
    );
}
    
export default Button;