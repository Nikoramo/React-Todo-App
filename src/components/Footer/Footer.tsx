import React, { useMemo } from 'react';
import { Todo } from '../../types/Todo';
import { PageNavLink } from '../PageNavLink';

type Props = {
  todos: Todo[];
  clearCompleted: () => void;
};

export const Footer:React.FC<Props> = ({
  todos,
  clearCompleted,
}) => {
  const todosLeft = useMemo(() => todos.filter(todoLeft => !todoLeft.completed).length, [todos]);
  const isVisibleButton = useMemo(() => todos.some(todo => todo.completed), [todos]);

  return (
    <footer className="footer">
      <span className="todo-count" data-cy="todosCounter">
        {todosLeft === 1 ? '1 item left' : `${todosLeft} items left`}
      </span>

      <ul className="filters" data-cy="todosFilter">
        <li>
          <PageNavLink
            to="/"
            text="All"
          />
        </li>

        <li>
          <PageNavLink
            to="/active"
            text="Active"
          />
        </li>

        <li>
          <PageNavLink
            to="/completed"
            text="Completed"
          />
        </li>
      </ul>

      {isVisibleButton && (
        <button
          type="button"
          className="clear-completed"
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};
