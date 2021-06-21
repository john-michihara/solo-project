import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotebooks } from '../../store/notebooks';

const NotebooksContainer = () => {
  const dispatch = useDispatch();
  const notebooks = useSelector(state => Object.values(state.notebooks));
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    if (user) {
      dispatch(getNotebooks(user.id));
    }
  }, [dispatch]);

  return (
    <div>
      {notebooks.map(notebook => (
        <img key={notebook.id} src={notebook.coverUrl} height='300' width='200' />
      ))}
    </div>
  );
};

export default NotebooksContainer;
