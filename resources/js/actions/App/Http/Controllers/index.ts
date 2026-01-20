import PostController from './PostController'
import TaskController from './TaskController'

const Controllers = {
    PostController: Object.assign(PostController, PostController),
    TaskController: Object.assign(TaskController, TaskController),
}

export default Controllers