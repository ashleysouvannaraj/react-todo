const {Component} = React;

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {
                    todoText: "I need to do this",
                    isCompleted: false
                },
            ],
            inputText: "default",
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let newTodo = {
            todoText: this.state.inputText,
            isCompleted: false
        }
        this.setState({todos: [...this.state.todos, newTodo]})
    }

    handleChange(e) {
        this.setState({inputText: e.target.value})
    }
    
    toggleIsCompleted(index) {
        this.setState({
            todos: this.state.todos.map((todo, i) => {
                if (i === index) {
                    return{...todo, isCompleted: !todo.isCompleted}
                } else {
                    return todo;
                }
            })
        })
    } 
 
    render () {
        return (
            <div>
                <div>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="text" value={this.state.inputText} onChange={(e) => this.handleChange(e)} />
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
                <div>
                    <h2>Todo</h2>
                    <div>
                        {this.state.todos.map((todo, index) => {
                            return (
                                <TodoList key={index} 
                                          isCompleted={todo.isCompleted} 
                                          text={todo.todoText} 
                                          toggle={() => this.toggleIsCompleted(index)} />
                            )
                            }
                        )}
                        
                    </div>
                </div>
            </div>

        )
    }
}

let TodoList = (props) => {
    return (
        <div className="d-flex" style={{width:"60%"}}>
            <h3 className="mx-2" style={{}}>{props.text}</h3>
            {props.isCompleted ? <i className="far fa-check-square" onClick={() => props.toggle()}></i> : <i className="far fa-square" onClick={() => props.toggle()}></i> } 
        </div>
        
    )
}







ReactDOM.render(<Form/>, document.getElementById('root'));