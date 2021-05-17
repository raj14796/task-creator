import React, { Component } from 'react'
import { CardHeader, IconButton, Avatar, Typography } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import { connect } from 'react-redux'
import { setEditButton } from './actions/editButtonAction'
import { getSingleTask } from './actions/taskAction'

class Tasks extends Component {
    handleEditButton(taskId) {
        this.props.dispatch(getSingleTask(taskId))
        this.props.dispatch(setEditButton(true));
    }
    render() {
        return (
            <>
                {
                    this.props.tasks.map((aTask) => (
                        <CardHeader key={aTask.id}
                            avatar={
                                <Avatar src={aTask.user_icon} alt="user_icon" ></Avatar>
                            }
                            title={aTask.task_msg}
                            color = "white"
                            subheader={<Typography color="secondary">{aTask.task_date}</Typography>}
                            action={
                                <IconButton onClick={() => this.handleEditButton(aTask.id)}>
                                    <Edit />
                                </IconButton>
                            }
                        />
                    ))
                }
            </>
        )
    }
}

function mapStateToProps({ tasks }) {
    return {
        tasks,
    }
}

export default connect(mapStateToProps)(Tasks);