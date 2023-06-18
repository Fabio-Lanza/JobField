import  FormRow  from '../../components/FormRow/FormRow';
import Wrapper from '../../Styled-components/DashboardFormPage-style';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function AddJob() {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };


  return (
    <h1>AddJob</h1>
  )
}

export default AddJob