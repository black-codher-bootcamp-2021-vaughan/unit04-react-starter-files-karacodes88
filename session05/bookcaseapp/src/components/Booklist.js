function BookList (props){
    return (
        <Container color="blue">
            <h1 className="book-title">
                {props.title}
            </h1>
            <p className="book-text">
                {props.text}
            </p>
            </Container>
    );
}

export default BookList