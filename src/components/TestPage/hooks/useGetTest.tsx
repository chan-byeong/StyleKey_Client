import { useSuspenseQuery } from '@tanstack/react-query';
import request from '../../../api/api';
import { queryKeys } from '../../common/queryKeys';

interface Answer {
  answer_id: number;
  content: string;
}

interface TestQuestion {
  question_id: number;
  content: string;
  image_url: string;
  answers: Answer[];
}

const fetchTestQuestions = async () => {
  const response = await request<null, null, TestQuestion[]>({
    url: '/api/test-questions',
    method: 'get',
  });

  return response;
};

const useGetTest = () => {
  const { data } = useSuspenseQuery({
    queryKey: [queryKeys.testQuestions],
    queryFn: fetchTestQuestions,
  });

  return data.data;
};

export default useGetTest;
