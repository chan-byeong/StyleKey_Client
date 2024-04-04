import { useSuspenseQuery } from '@tanstack/react-query';

import request from '../../../api/api';
import { queryKeys } from '../../common/queryKeys';

interface StyleImageType {
  id: number;
  title: string;
  description: string;
  image: string;
}

async function getStyleImages() {
  const response = await request<null, null, StyleImageType[]>({
    url: '/api/style-points',
    method: 'get',
  });
  return response.data;
}

const useGetImages = () => {
  const { data } = useSuspenseQuery({
    queryKey: [queryKeys.styleImages],
    queryFn: getStyleImages,
  });
  return { data };
};

export default useGetImages;
