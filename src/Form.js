import React, { Component } from 'react'
import { CardContent, IconButton, CardActions, Typography } from '@material-ui/core'
import { Add, DeleteForever } from '@material-ui/icons'
import Tasks from './Tasks'
import { connect } from 'react-redux'
import { getAllTask, addTask, updateTask, deleteTask } from './actions/taskAction'
import { getUser } from './actions/getUserId';
import { setEditButton } from './actions/editButtonAction'

class Form extends Component {
    state = {
        task_description: "",
        date: "",
        time: "",
        assign_user: "",
        addButton: false
    }
    addTask = () => {
        this.handleCancelButton();
        this.setState({ addButton: true, assign_user: this.props.user.name });
    }
    handleCancelButton = () => {
        this.setState({ addButton: false });
        this.props.dispatch(setEditButton(false));
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const date1 = this.state.date;
        if (this.props.editButton) {
            var time2 = this.props.singleTask.task_time;
        }
        const timeArr = this.state.time.split(":");
        const time1 = 60 * (60 * (Number(timeArr[0])) + Number(timeArr[1]))
        const time3 = time1 ? time1 : time2;
        const formData = {
            assigned_user: this.props.user.id,
            task_date: date1,
            task_time: time3,
            is_completed: 0,
            time_zone: -19800,
            task_msg: this.state.task_description
        }
        if (this.props.editButton) {
            this.props.dispatch(updateTask(this.props.singleTask.id, formData))
        }
        else
            this.props.dispatch(addTask(formData))
        this.handleCancelButton()
    }
    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        //console.log(name+" : "+value+typeof(value));
        this.setState({ [name]: value });
    }
    handleEdit = () => {
        if (this.props.editButton) {
            this.setState({
                task_description: this.props.singleTask.task_msg,
                assign_user: this.props.user.name,
                date: this.props.singleTask.task_date
            })
        }
    }
    handleDelete = () => {
        this.props.dispatch(deleteTask(this.props.singleTask.id))
        this.handleCancelButton()
    }
    componentDidMount() {
        this.props.dispatch(getAllTask())
        this.props.dispatch(getUser())
    }

    render() {
        return (
            <>
                <CardContent >
                    <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-control">
                            <Typography>TASKS {`${this.props.tasks.length}`}
                                <IconButton style={{ float: "right" }} onClick={() => this.addTask()}>
                                    <Add />
                                </IconButton>
                            </Typography>
                        </div>
                        {(this.state.addButton || this.props.editButton) ?
                            <><div className="form-group">
                                <label htmlFor="task_description">Task Description</label>
                                <input
                                    type="text"
                                    value={this.state.task_description}
                                    onClick={this.handleEdit}
                                    onChange={(e) => this.handleInputChange(e)}
                                    id="task_description"
                                    name="task_description"
                                    className="form-control"
                                />
                            </div>
                                <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        value={this.state.date}
                                        onClick={this.handleEdit}
                                        onChange={(e) => this.handleInputChange(e)}
                                        id="date"
                                        name="date"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="time">Time</label>
                                    <input
                                        type="time"
                                        value={this.state.time}
                                        onClick={this.handleEdit}
                                        onChange={(e) => this.handleInputChange(e)}
                                        id="time"
                                        name="time"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="assign_user">Assign User</label>
                                    <input
                                        type="text"
                                        value={this.state.assign_user}
                                        onClick={this.handleEdit}
                                        onChange={(e) => this.handleInputChange(e)}
                                        id="assign_user"
                                        name="assign_user"
                                        min="08:00" max="18:00"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group" align="right" >
                                    <button className="btn btn-lg" onClick={() => this.handleCancelButton()}>Cancel</button>
                                    <button type="submit" className="btn btn-lg btn-success">Save</button>
                                </div></>
                            : <Tasks />}
                    </form>
                </CardContent>
                <CardActions>
                    {this.props.editButton &&
                        <IconButton onClick={() => this.handleDelete()}>
                            <DeleteForever />
                        </IconButton>}
                </CardActions>
            </>
        )
    }
}
function mapStateToProps({ user, editButton, singleTask, tasks }) {
    return {
        user,
        editButton,
        singleTask,
        tasks
    }
}

export default connect(mapStateToProps)(Form);