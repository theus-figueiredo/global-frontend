import http from './http-common';

const endpoint = '/comments';
const queryparam = '/?serviceOrderId';

async function getAllByOs(id) {
  const allComments = await http.get(`${endpoint}${queryparam}=${id}`);
  return allComments;
};

const commentService = {
  getAllByOs
};

export default commentService;
