const Button = (props) => {
    function handleClick(event) {
        console.log("The button was clicked");
        alert("The button was clicked!");
    }
    return (
        <button className='Button' onClick={handleClick}>Button</button>
    )
}

export default Button;