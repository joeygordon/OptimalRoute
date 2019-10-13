export const findJobInArray = (id, jobArray) => {
  return jobArray.find(job => {
    return job.id === parseInt(id, 10);
  });
};
