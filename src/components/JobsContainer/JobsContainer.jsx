import { useEffect } from "react";
import Job from "../Jobs/Jobs";
import Wrapper from "../../Styled-components/JobsContainer-style";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../Loading/Loading";

function JobsContainer() {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loading center/>;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>Jobs Info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          console.log(job);
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
}

export default JobsContainer;
