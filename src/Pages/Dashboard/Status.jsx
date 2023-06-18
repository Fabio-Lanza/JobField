import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../Feature/AllJobs/allJobsSlice";
import StatusContainer from "../../components/Status/StatusContainer";
import ChartsContainer from "../../components/Charts/ChartsContainer";
import Loading from './../../components/Loading/Loading';


function Status() {
  const { isLoading, monthlyApplications } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatusContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}

export default Status;
