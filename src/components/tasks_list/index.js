import PropTypes from 'prop-types'
import Task from 'components/task'
import { ListContainer } from './task_list.styles'
import { varsTask2, varsTasksList } from 'styles/variants'
import { AnimatePresence, motion } from 'framer-motion'

export default function TaskList ({ tasks, action, isMobile }) {
  const taskCompleted = (task) => {
    action(task)
  }
  return (
    <AnimatePresence>
      <ListContainer initial="initial" animate="animate" exit="exit" variants={varsTasksList}>
        <AnimatePresence>
        {
          tasks.map((task, i) => {
            return (
              <motion.div custom={i} variants={varsTask2} key={task._id} layout>
                <Task
                  text={task.content}
                  category={task.category}
                  taskCompleted={() => taskCompleted(task)}
                  isMobile={isMobile}
                />
              </motion.div>
            )
          })
        }
        </AnimatePresence>
      </ListContainer>
    </AnimatePresence>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array
}
