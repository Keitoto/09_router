import useSWR from 'swr';

import { fetcher } from '@/helper/fetcher';
import { UserList } from '@/pages/UserList/UserList';

export const UserListPage = () => {
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <UserList users={data} />;
};
