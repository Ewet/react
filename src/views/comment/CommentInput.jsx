import React, {Component} from 'react';

class CommentInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            content: ''
        }
    };
    handleInputChange(e) {
        this.setState({
            userName: e.target.value
        })
    };
    handleTextareaChange(e) {
        this.setState({
            content: e.target.value
        })
    };
    handleSubmit() {
        if (this.props.onSubmit) {
            const { userName, content } = this.state
            this.props.onSubmit({userName, content})
          }
        this.setState({ content: '' })
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input 
                            value={this.state.userName}
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                            value={this.state.content}
                            onChange={this.handleTextareaChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}
                    >
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
export default CommentInput