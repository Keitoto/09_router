import { Group, Paper, Stack, Text, Title } from '@mantine/core';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import { fetcher } from '@/helper/fetcher';

export const UserDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <Paper>
        <Title>{data.name}</Title>
        <Stack mt="md">
          <Group>
            <Text weight="bold">Username: </Text>
            <Text>{data.username}</Text>
          </Group>
          <Group>
            <Text weight="bold">Email: </Text>
            <Text>{data.email}</Text>
          </Group>
          <Group>
            <Text weight="bold">Phone: </Text>
            <Text>{data.phone}</Text>
          </Group>
        </Stack>
      </Paper>
    </div>
  );
};
