import {
  Button,
  Card,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { User } from '@/pages/UserList/type';

export const UserList: FC<{ users: User[] }> = ({ users }) => (
  // <List>
  <SimpleGrid cols={3} verticalSpacing={48}>
    {users.map((user) => (
      <Card key={user.id} shadow="md">
        <Card.Section>
          <Image src="https://images.unsplash.com/photo-1677827635012-d9c18b4dab68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1202&q=80" />
        </Card.Section>
        <Card.Section p="sm">
          <Title size="sm" mb="sm">
            {user.name}
          </Title>
          <Group>
            <Text weight="bold">Username: </Text>
            <Text>{user.username}</Text>
          </Group>
          <Group>
            <Text weight="bold">Email: </Text>
            <Text>{user.email}</Text>
          </Group>
          <Group>
            <Text weight="bold">Phone: </Text>
            <Text>{user.phone}</Text>
          </Group>

          <Button mt="sm">
            <Link to={`/users/${user.id}`}>Show details</Link>
          </Button>
        </Card.Section>
      </Card>
    ))}
  </SimpleGrid>
  // </List>
);
